import React, {useRef } from "react";
import DnR from './DnR';
import {TextFileTheme} from './themes';

import {Label} from './Label'

const paneStyle = {
	top: '25%',
	left: '10%',
	width: 0,
	height: 0
};

export default class TextFileWindow extends React.Component {
  constructor(props) {
    super(props);
		this.TextFile = TextFileTheme({
			onClose: ()=>this.refs.textfile.minimize(),
			onMinimize: ()=>this.refs.textfile.minimize(),
			onMaximize: ()=>this.refs.textfile.maximize(),
		});
	}


	render() {
		return (
			<React.Fragment>


				<Label WhenDoubleClicked={()=>this.refs.textfile.restore()} img='https://image.flaticon.com/icons/svg/2932/2932891.svg' text='ReadMe.txt'
				dragParam={{
					id: 'Icon2',
					x: 0,
					y: 200,
				}}/>

				<DnR
					ref='textfile'
					{...this.TextFile}
					cursorRemap={(c) => c === 'move' ? 'default' : null}
					style={paneStyle}
					boundary={{
						top: 0,
						left: 0,
					}}>
					<textarea class="code-input">Оу привет! Давно сюда никто не заходил.
						У меня здесь есть масса интересного материала, начиная фильмами, книгами, которые я читаю, заканчивая материалом, который
						я изучаю на пути своего развития, как веб-разработчика. 
					</textarea>
				</DnR>
		  </React.Fragment>
		);
	}
}

