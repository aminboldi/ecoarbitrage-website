import { useEffect } from 'react';

export function useSeoMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]') 
      ?? Object.assign(document.createElement('meta'), { name: 'description' });
    (meta as HTMLMetaElement).content = description;
    if (!document.head.contains(meta)) document.head.appendChild(meta);
  }, [title, description]);
}
