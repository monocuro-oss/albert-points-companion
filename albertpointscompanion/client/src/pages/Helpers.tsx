import React, { FC, useEffect, useState, useMemo } from 'react';

import { HelperSet, getHelperSets } from '@/apiClient';
import BaseLayout from '@/layouts/BaseLayout';
import SectionedPage, {
  Section,
  SectionNavItem,
} from '@/layouts/SectionedPage';
import IdLink from '@/components/IdLink';

const Helpers: FC = () => {
  const [helperSets, setHelperSets] = useState<HelperSet[]>([]);

  useEffect(() => {
    getHelperSets().then(setHelperSets);
  }, []);

  const sectionNavItems: SectionNavItem[] = useMemo(() => {
    if (!helperSets) return [];

    return helperSets.map((set) => ({
      name: set.name,
      id: encodeURIComponent(set.name),
      children: set.teams.map((team) => ({
        name: team.name,
        id: encodeURIComponent(team.name),
        children: team.helpers.map((helper) => ({
          name: helper.name,
          id: encodeURIComponent(helper.name),
        })),
      })),
    }));
  }, [helperSets]);

  return (
    <BaseLayout>
      <SectionedPage navItems={sectionNavItems}>
        <IdLink id="Helpers">
          <h1>Helpers</h1>
        </IdLink>

        {helperSets.map((set, index) => (
          <Section key={index}>
            <IdLink id={set.name} style="underline">
              <h2>{set.name}</h2>
            </IdLink>
            <p>{set.description}</p>

            {set.teams.map((team, idx) => (
              <div key={idx}>
                <IdLink id={team.name}>
                  <h3>{team.name}</h3>
                </IdLink>
                <p>{team.description}</p>

                {team.helpers.map((helper, i) => (
                  <div key={i}>
                    <IdLink id={helper.name} style="block">
                      <h4>{helper.name}</h4>
                    </IdLink>
                    <p>{helper.description}</p>
                  </div>
                ))}
              </div>
            ))}
          </Section>
        ))}
      </SectionedPage>
    </BaseLayout>
  );
};

export default Helpers;
