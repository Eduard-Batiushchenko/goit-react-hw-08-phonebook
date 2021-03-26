import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContactsOperation } from '../../redux/operations/contactsOperations';
import {
  getAllContacts,
  getTokenValue,
} from '../../redux/selectors/contacts-selectors';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = e => {
    const currentInput = e.currentTarget.name;
    this.setState({ [currentInput]: e.target.value });
  };

  handleSubmitInput = e => {
    e.preventDefault();
    const result = this.props.items.some(
      el => el.name.toLowerCase() === this.state.name.toLowerCase(),
    );
    !result
      ? this.props.addItems(this.state, this.props.token)
      : alert(`${this.state.name} contact already exist`);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmitInput}>
        <label className={style.label}>
          {' '}
          Name
          <input
            className={style.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
            required
          />
        </label>
        <label className={style.label}>
          Number
          <input
            className={style.input}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInput}
            required
          />
        </label>
        <button className={style.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  addItems: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addItems: (item, token) => dispatch(addContactsOperation(item, token)),
});
const mapStateToProps = state => ({
  items: getAllContacts(state),
  token: getTokenValue(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
