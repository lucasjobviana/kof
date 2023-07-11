import iori_audio_p1 from '../audio/iori-p1.mp3';
import iori_audio_p2 from '../audio/iori-p2.mp3';
import iori_audio_p3 from '../audio/iori-px.mp3';
import iori_audio_p4 from '../audio/iori-p4.mp3';
import iori_audio_p5 from '../audio/iori-p5.mp3';
import iori_audio_p6 from '../audio/iori-p6.mp3';
import iori_audio_p7 from '../audio/iori-py.mp3';
import kyo_audio_p1 from '../audio/kyo-p1.mp3';
import kyo_audio_p2 from '../audio/kyo-p2.mp3';
import kyo_audio_p3 from '../audio/kyo-p3.mp3';
import kyo_audio_p4 from '../audio/kyo-p4.mp3';
import kyo_audio_p5 from '../audio/kyo-p5.mp3';
import kyo_audio_p6 from '../audio/kyo-p6.mp3';
import kyo_audio_fall from '../audio/kyo-fall.mp3';
import iori_audio_fall from '../audio/iori-fall.mp3';
import kyo_audio_defesa from '../audio/iori-defesa3.mp3';
import iori_audio_defesa from '../audio/iori-defesa3.mp3';
import introducaoMP3 from '../img/introducao.mp3';

import React, { Component } from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';

class AudioEffect extends Component {
  constructor(props){
    super(props);
    
    this.state = {
    	id:props.id,
    	audioRef: React.createRef(),
    }
    
  }
  
  canPlayChar = false;
  
  componentDidUpdate(){
  const {audioRef} = this.state;
  //this.playAudio(audioRef);
  }
  componentDidMount() {
   const {audioRef} = this.state;
		 audioRef.current.addEventListener('canplaythrough', () => {
		    this.canPlayChar = true;
		    console.log(this.canPlayChar)
		});
		
		audioRef.current.load(); // Inicie o carregamento do áudio
        document.addEventListener('click', this.handlePlay);
        //document.addEventListener('click', this.handlePlay);
        setTimeout(() => {
            document.removeEventListener('click', this.handlePlay);
        }, 11000);
		
		
  }
  
  handlePlay = () => {
	const {audioRef} = this.state;
        this.playAudio(audioRef);


    }
    
     pauseAudio(audio) {
        audio.pause();
    }

    stopAudio(audio) {
        audio.pause();
        audio.currentTime = 0;
    }
   
    playAudio = (ref) => {
     
        if (ref === ref) {
            if (this.canPlayChar) {
                ref.current.play();
                this.canPlayChar = false;
                console.log(this.canPlayChar)
                //this.audioRef.current.play();
                //this.audioRef1.current.play();
                // document.removeEventListener('keydown', this.handlePlay);
            }
        }/* else {
            if (this.canPlaykyo) {
                ref.current.play();
                this.canKyoIori = true;
                console.log(this.canPlayKyo)
                 
            } //                   voltar depois
        }*/


    }
  render(){
  	const { id, audio_src } = this.props; 
  	const { audioRef } = this.state;
  	//this.playAudio(audioRef);
  	
  	//const src = document.getElementsByTagName('source')[1];
  //  const audio = document.getElementById(`audio${id}`);
   // audio.load();
   //console.log('chamarei _playAudio')
    
    
  	
  	 
  	return (<div>
  	<audio id={`audio${id}`} ref={audioRef} >  
                            <source id={`source${id}`} src={introducaoMP3}   type="audio/mpeg" />
                            Seu navegador não suporta elementos de áudio.
                        </audio>
  	sound
  	</div>)
  }
}


export default connect()(AudioEffect);