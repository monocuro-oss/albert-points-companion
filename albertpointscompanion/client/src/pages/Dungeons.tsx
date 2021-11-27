import React, { FC, useState, useEffect } from 'react';

import { getDungeonsMarkdown } from '@/apiClient';
import BaseLayout from '@/layouts/BaseLayout';
import Page from '@/layouts/Page';
import MarkdownToHtml from '@/components/MarkdownToHtml';

const Dungeons: FC = () => {
  const [contents, setContents] = useState<string>('');

  useEffect(() => {
    getDungeonsMarkdown().then(setContents);
  }, []);

  return (
    <BaseLayout>
      <Page>
        <h1>Dungeons</h1>
        <MarkdownToHtml md={contents} />
      </Page>
    </BaseLayout>
  );
};

export default Dungeons;
