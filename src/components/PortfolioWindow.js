import React from "react";
import DnR from './DnR';
import {PortfolioTheme} from './themes'
import {Label} from './Label'

import Portfolio from './static/Portfolio'

const paneStyle = {
  top: '25%',
  left: '10%',
  width: 0,
  height: 0
};

export default class PortfolioWindow extends React.Component {
  constructor(props) {
    super(props);
    this.Portfolio = PortfolioTheme({
      onClose: ()=>this.refs.portfolio.minimize(),
      onMinimize: ()=>this.refs.portfolio.minimize(),
      onMaximize: ()=>this.refs.portfolio.maximize(),
    });
  }


  render() {
    return (
      <React.Fragment>


        <Label WhenDoubleClicked={()=>this.refs.portfolio.restore()} img='https://image.flaticon.com/icons/svg/2580/2580777.svg' text='Портфолио'
        dragParam={{
          id: 'Icon3',
          x: 0,
          y: 300,
        }}/>

        <DnR
          ref='portfolio'
          {...this.Portfolio}
          cursorRemap={(c) => c === 'move' ? 'default' : null}
          style={paneStyle}
          boundary={{
            top: 0,
            left: 0,
          }}>
          <div>
            <Portfolio />
          </div>
        </DnR>
      </React.Fragment>
    );
  }
}

