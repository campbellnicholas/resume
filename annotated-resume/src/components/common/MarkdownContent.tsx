import { memo, type ReactElement, type ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import type { Components } from 'react-markdown';

/**
 * Props for the MarkdownContent component
 * @param content - The markdown content to render
 */
interface MarkdownContentProps {
  readonly content: string;
}
interface ComponentProps {
  children?: ReactNode;
}

interface ImageProps {
  src?: string;
  alt?: string;
}

/**
 * Component for rendering markdown content
 * @param content - The markdown content to render
 */
const MarkdownContent = ({ content }: MarkdownContentProps): ReactElement => {
  const components: Components = {
    p: ({ children }: ComponentProps): ReactElement => <p className="mb-4">{children}</p>,
    h1: ({ children }: ComponentProps): ReactElement => <h1 className="text-2xl font-bold mb-4">{children}</h1>,
    h2: ({ children }: ComponentProps): ReactElement => <h2 className="text-xl font-bold mb-3">{children}</h2>,
    h3: ({ children }: ComponentProps): ReactElement => <h3 className="text-lg font-bold mb-2">{children}</h3>,
    ul: ({ children }: ComponentProps): ReactElement => <ul className="list-disc pl-6 mb-4">{children}</ul>,
    ol: ({ children }: ComponentProps): ReactElement => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
    li: ({ children }: ComponentProps): ReactElement => <li className="mb-1">{children}</li>,
    table: ({ children }: ComponentProps): ReactElement => (
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-collapse border border-theme-border">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }: ComponentProps): ReactElement => <thead className="bg-theme-bg/50">{children}</thead>,
    tbody: ({ children }: ComponentProps): ReactElement => <tbody>{children}</tbody>,
    tr: ({ children }: ComponentProps): ReactElement => <tr className="border-b border-theme-border">{children}</tr>,
    th: ({ children }: ComponentProps): ReactElement => (
      <th className="px-4 py-2 text-left border-r border-theme-border">{children}</th>
    ),
    td: ({ children }: ComponentProps): ReactElement => (
      <td className="px-4 py-2 border-r border-theme-border">{children}</td>
    ),
    img: ({ src, alt }: ImageProps): ReactElement | null => {
      if (!src) return null;
      // Remove the leading ./ and assets/ or assets/images/ if present
      const cleanSrc = src.replace(/^\.\/assets(\/images)?\//, '/images/');
      
      return (
        <img
          src={cleanSrc}
          alt={alt || ''}
          className="max-w-full h-auto my-4 rounded-lg"
        />
      );
    },
  };

  return (
    <div className="prose prose-theme max-w-none">
      <ReactMarkdown
        components={components}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default memo(MarkdownContent); 