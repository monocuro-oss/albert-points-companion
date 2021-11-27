import React, { FC, useState, useEffect } from 'react';

import { getHomeMarkdown } from '@/apiClient';
import BaseLayout from '@/layouts/BaseLayout';
import Page from '@/layouts/Page';
import MarkdownToHtml from '@/components/MarkdownToHtml';

const Home: FC = () => {
  const [contents, setContents] = useState<string>('');

  useEffect(() => {
    getHomeMarkdown().then(setContents);
  }, []);

  return (
    <BaseLayout>
      <Page>
        <MarkdownToHtml md={contents} />
      </Page>
    </BaseLayout>
  );
};

export default Home;
