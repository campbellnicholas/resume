import { memo, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';

/**
 * Props for the MarkdownContent component
 * @param content - The markdown content to render
 */
interface MarkdownContentProps {
  readonly content: string;
}

/**
 * Component for rendering markdown content
 * @param content - The markdown content to render
 */
const MarkdownContent = memo(({ content }: MarkdownContentProps) => {
  const components = useMemo<Components>(() => ({
    p: ({ children }) => (
      <p className="mb-4 text-theme-text">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="text-2xl font-bold mb-4 text-theme-text">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-semibold mb-3 text-theme-text">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-medium mb-2 text-theme-text">{children}</h3>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 text-theme-text">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 text-theme-text">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="mb-1 text-theme-text">{children}</li>
    ),
    a: ({ href, children }) => (
      <a 
        href={href} 
        className="text-theme-hover hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 mb-4 overflow-x-auto">
        {children}
      </pre>
    ),
    img: ({ src, alt, node }) => {
      if (!src) return null;
      // Remove the leading ./ if present
      const cleanSrc = src.replace(/^\.\//, '');
      
      // Extract attributes from the markdown node
      const attributes = node?.properties as Record<string, string> || {};
      
      return (
        <img 
          src={`/${cleanSrc}`}
          alt={alt || ''} 
          className="my-4 rounded-lg shadow-lg max-w-full h-auto border-2 border-black"
          loading="lazy"
          {...attributes}
        />
      );
    },
  }), []);

  const processedContent = useMemo(() => content, [content]);

  return (
    <ReactMarkdown components={components}>
      {processedContent}
    </ReactMarkdown>
  );
});

MarkdownContent.displayName = 'MarkdownContent';

export default MarkdownContent; 