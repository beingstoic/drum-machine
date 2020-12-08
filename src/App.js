import React, { Component } from 'react';
import './App.css';

const data = [
  { id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
  { id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
  { id: 'bongo', letter: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
  { id: 'tom tom', letter: 'A', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
  { id: 'bass 3', letter: 'S', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
  { id: 'shotgun', letter: 'D', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' },
  { id: 'high hat', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
  { id: 'drum hit', letter: 'X', src: 'http://tipiwiki.free.fr/snd/Percussion(4e).wav' },
  { id: 'laser', letter: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav'  },
]


class DrumPad extends Component {
  
  handleClick =() => { 
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown)
    window.focus()
  }
  
   componentWillUnmount() {
     document.removeEventListener('keydown', this.handleKeydown)
  }

  handleKeydown= e => {
    if(e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }


  render(){
    return (
        <div className='drum-pad' id={this.props.id} onClick={this.handleClick}>
          <button className="btn btn-danger">{this.props.letter}</button>
          <audio id={this.props.letter}
               className='clip'
               src={this.props.src}
               ref={ref => this.audio = ref}
          ></audio>
        </div>
    )
  }
}



class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      display:'Click bellow or press key',

    }
  }

 
  handleDisplay = display => this.setState({ display })
 
  render() {
    return (
      <div className="container">
        <div id="drum-machine">
        <div id="display">{this.state.display}</div>
        <div id='drum-pads'>{data.map(d => (
          <DrumPad
            key={d.id}
            id={d.id}
            letter={d.letter}
            src={d.src}
            handleDisplay={this.handleDisplay}
          />   
         ))}</div>
      </div>
    </div>
    );
  }
}

export default App;