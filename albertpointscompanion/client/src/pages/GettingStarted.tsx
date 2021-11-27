import React, { FC, useState, useEffect } from 'react';

import { getGettingStartedMarkdown } from '@/apiClient';
import BaseLayout from '@/layouts/BaseLayout';
import Page from '@/layouts/Page';
import MarkdownToHtml from '@/components/MarkdownToHtml';

const GettingStarted: FC = () => {
  const [contents, setContents] = useState<string>('');

  useEffect(() => {
    getGettingStartedMarkdown().then(setContents);
  }, []);

  return (
    <BaseLayout>
      <Page>
        <h1>Getting Started</h1>
        <MarkdownToHtml md={contents} />
      </Page>
    </BaseLayout>
  );
};

export default GettingStarted;
