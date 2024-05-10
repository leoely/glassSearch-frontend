import React from 'react';
import style from './index.module.css';

class Label extends React.Component {
  render() {
    const { to, } = this.props;
    return (
      <label className={style.label} for={to}>{this.props.children}</label>
    );
  }
}

export default Label;
