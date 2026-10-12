export const languages = { de: 'Deutsch', en: 'English', zh: '中文' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

// Sections shown in the main navigation, in order. Slugs match the Markdown file names.
export const sections = [
  'solutions',
  'products',
  'outsourcing',
  'workshops',
  'social-responsibility',
  'research',
] as const;

export const legalPages = ['impressum', 'datenschutz'] as const;

export const contactEmail = 'rheinwegde@gmail.com';
export const contactPhone = '+49 160 1168307';
export const contactAddress = ['Liying Zhu', 'Im Rosengärtchen 70', '61440 Oberursel (Taunus)'];

export const ui = {
  de: {
    'nav.solutions': 'Deutsch-Chinesischer Handel',
    'nav.products': 'Produkte',
    'nav.outsourcing': 'Software-Entwicklung',
    'nav.workshops': 'Workshops',
    'nav.social-responsibility': 'Soziale Verantwortung',
    'nav.research': 'Forschung',
    'nav.impressum': 'Impressum',
    'nav.datenschutz': 'Datenschutz',
    'home.title': 'RheinWeg',
    'home.tagline': 'Brücke zwischen Deutschland und China: Handel, Software und KI.',
    contact: 'Kontakt',
    'contact.intro': 'Fragen, Anfragen oder Feedback: Sie erreichen uns über die folgenden Kontaktdaten.',
    'contact.address': 'Adresse',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.country': 'Deutschland',
  },
  en: {
    'nav.solutions': 'German-China Trade',
    'nav.products': 'Products',
    'nav.outsourcing': 'Software Outsourcing',
    'nav.workshops': 'Workshops',
    'nav.social-responsibility': 'Social Responsibility',
    'nav.research': 'Research',
    'nav.impressum': 'Imprint',
    'nav.datenschutz': 'Privacy Policy',
    'home.title': 'RheinWeg',
    'home.tagline': 'Bridging Germany and China: trade, software and AI.',
    contact: 'Contact',
    'contact.intro': 'Questions, inquiries, or feedback: reach us using the details below.',
    'contact.address': 'Address',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.country': 'Germany',
  },
  zh: {
    'nav.solutions': '中德贸易',
    'nav.products': '产品',
    'nav.outsourcing': '软件外包',
    'nav.workshops': '工作坊',
    'nav.social-responsibility': '社会责任',
    'nav.research': '研究',
    'nav.impressum': '法律声明',
    'nav.datenschutz': '隐私政策',
    'home.title': 'RheinWeg',
    'home.tagline': '连接德国与中国:贸易、软件与人工智能。',
    contact: '联系我们',
    'contact.intro': '如有问题、咨询或反馈,请通过以下方式联系我们。',
    'contact.address': '地址',
    'contact.email': '邮箱',
    'contact.phone': '电话',
    'contact.country': '德国',
  },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key];
}
