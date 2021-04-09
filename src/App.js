import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import css from './styles/App.module.scss';
import config from './json/AppConfig.json';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
    state = {
        contacts: config.INIT_CONTACTS,
        filter: '',
    };

    addContact = ({ name, number }) => {
        if (this.isContactExists(name)) {
            alert(`Контакт "${name}" уже существует`);
            return;
        }

        const newContact = { id: uuid(), name, number };

        this.setState(({ contacts }) => ({
            contacts: [newContact, ...contacts],
        }));
    };

    deleteContact = delId => {
        this.setState(({ contacts }) => ({
            contacts: contacts.filter(({ id }) => id !== delId),
        }));
    };

    changeFilter = e => {
        this.setState({ filter: e.target.value });
    };

    isContactExists(name) {
        const normName = name.toLowerCase();

        return !!this.state.contacts.find(
            ({ name }) => name.toLowerCase() === normName,
        );
    }

    getFilteredContacts() {
        const normFilter = this.state.filter.toLowerCase();

        return this.state.contacts.filter(({ name }) =>
            name.toLowerCase().includes(normFilter),
        );
    }

    render() {
        const { filter } = this.state;
        const filteredContacts = this.getFilteredContacts();

        return (
            <div className="container">
                <h1 className={css.telBookTitle}>Телефонная книга</h1>
                <ContactForm onSubmit={this.addContact} />

                <h2 className={css.contactsTitle}>Контакты</h2>
                <Filter value={filter} onChange={this.changeFilter} />
                <ContactList
                    contacts={filteredContacts}
                    onDelete={this.deleteContact}
                />
            </div>
        );
    }
}

export default App;
