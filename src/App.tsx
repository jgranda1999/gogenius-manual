import { useRef, useState } from 'react';
import { ManualContent } from './components/ManualContent';
import { Sidebar } from './components/Sidebar';
import { useActiveSection } from './hooks/useActiveSection';
import { useMobileNav } from './hooks/useMobileNav';
import './styles/manual.css';

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const contentRef = useRef<HTMLElement>(null);
  const activeId = useActiveSection(contentRef);
  const { closeNav } = useMobileNav(navOpen, setNavOpen);

  return (
    <>
      <button
        type="button"
        className="menu-btn"
        id="menuBtn"
        aria-label="Toggle contents"
        aria-expanded={navOpen}
        onClick={() => setNavOpen((open) => !open)}
      >
        ☰ Contents
      </button>
      <div className="shell">
        <Sidebar activeId={activeId} onNavigate={closeNav} />
        <main className="content" ref={contentRef}>
          <ManualContent />
        </main>
      </div>
    </>
  );
}
