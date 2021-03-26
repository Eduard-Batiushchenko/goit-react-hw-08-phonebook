import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getContactsOperation,
  deleteContactOperation,
} from '../../redux/operations/contactsOperations';
import {
  getFilterValue,
  getFilteredItems,
  getTokenValue,
} from '../../redux/selectors/contacts-selectors';
import style from './Contacts.module.css';

class Contacts extends Component {
  componentDidMount() {
    this.props.reloadPage(this.props.token);
  }

  render() {
    const { deleteContact, state } = this.props;
    const filterInpurt = getFilteredItems(state);
    return (
      <ul className={style.list}>
        {filterInpurt.map(el => {
          return (
            <li key={el.id} className={style.item}>
              {el.name}: {el.number}
              <button
                type="button"
                className={style.button}
                onClick={() => deleteContact(el.id, this.props.token)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

Contacts.propTypes = {
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: getFilterValue(state),
  state: state,
  token: getTokenValue(state),
});
const mapDispatchToProps = dispatch => ({
  deleteContact: (id, token) => dispatch(deleteContactOperation(id, token)),
  reloadPage: data => dispatch(getContactsOperation(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
