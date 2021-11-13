import React, { FC, useEffect, useMemo, useState } from 'react';

import { CommandSet, getCommandSets } from '@/apiClient';
import BaseLayout from '@/layouts/BaseLayout';
import SectionedPage, {
  Section,
  SectionNavItem,
} from '@/layouts/SectionedPage';
import IdLink from '@/components/IdLink';

const Commands: FC = () => {
  const [commandSets, setCommandSets] = useState<CommandSet[]>([]);

  useEffect(() => {
    getCommandSets().then(setCommandSets);
  }, []);

  const sectionNavItems: SectionNavItem[] = useMemo(() => {
    if (!commandSets) return [];

    return commandSets.map((set) => ({
      name: set.name,
      children: set.commands.map((command) => ({
        name: command.name,
      })),
    }));
  }, [commandSets]);

  return (
    <BaseLayout>
      <SectionedPage navItems={sectionNavItems}>
        <IdLink id="Commands">
          <h1>Commands</h1>
        </IdLink>

        {commandSets.map((set, index) => (
          <Section key={index}>
            <IdLink id={set.name} style="underline">
              <h2>{set.name}</h2>
            </IdLink>
            <p>{set.description}</p>

            {set.commands.map((command, idx) => (
              <div key={idx}>
                <IdLink id={command.name} style="block">
                  <h3>{command.name}</h3>
                </IdLink>
                <p>{command.description}</p>
              </div>
            ))}
          </Section>
        ))}
      </SectionedPage>
    </BaseLayout>
  );
};

export default Commands;
