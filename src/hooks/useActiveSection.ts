import { useEffect, useState, type RefObject } from 'react';
import { SECTION_IDS } from '../data/toc';

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  rootMargin: '-10% 0px -75% 0px',
  threshold: 0,
};

export function useActiveSection(contentRef: RefObject<HTMLElement | null>) {
  const [activeId, setActiveId] = useState<string>('welcome');

  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;

    const elements = SECTION_IDS.map((id) => root.querySelector<HTMLElement>(`#${CSS.escape(id)}`)).filter(
      (el): el is HTMLElement => el != null,
    );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.target.id) {
          setActiveId(entry.target.id);
        }
      }
    }, OBSERVER_OPTIONS);

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [contentRef]);

  return activeId;
}
