import React, { FC, useEffect, useState, useMemo } from 'react';

import { ItemSet, getItemSets } from '@/apiClient';
import BaseLayout from '@/layouts/BaseLayout';
import SectionedPage, {
  Section,
  SectionNavItem,
} from '@/layouts/SectionedPage';
import IdLink from '@/components/IdLink';

const Items: FC = () => {
  const [itemSets, setItemSets] = useState<ItemSet[]>([]);

  useEffect(() => {
    getItemSets().then(setItemSets);
  }, []);

  const sectionNavItems: SectionNavItem[] = useMemo(() => {
    if (!getItemSets) return [];

    return itemSets.map((set) => ({
      name: set.name,
      children: set.items.map((item) => ({
        name: item.name,
      })),
    }));
  }, [itemSets]);

  return (
    <BaseLayout>
      <SectionedPage navItems={sectionNavItems}>
        <IdLink id="Items">
          <h1>Items</h1>
        </IdLink>

        {itemSets.map((set, index) => (
          <Section key={index}>
            <IdLink id={set.name} style="underline">
              <h2>{set.name}</h2>
            </IdLink>
            <p>{set.description}</p>

            {set.items.map((item, idx) => (
              <div key={idx}>
                <IdLink id={item.name} style="block">
                  <h3>{item.name}</h3>
                </IdLink>
                <p>{item.description}</p>
              </div>
            ))}
          </Section>
        ))}
      </SectionedPage>
    </BaseLayout>
  );
};

export default Items;
