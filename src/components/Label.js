import React from "react"
import ReactDom from 'react-dom'
import Draggable from 'react-draggable';

export class Label extends React.Component {
  constructor(props) {
    super(props)
  }

  preventDragHandler(e){
    e.preventDefault()
  }


  render() {
  	return (
      <Draggable
        axis="both"
        handle= {"#" + this.props.dragParam.id}
        defaultPosition={{x: this.props.dragParam.x, y: this.props.dragParam.y}}
        bounds = {'.App'}
        position={null}
        grid={[100, 100]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div className="Icon" id={this.props.dragParam.id} onDoubleClick={this.props.WhenDoubleClicked}>
          <img onDragStart={(e) => this.preventDragHandler(e)} src={this.props.img} alt="" style={{width: '50px'}}/>
          <p className="ILabel">{this.props.text}</p>
        </div>
      </Draggable>
  	)
  }
}