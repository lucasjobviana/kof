import iori_audio_defesa from '../audio/iori-defesa3.mp3';
import iori_audio_fall from '../audio/iori-fall.mp3';
import iori_audio_p1 from '../audio/iori-p1.mp3';
import iori_audio_p2 from '../audio/iori-p2.mp3';
import iori_audio_p3 from '../audio/iori-px.mp3';
import iori_audio_p4 from '../audio/iori-p4.mp3';
import iori_audio_p5 from '../audio/iori-p5.mp3';
import iori_audio_p6 from '../audio/iori-p6.mp3';
import iori_audio_p7 from '../audio/iori-py.mp3';
import iori_win from '../img/iori-win.gif';
import iori_defesa from '../img/iori-defesa.gif';
import iori_fall from '../img/iori-fall.gif';
import iori_fight from '../img/iori.gif';
import iori_p1 from '../img/iori-p1.gif';
import iori_p2 from '../img/iori-p2.gif';
import iori_p3 from '../img/iori-p3.gif';
import iori_p4 from '../img/iori-p4.gif';
import iori_p5 from '../img/iori-p5.gif';
import iori_p6 from '../img/iori-p6.gif';
import iori_p7 from '../img/iori-p7.gif';
import iori_p8 from '../img/iori-p8.gif';
// import iori_p9 from '../img/iori-p9.gif';
import iori_morto from '../img/iori-morto33.png';

const iori = { 
    luta: {
        src: iori_fight, left: '100px'
    },
    power: [
        {
            src: iori_p1, left: '60px', time: 1850, audio_src: iori_audio_p1,
        },
        {
            src: iori_p2, left: '60px', time: 2020, audio_src: iori_audio_p2,
        },
        {
            src: iori_p3, left: '60px', time: 6100, audio_src: iori_audio_p3,
        },
        {
            src: iori_p4, left: '60px', time: 1518, audio_src: iori_audio_p4,
        },
        {
            src: iori_p5, left: '60px', time: 4000, audio_src: iori_audio_p5,
        },
        {
            src: iori_p6, left: '60px', time: 6400, audio_src: iori_audio_p6,
        },
        {
            src: iori_p7, left: '60px', time: 5000, audio_src: iori_audio_p7,
        },
        {
            src: iori_p8, left: '60px', time: 4000, audio_src: iori_audio_p7,
        }

    ],

    fall: {
        src: iori_fall, left: '60px', audio_src: iori_audio_fall,
    },
    morto: {
        src: iori_morto,
    },
    defesa: {
        src: iori_defesa, left: '60px', audio_src: iori_audio_defesa,
    }
}

export default iori;