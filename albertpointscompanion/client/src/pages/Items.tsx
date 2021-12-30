import React, { FC, useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';

import { ItemSet, getItemSets, getItemsMarkdown } from '@/apiClient';
import SectionedPage, {
  Section,
  SectionNavItem,
} from '@/layouts/SectionedPage';
import IdLink from '@/components/IdLink';
import MarkdownToHtml from '@/components/MarkdownToHtml';

const ItemContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;
const ItemImageContainer = styled.div`
  flex-shrink: 0;
  height: 12rem;
  margin-right: 2rem;
  width: 12rem;

  img {
    max-height: 100%;
    max-width: 100%;
  }
`;
const ItemContent = styled.div`
  flex-grow: 1;
`;

const Items: FC = () => {
  const [itemSets, setItemSets] = useState<ItemSet[]>([]);
  const [contents, setContents] = useState<string>('');

  useEffect(() => {
    getItemsMarkdown().then(setContents);
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
    <SectionedPage navItems={sectionNavItems}>
      <h1>Items</h1>

      <MarkdownToHtml md={contents} />

      {itemSets.map((set, index) => (
        <Section key={index}>
          <IdLink id={set.name} style="underline">
            <h2>{set.name}</h2>
          </IdLink>
          <p>{set.description}</p>

          {set.items.map((item, idx) => (
            <ItemContainer key={idx}>
              {item.image_url && (
                <ItemImageContainer>
                  <img src={item.image_url} />
                </ItemImageContainer>
              )}
              <ItemContent>
                <IdLink id={item.name} style="block">
                  <h3>{item.name}</h3>
                </IdLink>
                <p>{item.description}</p>
              </ItemContent>
            </ItemContainer>
          ))}
        </Section>
      ))}
    </SectionedPage>
  );
};

export default Items;
