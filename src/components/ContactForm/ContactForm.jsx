import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.scss';
import config from '../../json/ContactFormConfig.json';

class ContactForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = { name: '', number: '' };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state);

        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label className={css.label}>
                    Имя
                    <input
                        type="text"
                        name="name"
                        pattern={config.INPUT_NAME_PATTERN}
                        title={config.INPUT_NAME_TITLE}
                        value={name}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <label className={css.label}>
                    Телефон
                    <input
                        type="tel"
                        name="number"
                        pattern={config.INPUT_TEL_PATTERN}
                        title={config.INPUT_TEL_TITLE}
                        value={number}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <button className={css.addContact}>Добавить контакт</button>
            </form>
        );
    }
}

export default ContactForm;
