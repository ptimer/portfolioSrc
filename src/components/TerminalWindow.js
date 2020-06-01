import React, {useRef } from "react";
import DnR from './DnR';
import {TerminalTheme} from './themes';

const paneStyle = {
	top: '25%',
	left: '10%',
	width: '50%',
	height: '25%'
};

export default class TerminalWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minimize: false
    };
		this.Terminal = TerminalTheme({
			title: 'React DnR',
			onClose: ()=>this.refs.dnr.minimize(),
			onMinimize: ()=>this.refs.dnr.minimize(),
			onMaximize: ()=>this.refs.dnr.maximize(),
		});
	}
	render() {
		return (

			<React.Fragment>
							<div style={{
					display: 'flex',
					alignItems: 'center',
					verticalAlign: 'baseline',
					padding: 10,
				}}>
					<button
						onClick={()=>this.refs.dnr.minimize()}>
						minimize
					</button>
					<button
						onClick={()=>this.refs.dnr.maximize()}>
						maximize
					</button>
					<button
						onClick={()=>this.refs.dnr.restore()}>
						restore
					</button>
				</div>
				<DnR
					ref='dnr'
					{...this.Terminal}
					cursorRemap={(c) => c === 'move' ? 'default' : null}
					style={paneStyle}>
			
				</DnR>
		  </React.Fragment>
		);
	}
}
