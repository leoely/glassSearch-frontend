import React from 'react';
import Input from '~/client/script/component/Input';
import Label from '~/client/script/component/Label';
import TextArea from '~/client/script/component/TextArea';
import Button from '~/client/script/component/Button';
import style from './index.module.css';

class Home extends React.Component {
  render() {
    return(
      <>
        <div className={style.banner} />
        <div className={style.home}>
          <div className={style.inputgrp}>
            <Label for="location">location:</Label>
            <Input type="text" name="location" placeholder="location" />
          </div>
          <div className={style.inputgrp}>
            <Label for="path">path:</Label>
            <Input type="text" name="path" placeholder="path" />
          </div>
          <div className={style.textareagrip}>
            <Label for="document">document:</Label>
            <TextArea name="document" placeholder="document" />
          </div>
        </div>
        <div className={style.bottom}>
          <Button>submit</Button>
        </div>
      </>
    );
  }
}

export default Home;
