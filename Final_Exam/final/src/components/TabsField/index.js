import React from 'react';

// Components

import { Tabs } from '../../components/Tabs';
import { TabsContent } from './TabsContent';

// ----------------

export const TabsField = () => {
  const tabsLinks = [
    {
      name: 'tabOne',
      title: 'Individual ',
    },
    {
      name: 'tabTwo',
      title: 'Company',
    },
  ];

  const tabsContent = [
    {
      name: 'tabOne',

      content: () => (
        <TabsContent
          name={'Pro'}
          style="wrapper_def"
          price="$4.99"
          btn_name="pro"
        />
      ),
    },
    {
      name: 'tabTwo',
      content: () => (
        <TabsContent
          name={'Superman'}
          style="wrapper_blue"
          price="$99.99"
          btn_name="superman"
        />
      ),
    },
  ];

  return (
    <Tabs
      linkFullWidth
      defaultTab={tabsLinks[1].name}
      content={tabsContent}
      links={tabsLinks}
    />
  );
};
