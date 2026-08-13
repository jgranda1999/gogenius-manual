import { LANGUAGES } from '../i18n/languages';
import { useLanguage } from '../i18n/LanguageContext';

export function LanguageSelector() {
  const { language, setLanguage, ui } = useLanguage();

  return (
    <div className="lang-bar" role="navigation" aria-label={ui.languageLabel}>
      <span className="lang-bar-label" id="lang-bar-label">
        {ui.languageLabel}
      </span>
      <div className="lang-bar-buttons" role="group" aria-labelledby="lang-bar-label">
        {LANGUAGES.map((lang) => {
          const selected = language === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              className={`lang-btn${selected ? ' is-active' : ''}`}
              aria-pressed={selected}
              aria-label={lang.englishName}
              lang={lang.htmlLang}
              onClick={() => setLanguage(lang.code)}
            >
              {lang.nativeName}
            </button>
          );
        })}
      </div>
    </div>
  );
}
