import PropTypes from 'prop-types';
import css from './ContactItem.module.scss';

const ContactItem = ({ id, name, number, onDelete }) => (
    <>
        <span className={css.name}>{name}: </span>
        <span className={css.number}>{number}</span>
        <button
            className={css.deleteContact}
            type="button"
            onClick={() => {
                onDelete(id);
            }}
        >
            Удалить
        </button>
    </>
);

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
