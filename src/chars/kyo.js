import kyo_audio_defesa from '../audio/iori-defesa3.mp3';
import kyo_audio_p1 from '../audio/kyo-p1.mp3';
import kyo_audio_p2 from '../audio/kyo-p2.mp3';
import kyo_audio_p3 from '../audio/kyo-p3.mp3';
import kyo_audio_p4 from '../audio/kyo-p4.mp3';
import kyo_audio_p5 from '../audio/kyo-p5.mp3';
import kyo_audio_p6 from '../audio/kyo-p6.mp3';
import kyo_audio_fall from '../audio/kyo-fall.mp3';
import kyo_fight from '../img/kyo.gif';
import kyo_p1 from '../img/kyo-p1.gif';
import kyo_p2 from '../img/kyo-p2.gif';
import kyo_p3 from '../img/kyo-p3.gif';
import kyo_p4 from '../img/kyo-p4.gif';
import kyo_p5 from '../img/kyo-p5.gif';
import kyo_p6 from '../img/kyo-p6.gif';
import kyo_morto from '../img/kyo-morto44.gif';
import iori_morto from '../img/iori-morto33.png';
import kyo_defesa from '../img/kyo-defesa.gif';
import kyo_fall from '../img/kyo-fall.gif';
 

const kyo = {
    luta: {
        src: kyo_fight, left: '100px'
    }, power: [
        {
            src: kyo_p1, left: '60px', time: 1900, audio_src: kyo_audio_p1,
        },
        {
            src: kyo_p2, left: '60px', time: 1450, audio_src: kyo_audio_p2,
        },
        {
            src: kyo_p3, left: '60px', time: 3100, audio_src: kyo_audio_p3,
        },
        {
            src: kyo_p4, left: '60px', time: 3450, audio_src: kyo_audio_p4,
        },
        {
            src: kyo_p5, left: '60px', time: 3600, audio_src: kyo_audio_p5,
        }, ,
        {
            src: kyo_p6, left: '60px', time: 7500, audio_src: kyo_audio_p6,
        }],
    fall: {
        src: kyo_fall, left: '60px', audio_src: kyo_audio_fall,
    },
    morto: {
        src: kyo_morto,
    },
    defesa: {
        src: kyo_defesa, left: '60px', audio_src: kyo_audio_defesa,
    }
}

export default kyo;