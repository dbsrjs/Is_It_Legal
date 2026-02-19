// translations.js - 다국어 번역 파일

export const translations = {
  ko: {
    // Meta
    meta: {
      title: "합법일까? - 글로벌 법률 가이드",
      description: "전 세계 200개국 이상의 법률 정보를 무료로 확인하세요. 드론, VPN, 대마초, 도박 등 즉시 법적 상태 확인.",
      searchTitle: "{topic} {country} - 합법일까?"
    },

    // Header
    logo: "합법일까?",
    nav: {
      home: "홈",
      categories: "카테고리",
      about: "소개"
    },

    // Hero Section
    hero: {
      title: "그것이 합법인지 알아보세요",
      subtitle: "전 세계 어디서나",
      description: "여행자, 디지털 노마드, 호기심 많은 분들을 위한 포괄적인 법률 정보",
      searchPlaceholder: "예: 일본 드론, 중국 VPN, 독일 대마초...",
      searchButton: "검색",
      popularSearches: "인기 검색:",
      examples: {
        drone: "일본 드론",
        vpn: "중국 VPN",
        cannabis: "독일 대마초"
      }
    },

    // Categories
    categories: {
      title: "카테고리별 탐색",
      digital: {
        title: "디지털",
        description: "VPN, 토렌트, 웹 스크래핑"
      },
      drone: {
        title: "드론 & 사진",
        description: "드론 법규, 거리 사진"
      },
      gambling: {
        title: "도박",
        description: "온라인 카지노, 스포츠 베팅"
      },
      substances: {
        title: "물질",
        description: "대마초, CBD, 전자담배"
      },
      possessions: {
        title: "소지품",
        description: "칼, 호신용 스프레이, 전기충격기"
      },
      privacy: {
        title: "프라이버시",
        description: "통화 녹음, 위치 추적"
      },
      traffic: {
        title: "교통",
        description: "음주운전 한계, 전화 사용"
      },
      business: {
        title: "비즈니스",
        description: "암호화폐, 프리랜싱"
      }
    },

    // How It Works
    howItWorks: {
      title: "작동 방식",
      step1: {
        title: "검색",
        description: "행동과 국가 입력"
      },
      step2: {
        title: "학습",
        description: "즉시 법적 상태 확인"
      },
      step3: {
        title: "검증",
        description: "공식 출처 확인"
      }
    },

    // Loading
    loading: {
      title: "검색 중...",
      analyzing: "쿼리 분석 중",
      searching: "법률 데이터베이스 검색 중",
      processing: "정보 처리 중"
    },

    // Error
    error: {
      title: "오류가 발생했습니다",
      retry: "다시 시도",
      tips: "팁:",
      tip1: "검색어를 단순화해 보세요",
      tip2: "국가명을 확인하세요",
      tip3: "인터넷 연결을 확인하세요"
    },

    // Search Results
    results: {
      title: "검색 결과:",
      in: "",
      viewDetails: "전체 상세 정보 보기",
      noResults: "에 대한 결과가 없습니다",
      noResultsTip: "다른 키워드를 시도하거나 철자를 확인해 보세요",
      resultCount: "개의 결과를 찾았습니다"
    },

    // Status
    status: {
      legal: "합법",
      conditional: "조건부 합법",
      illegal: "불법",
      unclear: "불명확"
    },

    // Law Details
    details: {
      title: "상세 법률 정보",
      summary: "요약",
      details: "상세 정보",
      conditions: "조건 및 요구사항",
      penalties: "위반 시 처벌",
      sources: "공식 출처",
      updated: "업데이트:",
      disclaimer: "면책 조항",
      disclaimerText: "이 정보는 일반적인 참고용이며 전문적인 법률 자문을 대체하지 않습니다. 항상 해당 국가의 현지 법률 전문가나 공식 정부 기관에 문의하여 최신 정보를 확인하시기 바랍니다."
    },

    // Recent Searches
    recentSearches: {
      title: "최근 검색",
      clearAll: "전체 삭제"
    },

    // FAQ
    faq: {
      title: "자주 묻는 질문",
      description: "사용자들이 가장 많이 궁금해하는 법률 정보를 확인하세요",
      items: [
        {
          question: "중국에서 VPN 사용은 합법인가요?",
          answer: "중국에서 허가되지 않은 VPN 사용은 기술적으로 불법입니다. 중국 정부는 VPN 사용을 제한하며, 정부 승인 VPN 서비스만 허용됩니다. 외국인 방문자는 실무적으로 VPN을 사용할 수 있지만 법적 위험이 존재합니다."
        },
        {
          question: "일본에서 드론을 날릴 수 있나요?",
          answer: "일본에서 드론 비행은 합법이지만 규제를 받습니다. 100g 이상의 드론은 등록이 필요하며, 공항 근처, 인파 위, 150m 이상 고도에서는 국토교통성의 허가 없이 비행할 수 없습니다."
        },
        {
          question: "독일에서 대마초는 합법인가요?",
          answer: "독일은 2024년 성인 대상 기호용 대마초를 합법화했습니다. 18세 이상 성인은 공공장소에서 25g까지 소지할 수 있으며, 자택에서 최대 3그루까지 재배할 수 있습니다. 단, 학교 근처나 미성년자 앞에서의 사용은 제한됩니다."
        },
        {
          question: "한국에서 온라인 카지노는 합법인가요?",
          answer: "한국에서 온라인 도박은 한국 국적자에게 불법입니다. 내국인이 이용할 수 있는 유일한 합법 카지노는 강원랜드입니다. 외국인 관광객은 지정된 외국인 전용 카지노에서 도박할 수 있지만, 온라인 도박은 모든 거주자에게 금지됩니다."
        },
        {
          question: "미국에서 전화 통화를 녹음하는 것은 합법인가요?",
          answer: "미국의 전화 녹음법은 주마다 다릅니다. 일부 주는 일방 동의(한 사람만 녹음 사실을 알면 됨)를 요구하고, 다른 주는 전원 동의를 요구합니다. 연방법은 최소 일방 동의를 요구합니다."
        },
        {
          question: "여행 시 CBD 오일 휴대가 합법인가요?",
          answer: "CBD 합법성은 국가마다 크게 다릅니다. 미국에서는 THC 0.3% 미만의 대마 유래 CBD가 연방법상 합법입니다. 그러나 많은 국가에서 CBD를 전면 금지합니다. CBD 제품을 가지고 여행하기 전에 반드시 목적지 국가의 법률을 확인하세요."
        }
      ]
    },

    // Country Comparison
    comparison: {
      title: "국가별 법률 비교",
      description: "다양한 국가에서 동일한 주제가 어떻게 규제되는지 비교해보세요",
      selectTopic: "비교할 주제 선택",
      topic: "주제",
      country: "국가",
      status: "상태",
      summary: "요약"
    },

    // Share
    share: {
      title: "결과 공유",
      copyLink: "링크 복사",
      copied: "복사됨!",
      twitter: "X에 공유",
      facebook: "Facebook에 공유",
      reddit: "Reddit에 공유",
      shareText: "[topic]이(가) [country]에서 합법인가요? [status] 확인하기 → Law or Not!"
    },

    // Trending
    trending: {
      title: "추천 검색",
      personalTitle: "맞춤 추천"
    },

    // Related Searches
    relatedSearches: {
      title: "관련 검색"
    },

    // Footer
    footer: {
      title: "합법일까?",
      description: "글로벌 법률 정보 플랫폼",
      quickLinks: "빠른 링크",
      about: "소개",
      privacy: "개인정보 처리방침",
      contribute: "기여하기",
      disclaimerTitle: "면책 조항",
      disclaimerText: "이 웹사이트는 일반적인 법률 정보만 제공하며 전문적인 법률 자문을 대체하지 않습니다.",
      copyright: "© 2026 합법일까? All rights reserved.",
      developedBy: "개발자.",
      contact: "문의."
    }
  },

  en: {
    // Meta
    meta: {
      title: "Is It Legal? - Global Legal Guide",
      description: "Check legal status in 200+ countries for free. Drones, VPNs, cannabis, gambling and more - instant legal information.",
      searchTitle: "{topic} {country} - Is It Legal?"
    },

    // Header
    logo: "Is It Legal?",
    nav: {
      home: "Home",
      categories: "Categories",
      about: "About"
    },

    // Hero Section
    hero: {
      title: "Find Out If It's Legal",
      subtitle: "in Any Country",
      description: "Comprehensive legal information for travelers, digital nomads, and curious minds",
      searchPlaceholder: "e.g., drone Japan, VPN China, cannabis Germany...",
      searchButton: "Search",
      popularSearches: "Popular searches:",
      examples: {
        drone: "drone Japan",
        vpn: "VPN China",
        cannabis: "cannabis Germany"
      }
    },

    // Categories
    categories: {
      title: "Browse by Category",
      digital: {
        title: "Digital",
        description: "VPN, Torrenting, Web Scraping"
      },
      drone: {
        title: "Drone & Photography",
        description: "Drone Laws, Street Photography"
      },
      gambling: {
        title: "Gambling",
        description: "Online Casino, Sports Betting"
      },
      substances: {
        title: "Substances",
        description: "Cannabis, CBD, E-cigarettes"
      },
      possessions: {
        title: "Possessions",
        description: "Knives, Pepper Spray, Tasers"
      },
      privacy: {
        title: "Privacy",
        description: "Call Recording, Location Tracking"
      },
      traffic: {
        title: "Traffic",
        description: "DUI Limits, Phone Usage"
      },
      business: {
        title: "Business",
        description: "Cryptocurrency, Freelancing"
      }
    },

    // How It Works
    howItWorks: {
      title: "How It Works",
      step1: {
        title: "Search",
        description: "Enter an action and country"
      },
      step2: {
        title: "Learn",
        description: "Get instant legal status"
      },
      step3: {
        title: "Verify",
        description: "Check official sources"
      }
    },

    // Loading
    loading: {
      title: "Searching...",
      analyzing: "Analyzing your query",
      searching: "Searching legal databases",
      processing: "Processing information"
    },

    // Error
    error: {
      title: "Oops! Something went wrong",
      retry: "Try Again",
      tips: "Tips:",
      tip1: "Try simplifying your search query",
      tip2: "Make sure the country name is correct",
      tip3: "Check your internet connection"
    },

    // Search Results
    results: {
      title: "Search Results for:",
      in: "in",
      viewDetails: "View Full Details",
      noResults: "No results found for",
      noResultsTip: "Try different keywords or check the spelling",
      resultCount: "result(s) found"
    },

    // Status
    status: {
      legal: "Legal",
      conditional: "Conditional",
      illegal: "Illegal",
      unclear: "Unclear"
    },

    // Law Details
    details: {
      title: "Detailed Legal Information",
      summary: "Summary",
      details: "Detailed Information",
      conditions: "Conditions & Requirements",
      penalties: "Penalties for Violations",
      sources: "Official Sources",
      updated: "Last Updated:",
      disclaimer: "Important Disclaimer",
      disclaimerText: "This information is for general reference only and does not constitute professional legal advice. Always consult with local legal experts or official government authorities in the respective country for the most current information."
    },

    // Recent Searches
    recentSearches: {
      title: "Recent Searches",
      clearAll: "Clear All"
    },

    // FAQ
    faq: {
      title: "Frequently Asked Questions",
      description: "Answers to the most common legal questions from our users",
      items: [
        {
          question: "Is VPN legal in China?",
          answer: "Using unauthorized VPNs in China is technically illegal. The Chinese government restricts VPN usage and only government-approved VPN services are permitted. Foreign visitors may use VPNs in practice, but there is legal risk involved."
        },
        {
          question: "Can I fly a drone in Japan?",
          answer: "Drone flying in Japan is legal but regulated. You need to register drones over 100g, and you cannot fly near airports, over crowds, or above 150m altitude without permission from the Ministry of Land, Infrastructure, Transport and Tourism."
        },
        {
          question: "Is cannabis legal in Germany?",
          answer: "Germany legalized recreational cannabis for adults in 2024. Adults 18+ can possess up to 25g in public and grow up to 3 plants at home. However, there are restrictions on consumption near schools and in the presence of minors."
        },
        {
          question: "Are online casinos legal in South Korea?",
          answer: "Online gambling is illegal in South Korea for Korean citizens. The only legal casino for locals is Kangwon Land. Foreign tourists may gamble at designated foreigner-only casinos, but online gambling remains prohibited for all residents."
        },
        {
          question: "Is it legal to record phone calls in the USA?",
          answer: "Phone call recording laws vary by state in the USA. Some states require one-party consent (only one person needs to know about the recording), while others require all-party consent. Federal law requires at least one-party consent."
        },
        {
          question: "Is CBD oil legal to carry while traveling?",
          answer: "CBD legality varies significantly by country. In the US, hemp-derived CBD with less than 0.3% THC is federally legal. However, many countries ban CBD entirely. Always check the specific laws of your destination country before traveling with CBD products."
        }
      ]
    },

    // Country Comparison
    comparison: {
      title: "Compare Laws Across Countries",
      description: "See how the same topic is regulated in different countries",
      selectTopic: "Select a topic to compare",
      topic: "Topic",
      country: "Country",
      status: "Status",
      summary: "Summary"
    },

    // Share
    share: {
      title: "Share Results",
      copyLink: "Copy Link",
      copied: "Copied!",
      twitter: "Share on X",
      facebook: "Share on Facebook",
      reddit: "Share on Reddit",
      shareText: "Is [topic] legal in [country]? [status] Find out on Law or Not!"
    },

    // Trending
    trending: {
      title: "Recommended Searches",
      personalTitle: "Personalized for You"
    },

    // Related Searches
    relatedSearches: {
      title: "Related Searches"
    },

    // Footer
    footer: {
      title: "Is It Legal?",
      description: "Global legal information platform",
      quickLinks: "Quick Links",
      about: "About",
      privacy: "Privacy Policy",
      contribute: "Contribute",
      disclaimerTitle: "Disclaimer",
      disclaimerText: "This website provides general legal information only and is not a substitute for professional legal advice.",
      copyright: "© 2026 Is It Legal? All rights reserved.",
      developedBy: "Developer.",
      contact: "Contact."
    }
  },

  ja: {
    // Meta
    meta: {
      title: "合法ですか? - グローバル法律ガイド",
      description: "200カ国以上の法律情報を無料で確認。ドローン、VPN、大麻、ギャンブルなど、即座に法的状態を確認できます。",
      searchTitle: "{topic} {country} - 合法ですか?"
    },

    // Header
    logo: "合法ですか?",
    nav: {
      home: "ホーム",
      categories: "カテゴリー",
      about: "概要"
    },

    // Hero Section
    hero: {
      title: "合法かどうか調べる",
      subtitle: "世界中どこでも",
      description: "旅行者、デジタルノマド、好奇心旺盛な方のための包括的な法律情報",
      searchPlaceholder: "例: 日本 ドローン、中国 VPN、ドイツ 大麻...",
      searchButton: "検索",
      popularSearches: "人気の検索:",
      examples: {
        drone: "日本 ドローン",
        vpn: "中国 VPN",
        cannabis: "ドイツ 大麻"
      }
    },

    // Categories
    categories: {
      title: "カテゴリー別に閲覧",
      digital: {
        title: "デジタル",
        description: "VPN、トレント、ウェブスクレイピング"
      },
      drone: {
        title: "ドローン & 写真",
        description: "ドローン法、ストリート写真"
      },
      gambling: {
        title: "ギャンブル",
        description: "オンラインカジノ、スポーツベッティング"
      },
      substances: {
        title: "物質",
        description: "大麻、CBD、電子タバコ"
      },
      possessions: {
        title: "所持品",
        description: "ナイフ、催涙スプレー、スタンガン"
      },
      privacy: {
        title: "プライバシー",
        description: "通話録音、位置追跡"
      },
      traffic: {
        title: "交通",
        description: "飲酒運転制限、電話使用"
      },
      business: {
        title: "ビジネス",
        description: "暗号通貨、フリーランス"
      }
    },

    // How It Works
    howItWorks: {
      title: "使い方",
      step1: {
        title: "検索",
        description: "行動と国を入力"
      },
      step2: {
        title: "学習",
        description: "即座に法的状態を取得"
      },
      step3: {
        title: "検証",
        description: "公式情報源を確認"
      }
    },

    // Loading
    loading: {
      title: "検索中...",
      analyzing: "クエリを分析中",
      searching: "法律データベースを検索中",
      processing: "情報を処理中"
    },

    // Error
    error: {
      title: "エラーが発生しました",
      retry: "再試行",
      tips: "ヒント:",
      tip1: "検索クエリを簡素化してみてください",
      tip2: "国名が正しいか確認してください",
      tip3: "インターネット接続を確認してください"
    },

    // Search Results
    results: {
      title: "検索結果:",
      in: "",
      viewDetails: "詳細を表示",
      noResults: "に関する結果が見つかりません",
      noResultsTip: "別のキーワードを試すか、スペルを確認してください",
      resultCount: "件の結果が見つかりました"
    },

    // Status
    status: {
      legal: "合法",
      conditional: "条件付き",
      illegal: "違法",
      unclear: "不明確"
    },

    // Law Details
    details: {
      title: "詳細な法律情報",
      summary: "概要",
      details: "詳細情報",
      conditions: "条件と要件",
      penalties: "違反時の罰則",
      sources: "公式情報源",
      updated: "最終更新:",
      disclaimer: "免責事項",
      disclaimerText: "この情報は一般的な参考用であり、専門的な法律アドバイスに代わるものではありません。最新情報については、必ず当該国の地元の法律専門家または公式政府機関にお問い合わせください。"
    },

    // Recent Searches
    recentSearches: {
      title: "最近の検索",
      clearAll: "すべて削除"
    },

    // FAQ
    faq: {
      title: "よくある質問",
      description: "ユーザーから最も多く寄せられる法律に関する質問",
      items: [
        {
          question: "中国でVPNの使用は合法ですか？",
          answer: "中国で許可されていないVPNの使用は技術的に違法です。中国政府はVPNの使用を制限しており、政府承認のVPNサービスのみが許可されています。外国人訪問者は実務上VPNを使用できますが、法的リスクがあります。"
        },
        {
          question: "日本でドローンを飛ばすことはできますか？",
          answer: "日本でのドローン飛行は合法ですが規制があります。100g以上のドローンは登録が必要で、空港付近、人混みの上空、150m以上の高度では国土交通省の許可なく飛行できません。"
        },
        {
          question: "ドイツで大麻は合法ですか？",
          answer: "ドイツは2024年に成人向け嗜好用大麻を合法化しました。18歳以上の成人は公共の場で25gまで所持でき、自宅で最大3株まで栽培できます。ただし、学校付近や未成年者の前での使用は制限されています。"
        },
        {
          question: "韓国でオンラインカジノは合法ですか？",
          answer: "韓国でのオンラインギャンブルは韓国国籍者にとって違法です。国内で唯一合法なカジノは江原ランドです。外国人観光客は指定された外国人専用カジノでギャンブルできますが、オンラインギャンブルはすべての居住者に禁止されています。"
        },
        {
          question: "アメリカで電話の録音は合法ですか？",
          answer: "アメリカの電話録音法は州によって異なります。一部の州は一方同意（一人だけが録音を知っていればよい）を必要とし、他の州は全員同意を必要とします。連邦法は少なくとも一方同意を必要とします。"
        },
        {
          question: "旅行中にCBDオイルを持ち歩くことは合法ですか？",
          answer: "CBDの合法性は国によって大きく異なります。アメリカでは、THC含有量0.3%未満の麻由来CBDは連邦法上合法です。しかし、多くの国ではCBDを全面的に禁止しています。CBD製品を持って旅行する前に、必ず目的地の国の法律を確認してください。"
        }
      ]
    },

    // Country Comparison
    comparison: {
      title: "国別法律比較",
      description: "同じトピックが異なる国でどのように規制されているか比較する",
      selectTopic: "比較するトピックを選択",
      topic: "トピック",
      country: "国",
      status: "状態",
      summary: "概要"
    },

    // Share
    share: {
      title: "結果を共有",
      copyLink: "リンクをコピー",
      copied: "コピーしました！",
      twitter: "Xで共有",
      facebook: "Facebookで共有",
      reddit: "Redditで共有",
      shareText: "[topic]は[country]で合法ですか？ [status] Law or Notで確認 →"
    },

    // Trending
    trending: {
      title: "おすすめ検索",
      personalTitle: "あなたへのおすすめ"
    },

    // Related Searches
    relatedSearches: {
      title: "関連検索"
    },

    // Footer
    footer: {
      title: "合法ですか?",
      description: "グローバル法律情報プラットフォーム",
      quickLinks: "クイックリンク",
      about: "概要",
      privacy: "プライバシーポリシー",
      contribute: "貢献する",
      disclaimerTitle: "免責事項",
      disclaimerText: "このウェブサイトは一般的な法律情報のみを提供し、専門的な法律アドバイスの代替ではありません。",
      copyright: "© 2026 合法ですか? All rights reserved.",
      developedBy: "開発者.",
      contact: "お問い合わせ."
    }
  },

  es: {
    // Meta
    meta: {
      title: "¿Es Legal? - Guía Legal Global",
      description: "Consulta el estado legal en más de 200 países gratis. Drones, VPN, cannabis, apuestas y más: información legal instantánea.",
      searchTitle: "{topic} {country} - ¿Es Legal?"
    },

    // Header
    logo: "¿Es Legal?",
    nav: {
      home: "Inicio",
      categories: "Categorías",
      about: "Acerca de"
    },

    // Hero Section
    hero: {
      title: "Descubre si es legal",
      subtitle: "en cualquier país",
      description: "Información legal completa para viajeros, nómadas digitales y mentes curiosas",
      searchPlaceholder: "Ej: drones Japón, VPN China, cannabis Alemania...",
      searchButton: "Buscar",
      popularSearches: "Búsquedas populares:",
      examples: {
        drone: "drones Japón",
        vpn: "VPN China",
        cannabis: "cannabis Alemania"
      }
    },

    // Categories
    categories: {
      title: "Explorar por categoría",
      digital: {
        title: "Digital",
        description: "VPN, Torrents, Web Scraping"
      },
      drone: {
        title: "Drones y Fotografía",
        description: "Leyes de drones, Fotografía callejera"
      },
      gambling: {
        title: "Apuestas",
        description: "Casino en línea, Apuestas deportivas"
      },
      substances: {
        title: "Sustancias",
        description: "Cannabis, CBD, Cigarrillos electrónicos"
      },
      possessions: {
        title: "Posesiones",
        description: "Cuchillos, Spray de pimienta, Táser"
      },
      privacy: {
        title: "Privacidad",
        description: "Grabación de llamadas, Rastreo de ubicación"
      },
      traffic: {
        title: "Tráfico",
        description: "Límites de alcoholemia, Uso del teléfono"
      },
      business: {
        title: "Negocios",
        description: "Criptomonedas, Freelancing"
      }
    },

    // How It Works
    howItWorks: {
      title: "Cómo funciona",
      step1: {
        title: "Buscar",
        description: "Ingresa una acción y un país"
      },
      step2: {
        title: "Aprender",
        description: "Obtén el estado legal al instante"
      },
      step3: {
        title: "Verificar",
        description: "Consulta fuentes oficiales"
      }
    },

    // Loading
    loading: {
      title: "Buscando...",
      analyzing: "Analizando tu consulta",
      searching: "Buscando en bases de datos legales",
      processing: "Procesando información"
    },

    // Error
    error: {
      title: "¡Algo salió mal!",
      retry: "Intentar de nuevo",
      tips: "Consejos:",
      tip1: "Intenta simplificar tu búsqueda",
      tip2: "Asegúrate de que el nombre del país sea correcto",
      tip3: "Verifica tu conexión a internet"
    },

    // Search Results
    results: {
      title: "Resultados para:",
      in: "en",
      viewDetails: "Ver detalles completos",
      noResults: "No se encontraron resultados para",
      noResultsTip: "Prueba con otras palabras clave o revisa la ortografía",
      resultCount: "resultado(s) encontrado(s)"
    },

    // Status
    status: {
      legal: "Legal",
      conditional: "Condicional",
      illegal: "Ilegal",
      unclear: "Incierto"
    },

    // Law Details
    details: {
      title: "Información legal detallada",
      summary: "Resumen",
      details: "Información detallada",
      conditions: "Condiciones y requisitos",
      penalties: "Sanciones por infracciones",
      sources: "Fuentes oficiales",
      updated: "Última actualización:",
      disclaimer: "Aviso importante",
      disclaimerText: "Esta información es solo de referencia general y no constituye asesoramiento legal profesional. Siempre consulte con expertos legales locales o autoridades gubernamentales oficiales del país correspondiente para obtener la información más actualizada."
    },

    // Recent Searches
    recentSearches: {
      title: "Búsquedas recientes",
      clearAll: "Borrar todo"
    },

    // FAQ
    faq: {
      title: "Preguntas frecuentes",
      description: "Respuestas a las preguntas legales más comunes de nuestros usuarios",
      items: [
        {
          question: "¿Es legal usar VPN en China?",
          answer: "El uso de VPN no autorizadas en China es técnicamente ilegal. El gobierno chino restringe el uso de VPN y solo se permiten los servicios aprobados por el gobierno. Los visitantes extranjeros pueden usar VPN en la práctica, pero existe un riesgo legal."
        },
        {
          question: "¿Puedo volar un dron en Japón?",
          answer: "Volar drones en Japón es legal pero está regulado. Necesitas registrar los drones de más de 100g y no puedes volar cerca de aeropuertos, sobre multitudes o a más de 150m de altitud sin permiso del Ministerio de Tierra, Infraestructura, Transporte y Turismo."
        },
        {
          question: "¿Es legal el cannabis en Alemania?",
          answer: "Alemania legalizó el cannabis recreativo para adultos en 2024. Los adultos mayores de 18 años pueden poseer hasta 25g en público y cultivar hasta 3 plantas en casa. Sin embargo, hay restricciones de consumo cerca de escuelas y en presencia de menores."
        },
        {
          question: "¿Son legales los casinos en línea en Corea del Sur?",
          answer: "Las apuestas en línea son ilegales en Corea del Sur para los ciudadanos coreanos. El único casino legal para locales es Kangwon Land. Los turistas extranjeros pueden apostar en casinos designados solo para extranjeros, pero las apuestas en línea siguen prohibidas para todos los residentes."
        },
        {
          question: "¿Es legal grabar llamadas telefónicas en EE.UU.?",
          answer: "Las leyes de grabación de llamadas varían según el estado en EE.UU. Algunos estados requieren el consentimiento de una parte (solo una persona necesita saber de la grabación), mientras que otros requieren el consentimiento de todas las partes. La ley federal requiere al menos el consentimiento de una parte."
        },
        {
          question: "¿Es legal llevar aceite de CBD al viajar?",
          answer: "La legalidad del CBD varía significativamente según el país. En EE.UU., el CBD derivado del cáñamo con menos del 0,3% de THC es legal a nivel federal. Sin embargo, muchos países prohíben el CBD por completo. Siempre verifique las leyes específicas de su país de destino antes de viajar con productos de CBD."
        }
      ]
    },

    // Country Comparison
    comparison: {
      title: "Comparar leyes entre países",
      description: "Vea cómo se regula el mismo tema en diferentes países",
      selectTopic: "Seleccione un tema para comparar",
      topic: "Tema",
      country: "País",
      status: "Estado",
      summary: "Resumen"
    },

    // Share
    share: {
      title: "Compartir resultados",
      copyLink: "Copiar enlace",
      copied: "¡Copiado!",
      twitter: "Compartir en X",
      facebook: "Compartir en Facebook",
      reddit: "Compartir en Reddit",
      shareText: "¿Es legal [topic] en [country]? [status] ¡Descúbrelo en Law or Not!"
    },

    // Trending
    trending: {
      title: "Búsquedas recomendadas",
      personalTitle: "Personalizado para ti"
    },

    // Related Searches
    relatedSearches: {
      title: "Búsquedas relacionadas"
    },

    // Footer
    footer: {
      title: "¿Es Legal?",
      description: "Plataforma global de información legal",
      quickLinks: "Enlaces rápidos",
      about: "Acerca de",
      privacy: "Política de privacidad",
      contribute: "Contribuir",
      disclaimerTitle: "Aviso legal",
      disclaimerText: "Este sitio web solo proporciona información legal general y no sustituye el asesoramiento legal profesional.",
      copyright: "© 2026 ¿Es Legal? Todos los derechos reservados.",
      developedBy: "Desarrollador.",
      contact: "Contacto."
    }
  }
};

export const languages = [
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
];
