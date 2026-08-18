import ar from '../content/locales/ar.html?raw';
import de from '../content/locales/de.html?raw';
import en from '../content/locales/en.html?raw';
import es from '../content/locales/es.html?raw';
import fr from '../content/locales/fr.html?raw';
import ro from '../content/locales/ro.html?raw';
import ru from '../content/locales/ru.html?raw';
import uk from '../content/locales/uk.html?raw';
import zh from '../content/locales/zh.html?raw';
import { useLanguage } from '../i18n/LanguageContext';
import type { LanguageCode } from '../i18n/languages';

const MANUAL_BY_LANGUAGE: Record<LanguageCode, string> = {
  ar,
  ru,
  uk,
  ro,
  en,
  fr,
  es,
  zh,
  de,
};

function withBaseUrl(html: string): string {
  const base = import.meta.env.BASE_URL;
  return html.replace(/(src|href)="\/([^"]+)"/g, `$1="${base}$2"`);
}

export function ManualContent() {
  const { language } = useLanguage();
  const html = withBaseUrl(MANUAL_BY_LANGUAGE[language]);

  return (
    <div
      key={language}
      className="content-inner"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
