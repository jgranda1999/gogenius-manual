import { useLanguage } from '../i18n/LanguageContext';

type SidebarProps = {
  activeId: string;
  onNavigate: () => void;
};

export function Sidebar({ activeId, onNavigate }: SidebarProps) {
  const { ui } = useLanguage();

  return (
    <aside className="sidebar" id="sidebar">
      <div className="brand">
        <img className="brand-mark" src="/gogenius-logo.png" alt="" width={38} height={38} />
        <div className="brand-name">GoGenius</div>
      </div>
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
