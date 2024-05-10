import React from 'react';
import style from './index.module.css';

class TextArea extends React.Component {
  render() {
    const { name, placeholder, } = this.props;
    return(
      <textarea
        className={style.textarea} name={name} placeholder={placeholder}
      />
    );
  }
}

export default TextArea;
