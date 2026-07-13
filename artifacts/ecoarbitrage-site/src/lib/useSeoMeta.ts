import { useEffect } from 'react';

const SITE_URL = 'https://ecoarbitrage.ir';

export function useSeoMeta(title: string, description: string, path = '') {
  useEffect(() => {
    document.title = title;

    const canonical = `${SITE_URL}${path || '/'}`;

    function setMeta(selector: string, attr: string, value: string) {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta') as HTMLMetaElement;
        const [attrName, attrValue] = selector.match(/\[([^\]]+)="([^"]+)"\]/)
          ? [attr.split('=')[0].replace('[', ''), attr.split('=')[1]?.replace(/"/g, '')]
          : ['name', selector.replace('meta[name="', '').replace('"]', '')];
        el.setAttribute(attrName ?? 'name', attrValue ?? '');
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    }

    function setLink(rel: string, href: string) {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link') as HTMLLinkElement;
        el.rel = rel;
        document.head.appendChild(el);
      }
      el.href = href;
    }

    setMeta('meta[name="description"]', 'name="description"', description);
    setLink('canonical', canonical);

    setMeta('meta[property="og:title"]', 'property="og:title"', title);
    setMeta('meta[property="og:description"]', 'property="og:description"', description);
    setMeta('meta[property="og:url"]', 'property="og:url"', canonical);

    setMeta('meta[name="twitter:title"]', 'name="twitter:title"', title);
    setMeta('meta[name="twitter:description"]', 'name="twitter:description"', description);
  }, [title, description, path]);
}
