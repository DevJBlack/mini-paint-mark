import React, { Component } from 'react'
import ColorPicker from './ColorPicker'
import Square from './Square'

class PaintCanvas extends Component {
  constructor(){
    super()
    this.state=({
      selectedColor: 'blue'
    })
    this.changeSelectedColor = this.changeSelectedColor.bind(this)
  }


  changeSelectedColor(color){
    this.setState({
      selectedColor: color
    })
  }

  draw(){
    let squares = []
 for (var i = 0; i < 5000; i++) {
   squares.push(<Square selectedColor={this.state.selectedColor} />)
 }

 return squares
  }

  render(){
    return(
      <div>
        <ColorPicker handleColorClick={this.changeSelectedColor}/>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
   {this.draw()}
</div>
      </div>
    )
  }
}

export default PaintCanvas