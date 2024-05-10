import React from 'react';
import style from './index.module.css';

class Input extends React.Component {
  render() {
    const { id, type, name, placeholder, } = this.props;
    return (
      <input
        placeholder={placeholder}
        className={style.input} id={id} name={name} type={type}
      />
    );
  }
}

export default Input;
