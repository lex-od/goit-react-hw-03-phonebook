import PropTypes from 'prop-types';
import css from './ContactList.module.scss';
import ContactItem from '../ContactItem';

const ContactList = ({ contacts, onDelete }) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
            <li className={css.contactItem} key={id}>
                <ContactItem
                    id={id}
                    name={name}
                    number={number}
                    onDelete={onDelete}
                />
            </li>
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default ContactList;
