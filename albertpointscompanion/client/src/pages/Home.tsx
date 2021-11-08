import React, { FC } from 'react';
import styled from 'styled-components';

import BaseLayout from '@/layouts/BaseLayout';

const Home: FC = () => {
  return (
    <BaseLayout>
      <h1>Welcome to Albert Points Companion!</h1>
      <p>
        This is a community-made site with resources for BoxBox's Albert Points.
      </p>
    </BaseLayout>
  );
};

export default Home;
