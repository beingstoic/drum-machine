import React, { Component } from 'react';
import KeyHandler, { KEYPRESS } from 'react-key-handler';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      
    }
  }

  handleChange(KEYPRESS){
      console.log(KEYPRESS)
  }
  render() {
    
    

    return (
      <div id='drum-machine'>
          <KeyHandler KeyEventName={KEYPRESS} onKeyHandle={this.handleChange({KEYPRESS})} />
          <div id='display'>
              <button id='Q' KEYPRESS='Q' className='drum-pad' onClick={()=>{this.handleChange}} />
              <button id='W' KEYPRESS='W' className='drum-pad' onClick={()=>{this.handleChange}} />
              <button id='E' KEYPRESS='E' className='drum-pad' onClick={()=>{this.handleChange}} />
              <button id='A' KEYPRESS='A' className='drum-pad' onClick={()=>{this.handleChange}} />
              <button id='S' KEYPRESS='S' className='drum-pad' onClick={()=>{this.handleChange}} />
              <button id='D' KEYPRESS='D' className='drum-pad' onClick={()=>{this.handleChange}} />
              <button id='Z' KEYPRESS='Z' className='drum-pad' onClick={()=>{this.handleChange}} />
              <button id='X' KEYPRESS='X' className='drum-pad' onClick={()=>{this.handleChange}} />
              <button id='C' KEYPRESS='C' className='drum-pad' onClick={()=>{this.handleChange}} />
          </div>
      </div>
    );
  }
}

export default App;
