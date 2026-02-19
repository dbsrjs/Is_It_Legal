import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './TrendingTopics.css';

const recommendedPool = {
  ko: [
    { query: "태국 대마초", icon: "🌿", status: "conditional" },
    { query: "일본 드론", icon: "🚁", status: "conditional" },
    { query: "중국 VPN", icon: "💻", status: "illegal" },
    { query: "네덜란드 도박", icon: "🎰", status: "legal" },
    { query: "미국 총기", icon: "🔫", status: "conditional" },
    { query: "한국 온라인 도박", icon: "🎰", status: "illegal" },
    { query: "캐나다 대마초", icon: "🌿", status: "legal" },
    { query: "호주 전자담배", icon: "🚬", status: "conditional" },
    { query: "싱가포르 껌", icon: "🍬", status: "illegal" },
    { query: "독일 맥주 길거리 음주", icon: "🍺", status: "legal" },
    { query: "영국 칼 소지", icon: "🔪", status: "illegal" },
    { query: "프랑스 음주운전", icon: "🚗", status: "conditional" },
    { query: "러시아 VPN", icon: "💻", status: "conditional" },
    { query: "브라질 총기", icon: "🔫", status: "conditional" },
    { query: "일본 암호화폐", icon: "💼", status: "legal" },
    { query: "미국 통화 녹음", icon: "📞", status: "conditional" },
    { query: "두바이 음주", icon: "🍺", status: "conditional" },
    { query: "스위스 CBD", icon: "🌿", status: "legal" },
    { query: "태국 전자담배", icon: "🚬", status: "illegal" },
    { query: "멕시코 대마초", icon: "🌿", status: "conditional" },
    { query: "북한 인터넷", icon: "🌐", status: "illegal" },
    { query: "이란 VPN", icon: "💻", status: "illegal" },
    { query: "포르투갈 마약", icon: "💊", status: "conditional" },
    { query: "인도 암호화폐", icon: "💼", status: "conditional" },
    { query: "필리핀 총기", icon: "🔫", status: "conditional" },
    { query: "쿠바 인터넷", icon: "🌐", status: "conditional" },
    { query: "우루과이 대마초", icon: "🌿", status: "legal" },
    { query: "사우디 음주", icon: "🍺", status: "illegal" },
    { query: "뉴질랜드 드론", icon: "🚁", status: "conditional" },
    { query: "영국 CCTV", icon: "📷", status: "legal" },
    { query: "터키 VPN", icon: "💻", status: "conditional" },
    { query: "호주 후추 스프레이", icon: "🔪", status: "conditional" },
    { query: "스페인 길거리 음주", icon: "🍺", status: "conditional" },
    { query: "체코 총기", icon: "🔫", status: "conditional" },
    { query: "이탈리아 드론", icon: "🚁", status: "conditional" },
    { query: "남아공 대마초", icon: "🌿", status: "legal" },
    { query: "베트남 도박", icon: "🎰", status: "illegal" },
    { query: "중국 암호화폐", icon: "💼", status: "illegal" },
    { query: "미국 스포츠 베팅", icon: "🎰", status: "conditional" },
    { query: "독일 토렌트", icon: "💻", status: "illegal" },
    { query: "일본 문신 온천", icon: "♨️", status: "conditional" },
    { query: "싱가포르 전자담배", icon: "🚬", status: "illegal" },
    { query: "네덜란드 매춘", icon: "🏠", status: "legal" },
    { query: "한국 이중국적", icon: "🛂", status: "conditional" },
    { query: "호주 선크림 학교", icon: "☀️", status: "conditional" },
    { query: "독일 홈스쿨링", icon: "📚", status: "illegal" },
    { query: "미국 제이워킹", icon: "🚶", status: "conditional" },
    { query: "일본 자전거 음주", icon: "🚲", status: "illegal" },
    { query: "스웨덴 매춘", icon: "🏠", status: "conditional" },
    { query: "중국 게임 시간 제한", icon: "🎮", status: "illegal" },
    { query: "캐나다 안락사", icon: "🏥", status: "legal" },
    { query: "태국 왕실 모독", icon: "👑", status: "illegal" },
    { query: "인도 소고기", icon: "🐄", status: "conditional" },
    { query: "이탈리아 모조품 구매", icon: "👜", status: "illegal" },
    { query: "프랑스 부르카", icon: "🧕", status: "illegal" },
    { query: "미국 대리모", icon: "👶", status: "conditional" },
    { query: "영국 팍스 사냥", icon: "🦊", status: "illegal" },
    { query: "일본 셀프 방어 무기", icon: "🛡️", status: "conditional" },
    { query: "러시아 동성 결혼", icon: "🏳️‍🌈", status: "illegal" },
    { query: "호주 캥거루 사냥", icon: "🦘", status: "conditional" },
    { query: "스위스 일요일 세탁", icon: "👕", status: "conditional" },
    { query: "중국 SNS 검열", icon: "📱", status: "illegal" },
    { query: "미국 쿠바 여행", icon: "✈️", status: "conditional" },
    { query: "네덜란드 안락사", icon: "🏥", status: "legal" },
    { query: "한국 병역 거부", icon: "🪖", status: "conditional" },
    { query: "독일 나치 상징", icon: "🚫", status: "illegal" },
    { query: "일본 소음 규제", icon: "🔊", status: "conditional" },
    { query: "노르웨이 전기차 혜택", icon: "🚗", status: "legal" },
    { query: "싱가포르 쓰레기 투기", icon: "🗑️", status: "illegal" },
    { query: "미국 로또 온라인", icon: "🎫", status: "conditional" },
    { query: "이집트 드론", icon: "🚁", status: "illegal" },
    { query: "콜롬비아 코카 잎", icon: "🌿", status: "conditional" },
    { query: "핀란드 사우나 법", icon: "🧖", status: "legal" },
    { query: "태국 로열젤리 반출", icon: "🐝", status: "conditional" },
    { query: "인도네시아 음주", icon: "🍺", status: "conditional" },
    { query: "카타르 동거", icon: "🏠", status: "illegal" },
    { query: "말레이시아 전자담배", icon: "🚬", status: "conditional" },
    { query: "아르헨티나 낙태", icon: "🏥", status: "legal" },
    { query: "폴란드 낙태", icon: "🏥", status: "illegal" },
    { query: "벨기에 안락사", icon: "🏥", status: "legal" },
    { query: "터키 음주 광고", icon: "🍺", status: "illegal" },
    { query: "아이슬란드 고래 사냥", icon: "🐋", status: "conditional" },
    { query: "캄보디아 총기", icon: "🔫", status: "illegal" },
    { query: "코스타리카 매춘", icon: "🏠", status: "legal" },
    { query: "파키스탄 신성 모독", icon: "📖", status: "illegal" },
    { query: "에스토니아 전자 시민권", icon: "💳", status: "legal" },
    { query: "그리스 누드 비치", icon: "🏖️", status: "conditional" },
    { query: "헝가리 노숙", icon: "🏠", status: "illegal" },
    { query: "미국 빗물 수집", icon: "🌧️", status: "conditional" },
    { query: "일본 맥주 자판기", icon: "🍺", status: "legal" },
    { query: "대만 동성 결혼", icon: "🏳️‍🌈", status: "legal" },
    { query: "페루 코카 잎 차", icon: "🍵", status: "legal" },
    { query: "나이지리아 암호화폐", icon: "💼", status: "conditional" },
    { query: "모로코 대마초", icon: "🌿", status: "conditional" },
    { query: "일본 블랙잭 딜러", icon: "🃏", status: "illegal" },
    { query: "베트남 오토바이 면허", icon: "🏍️", status: "conditional" },
    { query: "한국 타투", icon: "💉", status: "conditional" },
    { query: "스페인 스쿼팅", icon: "🏠", status: "conditional" }
  ],
  en: [
    { query: "cannabis Thailand", icon: "🌿", status: "conditional" },
    { query: "drone Japan", icon: "🚁", status: "conditional" },
    { query: "VPN China", icon: "💻", status: "illegal" },
    { query: "gambling Netherlands", icon: "🎰", status: "legal" },
    { query: "guns USA", icon: "🔫", status: "conditional" },
    { query: "online gambling Korea", icon: "🎰", status: "illegal" },
    { query: "cannabis Canada", icon: "🌿", status: "legal" },
    { query: "vaping Australia", icon: "🚬", status: "conditional" },
    { query: "chewing gum Singapore", icon: "🍬", status: "illegal" },
    { query: "street drinking Germany", icon: "🍺", status: "legal" },
    { query: "knife carry UK", icon: "🔪", status: "illegal" },
    { query: "DUI limits France", icon: "🚗", status: "conditional" },
    { query: "VPN Russia", icon: "💻", status: "conditional" },
    { query: "guns Brazil", icon: "🔫", status: "conditional" },
    { query: "crypto Japan", icon: "💼", status: "legal" },
    { query: "recording calls USA", icon: "📞", status: "conditional" },
    { query: "alcohol Dubai", icon: "🍺", status: "conditional" },
    { query: "CBD Switzerland", icon: "🌿", status: "legal" },
    { query: "vaping Thailand", icon: "🚬", status: "illegal" },
    { query: "cannabis Mexico", icon: "🌿", status: "conditional" },
    { query: "internet North Korea", icon: "🌐", status: "illegal" },
    { query: "VPN Iran", icon: "💻", status: "illegal" },
    { query: "drugs Portugal", icon: "💊", status: "conditional" },
    { query: "crypto India", icon: "💼", status: "conditional" },
    { query: "guns Philippines", icon: "🔫", status: "conditional" },
    { query: "internet Cuba", icon: "🌐", status: "conditional" },
    { query: "cannabis Uruguay", icon: "🌿", status: "legal" },
    { query: "alcohol Saudi Arabia", icon: "🍺", status: "illegal" },
    { query: "drone New Zealand", icon: "🚁", status: "conditional" },
    { query: "CCTV UK", icon: "📷", status: "legal" },
    { query: "VPN Turkey", icon: "💻", status: "conditional" },
    { query: "pepper spray Australia", icon: "🔪", status: "conditional" },
    { query: "street drinking Spain", icon: "🍺", status: "conditional" },
    { query: "guns Czech Republic", icon: "🔫", status: "conditional" },
    { query: "drone Italy", icon: "🚁", status: "conditional" },
    { query: "cannabis South Africa", icon: "🌿", status: "legal" },
    { query: "gambling Vietnam", icon: "🎰", status: "illegal" },
    { query: "crypto China", icon: "💼", status: "illegal" },
    { query: "sports betting USA", icon: "🎰", status: "conditional" },
    { query: "torrenting Germany", icon: "💻", status: "illegal" },
    { query: "tattoo onsen Japan", icon: "♨️", status: "conditional" },
    { query: "e-cigarettes Singapore", icon: "🚬", status: "illegal" },
    { query: "prostitution Netherlands", icon: "🏠", status: "legal" },
    { query: "dual citizenship Korea", icon: "🛂", status: "conditional" },
    { query: "sunscreen school Australia", icon: "☀️", status: "conditional" },
    { query: "homeschooling Germany", icon: "📚", status: "illegal" },
    { query: "jaywalking USA", icon: "🚶", status: "conditional" },
    { query: "cycling drunk Japan", icon: "🚲", status: "illegal" },
    { query: "prostitution Sweden", icon: "🏠", status: "conditional" },
    { query: "gaming time limit China", icon: "🎮", status: "illegal" },
    { query: "euthanasia Canada", icon: "🏥", status: "legal" },
    { query: "lese majeste Thailand", icon: "👑", status: "illegal" },
    { query: "beef ban India", icon: "🐄", status: "conditional" },
    { query: "buying counterfeit Italy", icon: "👜", status: "illegal" },
    { query: "burqa ban France", icon: "🧕", status: "illegal" },
    { query: "surrogacy USA", icon: "👶", status: "conditional" },
    { query: "fox hunting UK", icon: "🦊", status: "illegal" },
    { query: "self defense weapons Japan", icon: "🛡️", status: "conditional" },
    { query: "same-sex marriage Russia", icon: "🏳️‍🌈", status: "illegal" },
    { query: "kangaroo hunting Australia", icon: "🦘", status: "conditional" },
    { query: "Sunday laundry Switzerland", icon: "👕", status: "conditional" },
    { query: "social media censorship China", icon: "📱", status: "illegal" },
    { query: "travel to Cuba USA", icon: "✈️", status: "conditional" },
    { query: "euthanasia Netherlands", icon: "🏥", status: "legal" },
    { query: "conscientious objection Korea", icon: "🪖", status: "conditional" },
    { query: "Nazi symbols Germany", icon: "🚫", status: "illegal" },
    { query: "noise regulations Japan", icon: "🔊", status: "conditional" },
    { query: "EV benefits Norway", icon: "🚗", status: "legal" },
    { query: "littering Singapore", icon: "🗑️", status: "illegal" },
    { query: "online lottery USA", icon: "🎫", status: "conditional" },
    { query: "drone Egypt", icon: "🚁", status: "illegal" },
    { query: "coca leaves Colombia", icon: "🌿", status: "conditional" },
    { query: "sauna law Finland", icon: "🧖", status: "legal" },
    { query: "royal jelly export Thailand", icon: "🐝", status: "conditional" },
    { query: "alcohol Indonesia", icon: "🍺", status: "conditional" },
    { query: "cohabitation Qatar", icon: "🏠", status: "illegal" },
    { query: "e-cigarettes Malaysia", icon: "🚬", status: "conditional" },
    { query: "abortion Argentina", icon: "🏥", status: "legal" },
    { query: "abortion Poland", icon: "🏥", status: "illegal" },
    { query: "euthanasia Belgium", icon: "🏥", status: "legal" },
    { query: "alcohol advertising Turkey", icon: "🍺", status: "illegal" },
    { query: "whaling Iceland", icon: "🐋", status: "conditional" },
    { query: "guns Cambodia", icon: "🔫", status: "illegal" },
    { query: "prostitution Costa Rica", icon: "🏠", status: "legal" },
    { query: "blasphemy Pakistan", icon: "📖", status: "illegal" },
    { query: "e-residency Estonia", icon: "💳", status: "legal" },
    { query: "nude beach Greece", icon: "🏖️", status: "conditional" },
    { query: "homelessness Hungary", icon: "🏠", status: "illegal" },
    { query: "rainwater collection USA", icon: "🌧️", status: "conditional" },
    { query: "beer vending machine Japan", icon: "🍺", status: "legal" },
    { query: "same-sex marriage Taiwan", icon: "🏳️‍🌈", status: "legal" },
    { query: "coca leaf tea Peru", icon: "🍵", status: "legal" },
    { query: "crypto Nigeria", icon: "💼", status: "conditional" },
    { query: "cannabis Morocco", icon: "🌿", status: "conditional" },
    { query: "casino gambling Japan", icon: "🃏", status: "illegal" },
    { query: "motorbike license Vietnam", icon: "🏍️", status: "conditional" },
    { query: "tattooing Korea", icon: "💉", status: "conditional" },
    { query: "squatting Spain", icon: "🏠", status: "conditional" }
  ],
  ja: [
    { query: "タイ 大麻", icon: "🌿", status: "conditional" },
    { query: "日本 ドローン", icon: "🚁", status: "conditional" },
    { query: "中国 VPN", icon: "💻", status: "illegal" },
    { query: "オランダ ギャンブル", icon: "🎰", status: "legal" },
    { query: "アメリカ 銃", icon: "🔫", status: "conditional" },
    { query: "韓国 オンラインギャンブル", icon: "🎰", status: "illegal" },
    { query: "カナダ 大麻", icon: "🌿", status: "legal" },
    { query: "オーストラリア 電子タバコ", icon: "🚬", status: "conditional" },
    { query: "シンガポール ガム", icon: "🍬", status: "illegal" },
    { query: "ドイツ 路上飲酒", icon: "🍺", status: "legal" },
    { query: "イギリス ナイフ", icon: "🔪", status: "illegal" },
    { query: "フランス 飲酒運転", icon: "🚗", status: "conditional" },
    { query: "ロシア VPN", icon: "💻", status: "conditional" },
    { query: "ブラジル 銃", icon: "🔫", status: "conditional" },
    { query: "日本 暗号通貨", icon: "💼", status: "legal" },
    { query: "アメリカ 通話録音", icon: "📞", status: "conditional" },
    { query: "ドバイ 飲酒", icon: "🍺", status: "conditional" },
    { query: "スイス CBD", icon: "🌿", status: "legal" },
    { query: "タイ 電子タバコ", icon: "🚬", status: "illegal" },
    { query: "メキシコ 大麻", icon: "🌿", status: "conditional" },
    { query: "北朝鮮 インターネット", icon: "🌐", status: "illegal" },
    { query: "イラン VPN", icon: "💻", status: "illegal" },
    { query: "ポルトガル 薬物", icon: "💊", status: "conditional" },
    { query: "インド 暗号通貨", icon: "💼", status: "conditional" },
    { query: "フィリピン 銃", icon: "🔫", status: "conditional" },
    { query: "キューバ インターネット", icon: "🌐", status: "conditional" },
    { query: "ウルグアイ 大麻", icon: "🌿", status: "legal" },
    { query: "サウジアラビア 飲酒", icon: "🍺", status: "illegal" },
    { query: "ニュージーランド ドローン", icon: "🚁", status: "conditional" },
    { query: "イギリス 監視カメラ", icon: "📷", status: "legal" },
    { query: "トルコ VPN", icon: "💻", status: "conditional" },
    { query: "オーストラリア 催涙スプレー", icon: "🔪", status: "conditional" },
    { query: "スペイン 路上飲酒", icon: "🍺", status: "conditional" },
    { query: "チェコ 銃", icon: "🔫", status: "conditional" },
    { query: "イタリア ドローン", icon: "🚁", status: "conditional" },
    { query: "南アフリカ 大麻", icon: "🌿", status: "legal" },
    { query: "ベトナム ギャンブル", icon: "🎰", status: "illegal" },
    { query: "中国 暗号通貨", icon: "💼", status: "illegal" },
    { query: "アメリカ スポーツベッティング", icon: "🎰", status: "conditional" },
    { query: "ドイツ トレント", icon: "💻", status: "illegal" },
    { query: "日本 タトゥー温泉", icon: "♨️", status: "conditional" },
    { query: "シンガポール 電子タバコ", icon: "🚬", status: "illegal" },
    { query: "オランダ 売春", icon: "🏠", status: "legal" },
    { query: "韓国 二重国籍", icon: "🛂", status: "conditional" },
    { query: "オーストラリア 日焼け止め学校", icon: "☀️", status: "conditional" },
    { query: "ドイツ ホームスクーリング", icon: "📚", status: "illegal" },
    { query: "アメリカ 信号無視横断", icon: "🚶", status: "conditional" },
    { query: "日本 自転車飲酒", icon: "🚲", status: "illegal" },
    { query: "スウェーデン 売春", icon: "🏠", status: "conditional" },
    { query: "中国 ゲーム時間制限", icon: "🎮", status: "illegal" },
    { query: "カナダ 安楽死", icon: "🏥", status: "legal" },
    { query: "タイ 不敬罪", icon: "👑", status: "illegal" },
    { query: "インド 牛肉禁止", icon: "🐄", status: "conditional" },
    { query: "イタリア 偽ブランド購入", icon: "👜", status: "illegal" },
    { query: "フランス ブルカ禁止", icon: "🧕", status: "illegal" },
    { query: "アメリカ 代理出産", icon: "👶", status: "conditional" },
    { query: "イギリス キツネ狩り", icon: "🦊", status: "illegal" },
    { query: "日本 護身武器", icon: "🛡️", status: "conditional" },
    { query: "ロシア 同性婚", icon: "🏳️‍🌈", status: "illegal" },
    { query: "オーストラリア カンガルー狩猟", icon: "🦘", status: "conditional" },
    { query: "スイス 日曜洗濯", icon: "👕", status: "conditional" },
    { query: "中国 SNS検閲", icon: "📱", status: "illegal" },
    { query: "アメリカ キューバ渡航", icon: "✈️", status: "conditional" },
    { query: "オランダ 安楽死", icon: "🏥", status: "legal" },
    { query: "韓国 良心的兵役拒否", icon: "🪖", status: "conditional" },
    { query: "ドイツ ナチスシンボル", icon: "🚫", status: "illegal" },
    { query: "日本 騒音規制", icon: "🔊", status: "conditional" },
    { query: "ノルウェー EV優遇", icon: "🚗", status: "legal" },
    { query: "シンガポール ポイ捨て", icon: "🗑️", status: "illegal" },
    { query: "アメリカ オンライン宝くじ", icon: "🎫", status: "conditional" },
    { query: "エジプト ドローン", icon: "🚁", status: "illegal" },
    { query: "コロンビア コカの葉", icon: "🌿", status: "conditional" },
    { query: "フィンランド サウナ法", icon: "🧖", status: "legal" },
    { query: "タイ ロイヤルゼリー持出", icon: "🐝", status: "conditional" },
    { query: "インドネシア 飲酒", icon: "🍺", status: "conditional" },
    { query: "カタール 同棲", icon: "🏠", status: "illegal" },
    { query: "マレーシア 電子タバコ", icon: "🚬", status: "conditional" },
    { query: "アルゼンチン 中絶", icon: "🏥", status: "legal" },
    { query: "ポーランド 中絶", icon: "🏥", status: "illegal" },
    { query: "ベルギー 安楽死", icon: "🏥", status: "legal" },
    { query: "トルコ 酒類広告", icon: "🍺", status: "illegal" },
    { query: "アイスランド 捕鯨", icon: "🐋", status: "conditional" },
    { query: "カンボジア 銃", icon: "🔫", status: "illegal" },
    { query: "コスタリカ 売春", icon: "🏠", status: "legal" },
    { query: "パキスタン 冒涜罪", icon: "📖", status: "illegal" },
    { query: "エストニア 電子市民権", icon: "💳", status: "legal" },
    { query: "ギリシャ ヌーディストビーチ", icon: "🏖️", status: "conditional" },
    { query: "ハンガリー ホームレス", icon: "🏠", status: "illegal" },
    { query: "アメリカ 雨水収集", icon: "🌧️", status: "conditional" },
    { query: "日本 ビール自販機", icon: "🍺", status: "legal" },
    { query: "台湾 同性婚", icon: "🏳️‍🌈", status: "legal" },
    { query: "ペルー コカ茶", icon: "🍵", status: "legal" },
    { query: "ナイジェリア 暗号通貨", icon: "💼", status: "conditional" },
    { query: "モロッコ 大麻", icon: "🌿", status: "conditional" },
    { query: "日本 カジノ", icon: "🃏", status: "illegal" },
    { query: "ベトナム バイク免許", icon: "🏍️", status: "conditional" },
    { query: "韓国 タトゥー", icon: "💉", status: "conditional" },
    { query: "スペイン スクワッティング", icon: "🏠", status: "conditional" }
  ],
  es: [
    { query: "cannabis Tailandia", icon: "🌿", status: "conditional" },
    { query: "drones Japón", icon: "🚁", status: "conditional" },
    { query: "VPN China", icon: "💻", status: "illegal" },
    { query: "apuestas Países Bajos", icon: "🎰", status: "legal" },
    { query: "armas EE.UU.", icon: "🔫", status: "conditional" },
    { query: "apuestas en línea Corea", icon: "🎰", status: "illegal" },
    { query: "cannabis Canadá", icon: "🌿", status: "legal" },
    { query: "vapeo Australia", icon: "🚬", status: "conditional" },
    { query: "chicle Singapur", icon: "🍬", status: "illegal" },
    { query: "beber en la calle Alemania", icon: "🍺", status: "legal" },
    { query: "portar cuchillo Reino Unido", icon: "🔪", status: "illegal" },
    { query: "límites alcoholemia Francia", icon: "🚗", status: "conditional" },
    { query: "VPN Rusia", icon: "💻", status: "conditional" },
    { query: "armas Brasil", icon: "🔫", status: "conditional" },
    { query: "cripto Japón", icon: "💼", status: "legal" },
    { query: "grabar llamadas EE.UU.", icon: "📞", status: "conditional" },
    { query: "alcohol Dubái", icon: "🍺", status: "conditional" },
    { query: "CBD Suiza", icon: "🌿", status: "legal" },
    { query: "vapeo Tailandia", icon: "🚬", status: "illegal" },
    { query: "cannabis México", icon: "🌿", status: "conditional" },
    { query: "internet Corea del Norte", icon: "🌐", status: "illegal" },
    { query: "VPN Irán", icon: "💻", status: "illegal" },
    { query: "drogas Portugal", icon: "💊", status: "conditional" },
    { query: "cripto India", icon: "💼", status: "conditional" },
    { query: "armas Filipinas", icon: "🔫", status: "conditional" },
    { query: "internet Cuba", icon: "🌐", status: "conditional" },
    { query: "cannabis Uruguay", icon: "🌿", status: "legal" },
    { query: "alcohol Arabia Saudita", icon: "🍺", status: "illegal" },
    { query: "drones Nueva Zelanda", icon: "🚁", status: "conditional" },
    { query: "CCTV Reino Unido", icon: "📷", status: "legal" },
    { query: "VPN Turquía", icon: "💻", status: "conditional" },
    { query: "spray pimienta Australia", icon: "🔪", status: "conditional" },
    { query: "beber en la calle España", icon: "🍺", status: "conditional" },
    { query: "armas República Checa", icon: "🔫", status: "conditional" },
    { query: "drones Italia", icon: "🚁", status: "conditional" },
    { query: "cannabis Sudáfrica", icon: "🌿", status: "legal" },
    { query: "apuestas Vietnam", icon: "🎰", status: "illegal" },
    { query: "cripto China", icon: "💼", status: "illegal" },
    { query: "apuestas deportivas EE.UU.", icon: "🎰", status: "conditional" },
    { query: "torrents Alemania", icon: "💻", status: "illegal" },
    { query: "tatuajes onsen Japón", icon: "♨️", status: "conditional" },
    { query: "cigarrillos electrónicos Singapur", icon: "🚬", status: "illegal" },
    { query: "prostitución Países Bajos", icon: "🏠", status: "legal" },
    { query: "doble nacionalidad Corea", icon: "🛂", status: "conditional" },
    { query: "protector solar escuela Australia", icon: "☀️", status: "conditional" },
    { query: "educación en casa Alemania", icon: "📚", status: "illegal" },
    { query: "cruzar imprudente EE.UU.", icon: "🚶", status: "conditional" },
    { query: "ciclismo ebrio Japón", icon: "🚲", status: "illegal" },
    { query: "prostitución Suecia", icon: "🏠", status: "conditional" },
    { query: "límite tiempo videojuegos China", icon: "🎮", status: "illegal" },
    { query: "eutanasia Canadá", icon: "🏥", status: "legal" },
    { query: "lesa majestad Tailandia", icon: "👑", status: "illegal" },
    { query: "prohibición carne India", icon: "🐄", status: "conditional" },
    { query: "comprar falsificaciones Italia", icon: "👜", status: "illegal" },
    { query: "prohibición burka Francia", icon: "🧕", status: "illegal" },
    { query: "gestación subrogada EE.UU.", icon: "👶", status: "conditional" },
    { query: "caza de zorros Reino Unido", icon: "🦊", status: "illegal" },
    { query: "armas defensa personal Japón", icon: "🛡️", status: "conditional" },
    { query: "matrimonio igualitario Rusia", icon: "🏳️‍🌈", status: "illegal" },
    { query: "caza canguros Australia", icon: "🦘", status: "conditional" },
    { query: "lavar domingo Suiza", icon: "👕", status: "conditional" },
    { query: "censura redes sociales China", icon: "📱", status: "illegal" },
    { query: "viajar a Cuba EE.UU.", icon: "✈️", status: "conditional" },
    { query: "eutanasia Países Bajos", icon: "🏥", status: "legal" },
    { query: "objeción conciencia Corea", icon: "🪖", status: "conditional" },
    { query: "símbolos nazis Alemania", icon: "🚫", status: "illegal" },
    { query: "regulación ruido Japón", icon: "🔊", status: "conditional" },
    { query: "beneficios EV Noruega", icon: "🚗", status: "legal" },
    { query: "tirar basura Singapur", icon: "🗑️", status: "illegal" },
    { query: "lotería en línea EE.UU.", icon: "🎫", status: "conditional" },
    { query: "drones Egipto", icon: "🚁", status: "illegal" },
    { query: "hojas de coca Colombia", icon: "🌿", status: "conditional" },
    { query: "ley de sauna Finlandia", icon: "🧖", status: "legal" },
    { query: "exportar jalea real Tailandia", icon: "🐝", status: "conditional" },
    { query: "alcohol Indonesia", icon: "🍺", status: "conditional" },
    { query: "cohabitación Catar", icon: "🏠", status: "illegal" },
    { query: "cigarrillos electrónicos Malasia", icon: "🚬", status: "conditional" },
    { query: "aborto Argentina", icon: "🏥", status: "legal" },
    { query: "aborto Polonia", icon: "🏥", status: "illegal" },
    { query: "eutanasia Bélgica", icon: "🏥", status: "legal" },
    { query: "publicidad alcohol Turquía", icon: "🍺", status: "illegal" },
    { query: "caza ballenas Islandia", icon: "🐋", status: "conditional" },
    { query: "armas Camboya", icon: "🔫", status: "illegal" },
    { query: "prostitución Costa Rica", icon: "🏠", status: "legal" },
    { query: "blasfemia Pakistán", icon: "📖", status: "illegal" },
    { query: "e-residencia Estonia", icon: "💳", status: "legal" },
    { query: "playa nudista Grecia", icon: "🏖️", status: "conditional" },
    { query: "personas sin hogar Hungría", icon: "🏠", status: "illegal" },
    { query: "recolección agua lluvia EE.UU.", icon: "🌧️", status: "conditional" },
    { query: "máquina cerveza Japón", icon: "🍺", status: "legal" },
    { query: "matrimonio igualitario Taiwán", icon: "🏳️‍🌈", status: "legal" },
    { query: "té de coca Perú", icon: "🍵", status: "legal" },
    { query: "cripto Nigeria", icon: "💼", status: "conditional" },
    { query: "cannabis Marruecos", icon: "🌿", status: "conditional" },
    { query: "casino Japón", icon: "🃏", status: "illegal" },
    { query: "licencia moto Vietnam", icon: "🏍️", status: "conditional" },
    { query: "tatuajes Corea", icon: "💉", status: "conditional" },
    { query: "okupación España", icon: "🏠", status: "conditional" }
  ]
};

const STORAGE_KEY = 'searchFrequency';

function getSearchFrequency() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function TrendingTopics({ onSearchClick }) {
  const { language, t } = useLanguage();
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const pool = recommendedPool[language] || recommendedPool.en;
    const freq = getSearchFrequency();

    const userTopQueries = Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([query]) => query);

    const userTopics = [];
    const usedQueries = new Set();

    for (const q of userTopQueries) {
      const match = pool.find((item) => item.query === q);
      if (match) {
        userTopics.push(match);
        usedQueries.add(q);
      }
    }

    const remaining = pool.filter((item) => !usedQueries.has(item.query));
    const shuffled = shuffle(remaining);
    const fill = shuffled.slice(0, 10 - userTopics.length);

    setTopics([...userTopics, ...fill]);
  }, [language]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'legal': return '#22c55e';
      case 'conditional': return '#eab308';
      case 'illegal': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const handleClick = (query) => {
    const freq = getSearchFrequency();
    freq[query] = (freq[query] || 0) + 1;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(freq));
    onSearchClick(query);
  };

  const title = topics.some((_, i) => i < 5 && getSearchFrequency()[topics[i]?.query])
    ? t.trending.personalTitle || t.trending.title
    : t.trending.title;

  return (
    <section className="trending-section" aria-label="Recommended topics">
      <div className="container">
        <h3 className="trending-title">{title}</h3>
        <div className="trending-scroll">
          {topics.map((item, index) => (
            <button
              key={index}
              className="trending-chip"
              onClick={() => handleClick(item.query)}
              aria-label={item.query}
            >
              <span className="trending-icon">{item.icon}</span>
              <span className="trending-text">{item.query}</span>
              <span
                className="trending-dot"
                style={{ backgroundColor: getStatusColor(item.status) }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingTopics;
