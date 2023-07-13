import kyoAudioDefesa from '../audio/iori-defesa3.mp3'
import kyoAudioFall from '../audio/kyo-fall.mp3'
import kyoAudioP1 from '../audio/kyo-p1.mp3'
import kyoAudioP2 from '../audio/kyo-p2.mp3'
import kyoAudioP3 from '../audio/kyo-p3.mp3'
import kyoAudioP4 from '../audio/kyo-p4.mp3'
import kyoAudioP5 from '../audio/kyo-p5.mp3'
import kyoAudioP6 from '../audio/kyo-p6.mp3'
// import kyoWin from '../img/kyo-win.gif'
import kyoDefesa from '../img/kyo-defesa.gif'
import kyoFall from '../img/kyo-fall.gif'
import kyoFight from '../img/kyo.gif'
import kyoP1 from '../img/kyo-p1.gif'
import kyoP2 from '../img/kyo-p2.gif'
import kyoP3 from '../img/kyo-p3.gif'
import kyoP4 from '../img/kyo-p4.gif'
import kyoP5 from '../img/kyo-p5.gif'
import kyoP6 from '../img/kyo-p6.gif'
import kyoMorto from '../img/kyo-morto33.gif'

const kyo = {
  luta: {
    src: kyoFight, left: '100px'
  },
  power: [
    {
      src: kyoP1, left: '60px', time: 1900, audio_src: kyoAudioP1
    },
    {
      src: kyoP2, left: '60px', time: 1450, audio_src: kyoAudioP2
    },
    {
      src: kyoP3, left: '60px', time: 3100, audio_src: kyoAudioP3
    },
    {
      src: kyoP4, left: '60px', time: 3600, audio_src: kyoAudioP4
    },
    {
      src: kyoP5, left: '60px', time: 3600, audio_src: kyoAudioP5
    },
    {
      src: kyoP6, left: '60px', time: 3450, audio_src: kyoAudioP6
    }

  ],

  fall: {
    src: kyoFall, left: '60px', audio_src: kyoAudioFall
  },
  morto: {
    src: kyoMorto
  },
  defesa: {
    src: kyoDefesa, left: '60px', audio_src: kyoAudioDefesa
  }
}

export default kyo
