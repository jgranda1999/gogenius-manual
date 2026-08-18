import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  DEFAULT_LANGUAGE,
  getLanguage,
  type LanguageCode,
} from './languages';
import { UI, type UiStrings } from './ui';

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  ui: UiStrings;
  dir: 'ltr' | 'rtl';
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(DEFAULT_LANGUAGE);

  const setLanguage = useCallback((code: LanguageCode) => {
    setLanguageState(code);
  }, []);

  const meta = getLanguage(language);
  const ui = UI[language];

  useEffect(() => {
    document.documentElement.lang = meta.htmlLang;
    document.documentElement.dir = meta.dir;
    document.title = ui.documentTitle;
  }, [meta.dir, meta.htmlLang, ui.documentTitle]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      ui,
      dir: meta.dir,
    }),
    [language, setLanguage, ui, meta.dir],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
