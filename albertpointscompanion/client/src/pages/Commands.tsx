import React, { FC, useEffect, useMemo, useState } from 'react';

import { CommandSet, getCommandSets, getCommandsMarkdown } from '@/apiClient';
import SectionedPage, {
  Section,
  SectionNavItem,
} from '@/layouts/SectionedPage';
import IdLink from '@/components/IdLink';
import MarkdownToHtml from '@/components/MarkdownToHtml';
import Filterbox from '@/components/Filterbox';

const Commands: FC = () => {
  const [commandSets, setCommandSets] = useState<CommandSet[]>([]);
  const [contents, setContents] = useState<string>('');
  const [filterText, setFilterText] = useState<string>('');

  useEffect(() => {
    getCommandsMarkdown().then(setContents);
    getCommandSets().then(setCommandSets);
  }, []);

  const filteredSets = useMemo(() => {
    const lowerCaseFilterText = filterText.toLowerCase();

    return commandSets
      .map((set) => {
        const filteredCommands = set.commands.filter(
          (command) =>
            command.name.toLowerCase().includes(lowerCaseFilterText) ||
            command.description.toLowerCase().includes(lowerCaseFilterText)
        );
        return filteredCommands.length > 0
          ? { ...set, commands: filteredCommands }
          : null;
      })
      .filter((set): set is CommandSet => set != null);
  }, [commandSets, filterText]);

  const sectionNavItems: SectionNavItem[] = useMemo(() => {
    if (!filteredSets) return [];

    return filteredSets.map((set) => ({
      name: set.name,
      children: set.commands.map((command) => ({
        name: command.name,
      })),
    }));
  }, [filteredSets]);

  return (
    <SectionedPage navItems={sectionNavItems}>
      <h1>Commands</h1>
      <MarkdownToHtml md={contents} />
      <Filterbox
        value={filterText}
        onChange={(event) => setFilterText(event.target.value)}
        placeholder="Filter by name or description"
      />

      {filteredSets.map((set, index) => (
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
  );
};

export default Commands;
