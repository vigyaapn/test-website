import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface RouterContextType {
  pathname: string;
  searchParams: URLSearchParams;
  push: (url: string) => void;
  replace: (url: string) => void;
  back: () => void;
  hash: string;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUrl, setCurrentUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname + window.location.search + window.location.hash;
    }
    return '/';
  });

  const getPathname = () => {
    try {
      const u = new URL(currentUrl, window.location.origin);
      return u.pathname || '/';
    } catch {
      const idx = currentUrl.indexOf('?');
      const hashIdx = currentUrl.indexOf('#');
      let end = currentUrl.length;
      if (idx !== -1) end = Math.min(end, idx);
      if (hashIdx !== -1) end = Math.min(end, hashIdx);
      return currentUrl.substring(0, end) || '/';
    }
  };

  const getSearchParams = () => {
    try {
      const u = new URL(currentUrl, window.location.origin);
      return u.searchParams;
    } catch {
      const qIndex = currentUrl.indexOf('?');
      if (qIndex === -1) return new URLSearchParams();
      const hashIndex = currentUrl.indexOf('#');
      const queryStr = hashIndex !== -1
        ? currentUrl.substring(qIndex + 1, hashIndex)
        : currentUrl.substring(qIndex + 1);
      return new URLSearchParams(queryStr);
    }
  };

  const getHash = () => {
    const hashIndex = currentUrl.indexOf('#');
    return hashIndex !== -1 ? currentUrl.substring(hashIndex) : '';
  };

  const navigateTo = useCallback((url: string, replace = false) => {
    if (typeof window === 'undefined') return;

    // Normalizing internal relative links
    let target = url;
    if (!target.startsWith('/') && !target.startsWith('#')) {
      target = '/' + target;
    }

    if (replace) {
      window.history.replaceState({ url: target }, '', target);
    } else {
      window.history.pushState({ url: target }, '', target);
    }
    setCurrentUrl(target);

    // Check for hash scroll
    const hashIdx = target.indexOf('#');
    if (hashIdx !== -1) {
      const elementId = target.substring(hashIdx + 1);
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const push = useCallback((url: string) => navigateTo(url, false), [navigateTo]);
  const replace = useCallback((url: string) => navigateTo(url, true), [navigateTo]);
  const back = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const newUrl = window.location.pathname + window.location.search + window.location.hash;
      setCurrentUrl(newUrl);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <RouterContext.Provider
      value={{
        pathname: getPathname(),
        searchParams: getSearchParams(),
        push,
        replace,
        back,
        hash: getHash(),
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return {
    push: context.push,
    replace: context.replace,
    back: context.back,
  };
};

export const usePathname = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('usePathname must be used within a RouterProvider');
  }
  return context.pathname;
};

export const useSearchParams = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useSearchParams must be used within a RouterProvider');
  }
  return context.searchParams;
};

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  replace?: boolean;
}

export const Link: React.FC<LinkProps> = ({ href, children, replace = false, onClick, ...rest }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }

    // Allow native behavior for external links, target="_blank", or meta-keys
    if (
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      rest.target === '_blank'
    ) {
      return;
    }

    e.preventDefault();
    if (replace) {
      router.replace(href);
    } else {
      router.push(href);
    }
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};
