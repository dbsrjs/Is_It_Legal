// Sample legal data for MVP
export const lawsData = [
  // Drone laws
  {
    id: 1,
    topic: 'drone',
    topicName: 'Drone Flying',
    country: 'japan',
    countryName: 'Japan',
    status: 'conditional',
    summary: 'Drones are legal with registration and restrictions',
    details: 'Recreational and commercial drone use is allowed in Japan, but operators must register drones over 100g with the Ministry of Land, Infrastructure, Transport and Tourism (MLIT). Flight is prohibited in densely populated areas, near airports, and above 150m without permission.',
    conditions: [
      'Registration required for drones over 100g',
      'No flying in densely populated areas without permission',
      'No flying near airports',
      'Maximum altitude: 150m',
      'Must maintain visual line of sight'
    ],
    penalties: 'Violations can result in fines up to ¥500,000 and/or imprisonment up to 1 year',
    sources: [
      'https://www.mlit.go.jp/en/koku/uas.html',
      'https://www.japantimes.co.jp/news/drone-regulations'
    ],
    updated: '2026-01-15',
    category: 'drone'
  },
  {
    id: 2,
    topic: 'drone',
    topicName: 'Drone Flying',
    country: 'usa',
    countryName: 'United States',
    status: 'conditional',
    summary: 'Drones are legal with FAA registration',
    details: 'Both recreational and commercial drone operations are permitted in the US under FAA regulations. Recreational users must follow Part 107 rules, while commercial operators need an FAA Remote Pilot Certificate.',
    conditions: [
      'Registration with FAA required for drones 0.55-55 lbs',
      'Recreational: follow community-based safety guidelines',
      'Commercial: Remote Pilot Certificate required',
      'No flying over people without waiver',
      'Maximum altitude: 400 feet',
      'Restricted airspace authorization needed'
    ],
    penalties: 'Civil penalties up to $27,500, criminal penalties up to $250,000 and/or 3 years imprisonment',
    sources: [
      'https://www.faa.gov/uas',
      'https://www.faa.gov/uas/recreational_fliers'
    ],
    updated: '2026-01-20',
    category: 'drone'
  },

  // VPN laws
  {
    id: 3,
    topic: 'vpn',
    topicName: 'VPN Usage',
    country: 'china',
    countryName: 'China',
    status: 'illegal',
    summary: 'Unauthorized VPNs are illegal in China',
    details: 'China has strict internet regulations and only allows government-approved VPN services. Unauthorized VPN use is technically illegal, though enforcement primarily targets VPN providers rather than individual users.',
    conditions: [
      'Only state-approved VPNs are legal',
      'Foreign businesses may use approved VPNs',
      'Unauthorized VPN services are blocked'
    ],
    penalties: 'VPN providers face fines up to ¥1.5 million. Individual users rarely prosecuted but technically face fines up to ¥15,000',
    sources: [
      'https://www.comparitech.com/blog/vpn-privacy/countries-where-vpns-are-illegal/',
      'https://www.bbc.com/news/technology-china-vpn'
    ],
    updated: '2026-01-10',
    category: 'digital'
  },
  {
    id: 4,
    topic: 'vpn',
    topicName: 'VPN Usage',
    country: 'usa',
    countryName: 'United States',
    status: 'legal',
    summary: 'VPNs are completely legal in the United States',
    details: 'Using a VPN in the US is entirely legal. VPNs are commonly used for privacy, security, and accessing geo-restricted content. However, illegal activities remain illegal regardless of VPN use.',
    conditions: [
      'No restrictions on VPN usage',
      'Illegal activities are still illegal when using VPN'
    ],
    penalties: 'N/A - VPN use is legal',
    sources: [
      'https://www.comparitech.com/blog/vpn-privacy/are-vpns-legal/',
      'https://vpnpro.com/vpn-basics/are-vpns-legal/'
    ],
    updated: '2026-01-18',
    category: 'digital'
  },

  // Cannabis laws
  {
    id: 5,
    topic: 'cannabis',
    topicName: 'Cannabis',
    country: 'germany',
    countryName: 'Germany',
    status: 'conditional',
    summary: 'Cannabis is legal for adults in limited amounts',
    details: 'As of April 2024, Germany legalized recreational cannabis for adults. Individuals can possess up to 25g in public and 50g at home. Home cultivation of up to 3 plants is allowed.',
    conditions: [
      'Legal for adults 18+',
      'Maximum 25g in public places',
      'Maximum 50g at home',
      'Home cultivation: up to 3 plants',
      'No consumption near schools or playgrounds',
      'Sales only through licensed cannabis clubs (limited)'
    ],
    penalties: 'Possession above limits can result in fines or criminal charges',
    sources: [
      'https://www.dw.com/en/germany-legalizes-cannabis',
      'https://www.bundesregierung.de/cannabis'
    ],
    updated: '2026-01-12',
    category: 'substances'
  },
  {
    id: 6,
    topic: 'cannabis',
    topicName: 'Cannabis',
    country: 'japan',
    countryName: 'Japan',
    status: 'illegal',
    summary: 'Cannabis is strictly illegal in Japan',
    details: 'Japan has zero-tolerance policy for cannabis. Possession, use, cultivation, and trafficking are all criminal offenses with severe penalties. Even trace amounts can lead to prosecution.',
    conditions: [
      'All cannabis use is prohibited',
      'CBD products with any THC are illegal',
      'Foreign nationals can be deported'
    ],
    penalties: 'Possession: up to 5 years imprisonment. Trafficking: up to 7 years or more with hard labor',
    sources: [
      'https://www.japantimes.co.jp/news/cannabis-laws',
      'https://www.mhlw.go.jp/english/'
    ],
    updated: '2026-01-08',
    category: 'substances'
  },

  // Online gambling
  {
    id: 7,
    topic: 'online-gambling',
    topicName: 'Online Gambling',
    country: 'korea',
    countryName: 'South Korea',
    status: 'illegal',
    summary: 'Online gambling is illegal in South Korea',
    details: 'South Korea strictly prohibits online gambling for its citizens. Only one land-based casino (Kangwon Land) is open to Korean nationals. Using offshore gambling sites is illegal and actively prosecuted.',
    conditions: [
      'All online gambling is prohibited for Korean citizens',
      'Foreign online gambling sites are blocked',
      'Only land-based Kangwon Land casino is legal'
    ],
    penalties: 'Fines up to ₩20 million and/or imprisonment up to 3 years',
    sources: [
      'https://www.casino.org/south-korea/',
      'https://www.gkl.co.kr/'
    ],
    updated: '2026-01-14',
    category: 'gambling'
  },
  {
    id: 8,
    topic: 'online-gambling',
    topicName: 'Online Gambling',
    country: 'uk',
    countryName: 'United Kingdom',
    status: 'legal',
    summary: 'Online gambling is legal and regulated',
    details: 'The UK has a well-regulated online gambling industry. Operators must be licensed by the UK Gambling Commission. Players must be 18+ and gambling is legal for all forms including sports betting, casino games, and poker.',
    conditions: [
      'Must be 18 years or older',
      'Only use licensed operators',
      'Self-exclusion programs available'
    ],
    penalties: 'Unlicensed operators face prosecution. Underage gambling is illegal.',
    sources: [
      'https://www.gamblingcommission.gov.uk/',
      'https://www.begambleaware.org/'
    ],
    updated: '2026-01-16',
    category: 'gambling'
  },

  // Street photography
  {
    id: 9,
    topic: 'street-photography',
    topicName: 'Street Photography',
    country: 'france',
    countryName: 'France',
    status: 'conditional',
    summary: 'Street photography allowed with privacy considerations',
    details: 'Street photography is generally legal in France for artistic purposes, but strict privacy laws apply. You can photograph people in public spaces, but commercial use requires model releases. Publishing recognizable faces without consent can violate privacy rights.',
    conditions: [
      'Photography in public spaces is allowed',
      'Commercial use requires consent/model release',
      'Cannot violate dignity or privacy',
      'Publishing may require consent if person is main subject'
    ],
    penalties: 'Privacy violations can result in fines up to €45,000 and/or imprisonment',
    sources: [
      'https://www.service-public.fr/particuliers/vosdroits/F32103',
      'https://www.legifrance.gouv.fr/'
    ],
    updated: '2026-01-11',
    category: 'drone'
  },
  {
    id: 10,
    topic: 'street-photography',
    topicName: 'Street Photography',
    country: 'usa',
    countryName: 'United States',
    status: 'legal',
    summary: 'Street photography is legal in public spaces',
    details: 'In the US, you can photograph anyone in a public space without permission. First Amendment protections cover photography in public areas. However, harassment, stalking, or photographing where privacy is expected (bathrooms, etc.) is illegal.',
    conditions: [
      'Legal in public spaces',
      'No reasonable expectation of privacy in public',
      'Cannot harass or stalk subjects',
      'Commercial use may have additional restrictions'
    ],
    penalties: 'Harassment or stalking with camera can result in criminal charges',
    sources: [
      'https://www.aclu.org/know-your-rights/photographers',
      'https://nppa.org/page/photographer-rights'
    ],
    updated: '2026-01-17',
    category: 'drone'
  }
];

// Categories data
export const categories = [
  { id: 'digital', name: 'Digital', icon: '🎮', topics: ['vpn', 'torrenting', 'web-scraping'] },
  { id: 'drone', name: 'Drone & Photography', icon: '🚁', topics: ['drone', 'street-photography'] },
  { id: 'gambling', name: 'Gambling', icon: '🎰', topics: ['online-gambling', 'sports-betting'] },
  { id: 'substances', name: 'Substances', icon: '🌿', topics: ['cannabis', 'cbd', 'vaping'] },
  { id: 'possessions', name: 'Possessions', icon: '🔪', topics: ['knife', 'pepper-spray', 'taser'] },
  { id: 'privacy', name: 'Privacy', icon: '📞', topics: ['call-recording', 'location-tracking', 'cctv'] },
  { id: 'traffic', name: 'Traffic', icon: '🚗', topics: ['dui-limit', 'phone-usage', 'dashcam'] },
  { id: 'business', name: 'Business', icon: '💼', topics: ['cryptocurrency', 'freelancing', 'reselling'] }
];

// Countries data
export const countries = [
  { code: 'usa', name: 'United States', continent: 'North America' },
  { code: 'uk', name: 'United Kingdom', continent: 'Europe' },
  { code: 'japan', name: 'Japan', continent: 'Asia' },
  { code: 'china', name: 'China', continent: 'Asia' },
  { code: 'korea', name: 'South Korea', continent: 'Asia' },
  { code: 'germany', name: 'Germany', continent: 'Europe' },
  { code: 'france', name: 'France', continent: 'Europe' },
  { code: 'canada', name: 'Canada', continent: 'North America' },
  { code: 'australia', name: 'Australia', continent: 'Oceania' }
];
