import React, {useRef } from "react";
import DnR from './DnR';
import {TerminalTheme} from './themes';

import {Label} from './Label'

const paneStyle = {
	top: '25%',
	left: '10%',
	width: 500,
	height: 250
};

export default class TerminalWindow extends React.Component {
  constructor(props) {
    super(props);
		this.Terminal = TerminalTheme({
			onClose: ()=>this.refs.terminal.minimize(),
			onMinimize: ()=>this.refs.terminal.minimize(),
			onMaximize: ()=>this.refs.terminal.maximize(),
		});
	}


	render() {
		return (
			<React.Fragment>


				<Label WhenDoubleClicked={()=>this.refs.terminal.restore()} img='../code.svg' text='terminal'
				dragParam={{
					id: 'Icon1',
					x: 0,
					y: 100,
				}}/>

				<DnR
					ref='terminal'
					{...this.Terminal}
					cursorRemap={(c) => c === 'move' ? 'default' : null}
					style={paneStyle}
					boundary={{
						top: 0,
						left: 0,
					}}>
					<div>
						<span className='terminal__text__span'>Привет, меня зовут Илья</span><br/>
						<span className='terminal__text__span'>И я начинающий фронтенд разработчик</span><br/>
						<span className='terminal__text__span'>Это мое портфолио :)</span>
					</div>
				</DnR>
		  </React.Fragment>
		);
	}
}
