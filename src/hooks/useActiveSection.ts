import { useCallback, useEffect, useRef, useState } from 'react';
import { SECTION_IDS } from '../data/toc';
import { useLanguage } from '../i18n/LanguageContext';

function sectionOffset(): number {
  return window.matchMedia('(max-width: 860px)').matches ? 96 : 88;
}

function sectionFromScroll(): string {
  const offset = sectionOffset();
  let current = SECTION_IDS[0];

  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= offset) current = id;
  }

  return current;
}

export function useActiveSection() {
  const [activeId, setActiveId] = useState<string>('welcome');
  const { language } = useLanguage();
  const lockRef = useRef<string | null>(null);
  const unlockTimer = useRef(0);

  const apply = useCallback((id: string) => {
    setActiveId((prev) => (prev === id ? prev : id));
  }, []);

  const activateSection = useCallback(
    (id: string) => {
      lockRef.current = id;
      apply(id);
      window.clearTimeout(unlockTimer.current);
      unlockTimer.current = window.setTimeout(() => {
        lockRef.current = null;
        apply(sectionFromScroll());
      }, 800);
    },
    [apply],
  );

  useEffect(() => {
    let frame = 0;

    const update = () => {
      if (lockRef.current) return;
      apply(sectionFromScroll());
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    const onHashChange = () => {
      const id = window.location.hash.replace(/^#/, '');
      if (SECTION_IDS.includes(id)) activateSection(id);
      else update();
    };

    const hash = window.location.hash.replace(/^#/, '');
    if (SECTION_IDS.includes(hash)) apply(hash);
    else update();

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    window.addEventListener('hashchange', onHashChange);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(unlockTimer.current);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, [language, apply, activateSection]);

  return { activeId, activateSection };
}
