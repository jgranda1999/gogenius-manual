import { useRef, useState } from 'react';
import { LanguageSelector } from './components/LanguageSelector';
import { ManualContent } from './components/ManualContent';
import { Sidebar } from './components/Sidebar';
import { useActiveSection } from './hooks/useActiveSection';
import { useMobileNav } from './hooks/useMobileNav';
import { useLanguage } from './i18n/LanguageContext';
import './styles/manual.css';

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const contentRef = useRef<HTMLElement>(null);
  const activeId = useActiveSection(contentRef);
  const { closeNav } = useMobileNav(navOpen, setNavOpen);
  const { ui } = useLanguage();

  return (
    <>
      <button
        type="button"
        className="menu-btn"
        id="menuBtn"
        aria-label={ui.toggleContents}
        aria-expanded={navOpen}
        onClick={() => setNavOpen((open) => !open)}
      >
        {ui.contents}
      </button>
      <div className="shell">
        <Sidebar activeId={activeId} onNavigate={closeNav} />
        <main className="content" ref={contentRef}>
          <LanguageSelector />
          <ManualContent />
        </main>
      </div>
    </>
  );
}
