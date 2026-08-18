import { useLanguage } from '../i18n/LanguageContext';

type SidebarProps = {
  activeId: string;
  onNavigate: () => void;
};

export function Sidebar({ activeId, onNavigate }: SidebarProps) {
  const { ui } = useLanguage();

  const scrollToTop = () => {
    onNavigate();
    document.getElementById('welcome')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside className="sidebar" id="sidebar">
      <a
        className="brand"
        href="#welcome"
        onClick={(event) => {
          event.preventDefault();
          scrollToTop();
          window.history.replaceState(null, '', '#welcome');
        }}
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
        {ui.toc.map(({ id, num, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeId === id ? 'active' : undefined}
            onClick={onNavigate}
          >
            <span className="num">{num}</span>
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
