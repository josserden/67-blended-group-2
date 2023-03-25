import { Component } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { AppLayout } from 'components/AppLayout';
import { Contacts } from 'components/Contacts';
import { Form } from 'components/Form';

export class App extends Component {
  state = {
    contacts: [],
  };

  render() {
    return (
      <AppLayout>
        <Tabs>
          <TabList className="tabList">
            <Tab className="tabItem">Contacts</Tab>
            <Tab className="tabItem">Add contacts</Tab>
          </TabList>

          <TabPanel className="py-10">
            <Contacts />
          </TabPanel>

          <TabPanel className="py-10">
            <Form />
          </TabPanel>
        </Tabs>
      </AppLayout>
    );
  }
}
