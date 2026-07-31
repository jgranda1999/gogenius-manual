import { useCallback, useEffect } from 'react';

export function useMobileNav(navOpen: boolean, setNavOpen: (open: boolean) => void) {
  useEffect(() => {
    document.body.classList.toggle('nav-open', navOpen);
    return () => document.body.classList.remove('nav-open');
  }, [navOpen]);

  const closeNav = useCallback(() => setNavOpen(false), [setNavOpen]);

  useEffect(() => {
    if (!navOpen) return;

    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      const sidebar = document.getElementById('sidebar');
      const menuBtn = document.getElementById('menuBtn');
      if (sidebar?.contains(target) || menuBtn?.contains(target)) return;
      setNavOpen(false);
    };

    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, [navOpen, setNavOpen]);

  return { closeNav };
}
