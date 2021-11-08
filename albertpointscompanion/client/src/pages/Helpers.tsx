import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { HelperSet, getHelperSets } from '@/apiClient';
import BaseLayout from '@/layouts/BaseLayout';

const Helpers: FC = () => {
  const [helperSets, setHelperSets] = useState<HelperSet[]>([]);

  useEffect(() => {
    getHelperSets().then(setHelperSets);
  }, []);

  return (
    <BaseLayout>
      <h1>Helpers</h1>
    </BaseLayout>
  );
};

export default Helpers;
