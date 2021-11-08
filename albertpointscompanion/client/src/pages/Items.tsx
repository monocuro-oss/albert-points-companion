import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { ItemSet, getItemSets } from '@/apiClient';
import BaseLayout from '@/layouts/BaseLayout';

const Items: FC = () => {
  const [itemSets, setItemSets] = useState<ItemSet[]>([]);

  useEffect(() => {
    getItemSets().then(setItemSets);
  }, []);

  return (
    <BaseLayout>
      <h1>Items</h1>
    </BaseLayout>
  );
};

export default Items;
