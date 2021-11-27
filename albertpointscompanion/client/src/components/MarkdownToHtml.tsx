import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const MarkdownContainer = styled.div`
  margin-bottom: 1.5em;
`;

interface MarkdownToHtmlProps {
  md: string;
}
const MarkdownToHtml: FC<MarkdownToHtmlProps> = ({ md }) => {
  const html = useMemo(() => DOMPurify.sanitize(marked.parse(md)), [md]);

  return <MarkdownContainer dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MarkdownToHtml;
