import { useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

type SidebarProps = {
  activeId: string;
  navOpen: boolean;
  onNavigate: () => void;
  onActivate: (id: string) => void;
};

function scrollActiveIntoView(sidebar: HTMLElement, active: HTMLElement) {
  const sidebarTop = sidebar.getBoundingClientRect().top;
  const relativeTop = active.getBoundingClientRect().top - sidebarTop + sidebar.scrollTop;
  const padding = 28;
  const viewTop = sidebar.scrollTop + padding;
  const viewBottom = sidebar.scrollTop + sidebar.clientHeight - padding;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const behavior: ScrollBehavior = reduceMotion ? 'auto' : 'smooth';

  if (relativeTop < viewTop) {
    sidebar.scrollTo({ top: Math.max(0, relativeTop - padding), behavior });
    return;
  }

  const linkBottom = relativeTop + active.offsetHeight;
  if (linkBottom > viewBottom) {
    sidebar.scrollTo({
      top: linkBottom - sidebar.clientHeight + padding,
      behavior,
    });
  }
}

export function Sidebar({ activeId, navOpen, onNavigate, onActivate }: SidebarProps) {
  const { ui } = useLanguage();
  const sidebarRef = useRef<HTMLElement>(null);
  const prevNavOpen = useRef(false);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const justOpened = navOpen && !prevNavOpen.current;
    prevNavOpen.current = navOpen;

    const run = () => {
      const active = sidebar.querySelector<HTMLElement>('a.active');
      if (active) scrollActiveIntoView(sidebar, active);
    };

    if (justOpened) {
      const timer = window.setTimeout(run, 260);
      return () => window.clearTimeout(timer);
    }

    if (window.matchMedia('(min-width: 861px)').matches) {
      const frame = requestAnimationFrame(run);
      return () => cancelAnimationFrame(frame);
    }
  }, [activeId, navOpen]);

  const goTo = (id: string) => {
    onActivate(id);
    onNavigate();
  };

  return (
    <aside className="sidebar" id="sidebar" ref={sidebarRef}>
      <a
        className="brand"
        href="#welcome"
        onClick={() => goTo('welcome')}
        aria-label="GoGenius"
      >
        <img
          className="brand-mark"
          src={`${import.meta.env.BASE_URL}gogenius-logo.png`}
          alt=""
          width={38}
          height={38}
        />
        <div className="brand-name">GoGenius</div>
      </a>
      <div className="brand-sub">{ui.userManual}</div>
      <nav className="toc" id="toc" aria-label={ui.tocAriaLabel}>
        {ui.toc.map(({ id, num, label }) => {
          const isActive = activeId === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={isActive ? 'active' : undefined}
              aria-current={isActive ? 'location' : undefined}
              onClick={() => goTo(id)}
            >
              <span className="num">{num}</span>
              {label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
