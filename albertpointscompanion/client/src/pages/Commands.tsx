import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { CommandSet, getCommandSets } from '@/apiClient';
import BaseLayout from '@/layouts/BaseLayout';

const Commands: FC = () => {
  const [commandSets, setCommandSets] = useState<CommandSet[]>([]);

  useEffect(() => {
    getCommandSets().then(setCommandSets);
  }, []);

  return (
    <BaseLayout>
      <h1>Commands</h1>

      {commandSets.map((set, index) => (
        <div key={index}>
          <h2>{set.name}</h2>
          <p>{set.description}</p>
          {set.commands.map((command, idx) => (
            <div key={idx}>
              <h3>{command.name}</h3>
              <p>{command.description}</p>
            </div>
          ))}
        </div>
      ))}
    </BaseLayout>
  );
};

export default Commands;
