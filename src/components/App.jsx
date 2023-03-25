import { Component } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { AppLayout } from 'components/AppLayout';
import { Contacts } from 'components/Contacts';
import { Form } from 'components/Form';
import { Filter } from 'components/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  changeFilter = filter => {
    this.setState({
      filter,
    });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    //   return contacts.reduce((acc, contact) => {
    //     const condition = contact.name
    //       .toLowerCase()
    //       .includes(filter.toLowerCase());

    //     if (condition) {
    //       acc.push(contact);
    //     }

    //     return acc;
    //   }, []);
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.filteredContacts();

    return (
      <AppLayout>
        <Tabs>
          <TabList className="tabList">
            <Tab className="tabItem">Contacts</Tab>
            <Tab className="tabItem">Add contacts</Tab>
          </TabList>

          <TabPanel className="py-10">
            {contacts.length > 2 && (
              <Filter onChange={this.changeFilter} filter={filter} />
            )}

            {contacts.length > 0 ? (
              <Contacts
                contacts={filteredContacts}
                onDelete={this.removeContact}
              />
            ) : (
              <p className="text-center text-gray-400">No contacts</p>
            )}
          </TabPanel>

          <TabPanel className="py-10">
            <Form onSubmit={this.addContact} />
          </TabPanel>
        </Tabs>
      </AppLayout>
    );
  }
}
