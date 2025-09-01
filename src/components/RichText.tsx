import { toHTML } from "@portabletext/to-html";
import type { PortableTextBlock } from "sanity";

export function RichText({
  value,
  className,
}: {
  value: PortableTextBlock[];
  className?: string;
}) {
  const html = toHTML(value);
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
