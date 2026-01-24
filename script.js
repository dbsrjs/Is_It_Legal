const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const themeBtn = $("#themeBtn");
const scrollTopBtn = $("#scrollTopBtn");

const searchInput = $("#searchInput");
const searchBtn = $("#searchBtn");
const searchResults = $("#searchResults");

const modal = $("#modal");
const modalBackdrop = $("#modalBackdrop");
const modalCloseBtn = $("#modalCloseBtn");
const modalTitle = $("#modalTitle");
const modalImg = $("#modalImg");

const copyIntroBtn = $("#copyIntroBtn");

const travelGrid = $("#travelGrid");

// ---- Theme ----
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  const icon = theme === "light" ? "☾" : "☼";
  themeBtn.querySelector(".btn-ic").textContent = icon;
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
}

(function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") setTheme(saved);
  else setTheme("dark");
})();

themeBtn.addEventListener("click", toggleTheme);

// ---- Scroll Top ----
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---- Meter Fill ----
function fillMeters() {
  $$(".meter").forEach((m) => {
    const v = Number(m.dataset.value || "0");
    const pct = Math.max(0, Math.min(5, v)) * 20;
    m.style.setProperty("--pct", `${pct}%`);
    // set width via after
    m.style.setProperty("position", "relative");
    m.style.setProperty("overflow", "hidden");
    m.style.setProperty("borderRadius", "999px");
    m.style.setProperty("border", "1px solid var(--stroke)");
    m.style.setProperty("height", "10px");

    // Apply width to ::after by injecting style
    m.style.setProperty("--meterWidth", `${pct}%`);
    m.style.setProperty("background", "transparent");
    m.style.setProperty("transform", "translateZ(0)");

    // hack: set CSS var and read it in inline style using a sheet rule
  });

  // mini-score
  $$(".mini-score").forEach((m) => {
    const v = Number(m.dataset.score || "0");
    const pct = Math.max(0, Math.min(5, v)) * 20;
    m.style.setProperty("--meterWidth", `${pct}%`);
  });
}

// Inject CSS rule for meter width (pseudo element cannot be set directly via JS)
(function injectMeterRule() {
  const style = document.createElement("style");
  style.textContent = `
    .meter::after{ width: var(--meterWidth, 0%); }
    .mini-score::after{ width: var(--meterWidth, 0%); }
  `;
  document.head.appendChild(style);
})();

window.addEventListener("load", () => {
  // small delay for nicer feel
  setTimeout(fillMeters, 120);
});

// ---- Search Index ----
const searchIndex = [
  { title: "기본 정보", desc: "이윤건 · 172cm · 50kg · A+ · ISTJ/P · 성일정보고 21217", target: "#about" },
  { title: "인스턴트", desc: "치킨, 피자, 햄버거 다 좋아함", target: "#food" },
  { title: "연어초밥", desc: "해산물 최애 · 연어초밥 💯", target: "#food" },
  { title: "라면", desc: "너구리, 신라면, 육개장", target: "#food" },
  { title: "하리보 푸리티부시", desc: "젤리 최애", target: "#food" },
  { title: "맵찔이", desc: "매운 음식 안 좋아함", target: "#food" },
  { title: "칼국수", desc: "먹으면 배 아픔", target: "#food" },
  { title: "좋아하는 사람", desc: "공손함 · 배려심", target: "#people" },
  { title: "싫어하는 사람", desc: "부정적 · 욕 많음 · 장난으로 때림 · 친구<돈", target: "#people" },
  { title: "여행", desc: "스트레스 해소 최고", target: "#hobby" },
  { title: "뉴욕", desc: "죽기 전에 꼭 가고 싶은 여행지", target: "#travel" },
  { title: "하와이", desc: "휴양", target: "#travel" },
  { title: "몰디브", desc: "바다 감성", target: "#travel" },
  { title: "우유니 사막", desc: "거울 같은 하늘", target: "#travel" },
  { title: "유럽", desc: "성인 되면 배낭여행", target: "#travel" },
  { title: "Unity", desc: "가장 자신있는 분야", target: "#dev" },
  { title: "Unreal", desc: "C++ 기반, 2024년부터 시작", target: "#dev" },
  { title: "JSP/JDBC", desc: "웹 개발 중 서버 연결 파트는 재미있음", target: "#dev" },
  { title: "알고리즘", desc: "Java/Python/C# 병행", target: "#dev" },
];

function renderResults(items) {
  searchResults.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "result-item";
    empty.innerHTML = `
      <div class="result-title">No result</div>
      <div class="result-desc">다른 키워드로 검색해봐</div>
    `;
    searchResults.appendChild(empty);
    return;
  }

  items.slice(0, 6).forEach((it) => {
    const el = document.createElement("div");
    el.className = "result-item";
    el.innerHTML = `
      <div class="result-title">${escapeHtml(it.title)}</div>
      <div class="result-desc">${escapeHtml(it.desc)}</div>
    `;
    el.addEventListener("click", () => {
      const target = document.querySelector(it.target);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    searchResults.appendChild(el);
  });
}

function doSearch(q) {
  const query = (q || "").trim().toLowerCase();
  if (!query) {
    renderResults(searchIndex.slice(0, 5));
    return;
  }

  const scored = searchIndex
    .map((it) => {
      const hay = `${it.title} ${it.desc}`.toLowerCase();
      const score = hay.includes(query) ? 2 : 0;
      const score2 = it.title.toLowerCase().includes(query) ? 1 : 0;
      return { ...it, _score: score + score2 };
    })
    .filter((it) => it._score > 0)
    .sort((a, b) => b._score - a._score);

  renderResults(scored);
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

searchBtn.addEventListener("click", () => doSearch(searchInput.value));
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") doSearch(searchInput.value);
});

(function initResults() {
  renderResults(searchIndex.slice(0, 5));
})();

// Chip search
$("#chipRow").addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  const key = btn.dataset.chip || "";
  searchInput.value = key;
  doSearch(key);
});

// ---- Travel Modal ----
// 사용자가 준 노션 이미지 URL을 직접 넣으면 CORS/만료 이슈가 생길 수 있어서
// 여기서는 "그라데이션 이미지"를 JS로 만들어서 보여주게 처리함.
// 원하면 네가 가진 이미지 파일로 교체 가능.
function createGradientImage(seed) {
  const canvas = document.createElement("canvas");
  canvas.width = 1600;
  canvas.height = 900;
  const ctx = canvas.getContext("2d");

  // simple seeded colors
  const presets = {
    ny: ["rgba(140,120,255,1)", "rgba(60,210,255,1)"],
    hawaii: ["rgba(120,255,210,1)", "rgba(60,210,255,1)"],
    guam: ["rgba(255,120,200,1)", "rgba(120,255,210,1)"],
    maldives: ["rgba(60,210,255,1)", "rgba(255,255,255,0.9)"],
    kawasan: ["rgba(120,255,210,1)", "rgba(140,120,255,1)"],
    uyuni: ["rgba(255,255,255,0.9)", "rgba(140,120,255,1)"],
    europe: ["rgba(255,120,200,1)", "rgba(140,120,255,1)"],
  };

  const [c1, c2] = presets[seed] || ["rgba(140,120,255,1)", "rgba(60,210,255,1)"];

  const g = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  g.addColorStop(0, c1);
  g.addColorStop(1, c2);

  ctx.fillStyle = g;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // highlight
  const rg = ctx.createRadialGradient(500, 260, 30, 500, 260, 520);
  rg.addColorStop(0, "rgba(255,255,255,0.55)");
  rg.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = rg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // subtle grid
  ctx.globalAlpha = 0.12;
  ctx.strokeStyle = "rgba(255,255,255,0.35)";
  for (let x = 0; x < canvas.width; x += 80) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += 80) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  return canvas.toDataURL("image/png");
}

function openModal(title, seed) {
  modalTitle.textContent = title;
  modalImg.src = createGradientImage(seed);

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

travelGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".travel-card");
  if (!card) return;
  openModal(card.dataset.title, card.dataset.img);
});

modalBackdrop.addEventListener("click", closeModal);
modalCloseBtn.addEventListener("click", closeModal);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ---- Copy Intro ----
copyIntroBtn.addEventListener("click", async () => {
  const intro = [
    "이윤건 (성일정보고등학교 21217)",
    "- Unity(C#) 중심 게임 개발을 공부하는 프로그래머",
    "- 알고리즘(Java/Python/C#)과 웹(JSP/JDBC)도 병행",
    "- 여행/노래/게임/오토바이 관심",
    "- 연어초밥, 라면, 하리보 푸리티부시 좋아함",
  ].join("\n");

  try {
    await navigator.clipboard.writeText(intro);
    copyIntroBtn.querySelector(".btn-tx").textContent = "Copied";
    setTimeout(() => (copyIntroBtn.querySelector(".btn-tx").textContent = "소개문 복사"), 900);
  } catch {
    alert("복사 실패: 브라우저 권한을 확인해줘");
  }
});
