export const languages = {
  en: 'English',
  fr: 'Français',
} as const;

export const defaultLang = 'en' as const;
export const showDefaultLang = false;

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.resume': 'Resume',
    'nav.contact': 'Contact',
    'nav.close': 'Close',
    'lang.switch': 'FR',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.resume': 'CV',
    'nav.contact': 'Contact',
    'nav.close': 'Fermer',
    'lang.switch': 'EN',
  },
} as const;
