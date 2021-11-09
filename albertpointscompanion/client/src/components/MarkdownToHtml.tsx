import React, { FC, useMemo } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

interface MarkdownToHtmlProps {
  md: string;
}
const MarkdownToHtml: FC<MarkdownToHtmlProps> = ({ md }) => {
  const html = useMemo(() => DOMPurify.sanitize(marked.parse(md)), [md]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MarkdownToHtml;
