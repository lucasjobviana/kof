import ioriAudioDefesa from '../audio/iori-defesa3.mp3'
import ioriAudioFall from '../audio/iori-fall.mp3'
import ioriAudioP1 from '../audio/iori-p1.mp3'
import ioriAudioP2 from '../audio/iori-p2.mp3'
import ioriAudioP3 from '../audio/iori-px.mp3'
import ioriAudioP4 from '../audio/iori-p4.mp3'
import ioriAudioP5 from '../audio/iori-p5.mp3'
import ioriAudioP6 from '../audio/iori-p6.mp3'
import ioriAudioP7 from '../audio/iori-py.mp3'
// import ioriWin from '../img/iori-win.gif'
import ioriDefesa from '../img/iori-defesa.gif'
import ioriFall from '../img/iori-fall.gif'
import ioriFight from '../img/iori.gif'
import ioriP1 from '../img/iori-p1.gif'
import ioriP2 from '../img/iori-p2.gif'
import ioriP3 from '../img/iori-p3.gif'
import ioriP4 from '../img/iori-p4.gif'
import ioriP5 from '../img/iori-p5.gif'
import ioriP6 from '../img/iori-p6.gif'
import ioriP7 from '../img/iori-p7.gif'
import ioriP8 from '../img/iori-p8.gif'
// import ioriP9 from '../img/iori-p9.gif';
import ioriMorto from '../img/iori-morto33.png'

const iori = {
  luta: {
    src: ioriFight, left: '100px'
  },
  power: [
    {
      src: ioriP1, left: '60px', time: 1850, audio_src: ioriAudioP1
    },
    {
      src: ioriP2, left: '60px', time: 2020, audio_src: ioriAudioP2
    },
    {
      src: ioriP3, left: '60px', time: 6100, audio_src: ioriAudioP3
    },
    {
      src: ioriP4, left: '60px', time: 1518, audio_src: ioriAudioP4
    },
    {
      src: ioriP5, left: '60px', time: 4000, audio_src: ioriAudioP5
    },
    {
      src: ioriP6, left: '60px', time: 6400, audio_src: ioriAudioP6
    },
    {
      src: ioriP7, left: '60px', time: 5000, audio_src: ioriAudioP7
    },
    {
      src: ioriP8, left: '60px', time: 4000, audio_src: ioriAudioP7
    }

  ],

  fall: {
    src: ioriFall, left: '60px', audio_src: ioriAudioFall
  },
  morto: {
    src: ioriMorto
  },
  defesa: {
    src: ioriDefesa, left: '60px', audio_src: ioriAudioDefesa
  }
}

export default iori
