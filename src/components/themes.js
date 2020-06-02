import React from "react"
import {defaultTheme} from './DnR'

export class Button extends React.Component {
  constructor(props) {
    super(props)

  	this.state = {
  		hover: false,
  		down: false,
  	}
  }
  render() {
    const {
      style,
      hoverStyle,
      downStyle,
      children,
      cursor,
      ...other
    } = this.props

    const dragging = /resize$/.test(cursor)

  	const buttonStyle = {
  		...style,
  		...(this.state.hover && !dragging ? hoverStyle : {}),
  		...(this.state.down && !dragging ? downStyle : {}),
      cursor
  	};

  	return (
  		<button
  			onMouseEnter={()=>this.setState({hover:true})}
  			onMouseLeave={()=>this.setState({hover:false,down:false})}
  			onMouseDown={()=>this.setState({down:true})}
  			onMouseUp={()=>this.setState({down:false})}
  			style={buttonStyle}
  			{...other}>
  			{children}
  		</button>)
  }
}

export const TitleBar = ({
	children,
	buttons,
	button1,
	button2,
	button3,
	button1Children,
	button2Children,
	button3Children,
	title,
  dnrState
}) =>
	<div>
		<div {...buttons}>
			<Button {...button1} cursor={dnrState.cursor}>
				{button1Children}
			</Button>
			<Button {...button2} cursor={dnrState.cursor}>
				{button2Children}
			</Button>
			<Button {...button3} cursor={dnrState.cursor}>
				{button3Children}
			</Button>
			<div style={{ position: 'absolute', right: 20, color: '#999'}}>
				{title}
			</div>
		</div>
		{children}
	</div>


// Themes LIST

export let TerminalTheme = ({title, onClose, onMinimize, onMaximize, titleBarColor = '#0095ff'}) => {

	const buttons = {
		className: 'terminal__head'
	}

	const closeButton = {
		className: 'terminal__circle terminal__circle_close',
		onClick: onClose
	}

	const minimizeButton = {
		className: 'terminal__circle terminal__circle_turn',
		onClick: onMinimize
	}

	const maximizeButton = {
		className: 'terminal__circle terminal__circle_expand',
		onClick: onMaximize
	}
	return {
		titleBar: (<TitleBar
				buttons={buttons}
				button1={closeButton}
				button2={minimizeButton}
				button3={maximizeButton}
				button1Children='Закрыть'
				button2Children='Свернуть'
				button3Children='На весь экран'
				title="Терминал">
			</TitleBar>),
		windowClassName: 'terminal',
		contentClassName: 'terminal__text',
		contentIdName: 'typedtext',
	}
}


export let TextFileTheme = ({title, onClose, onMinimize, onMaximize, titleBarColor = '#0095ff'}) => {

	const buttons = {
		className: 'terminal__head'
	}

	const closeButton = {
		className: 'terminal__circle terminal__circle_close',
		onClick: onClose
	}

	const minimizeButton = {
		className: 'terminal__circle terminal__circle_turn',
		onClick: onMinimize
	}

	const maximizeButton = {
		className: 'terminal__circle terminal__circle_expand',
		onClick: onMaximize
	}
	return {
		titleBar: (<TitleBar
				buttons={buttons}
				button1={closeButton}
				button2={minimizeButton}
				button3={maximizeButton}
				button1Children='Закрыть'
				button2Children='Свернуть'
				button3Children='На весь экран'
				title='ReadMe.txt'
				>
			</TitleBar>),
		windowClassName: 'window',
		contentClassName: 'window-body',
	}
}


export let PortfolioTheme = ({title, onClose, onMinimize, onMaximize, titleBarColor = '#0095ff'}) => {

	const buttons = {
		className: 'terminal__head'
	}

	const closeButton = {
		className: 'terminal__circle terminal__circle_close',
		onClick: onClose
	}

	const minimizeButton = {
		className: 'terminal__circle terminal__circle_turn',
		onClick: onMinimize
	}

	const maximizeButton = {
		className: 'terminal__circle terminal__circle_expand',
		onClick: onMaximize
	}
	return {
		titleBar: (<TitleBar
				buttons={buttons}
				button1={closeButton}
				button2={minimizeButton}
				button3={maximizeButton}
				button1Children='Закрыть'
				button2Children='Свернуть'
				button3Children='На весь экран'
				title='Портфолио'
				>
			</TitleBar>),
		contentClassName: 'portfolioWindow',
	}
}
