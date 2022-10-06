import PropTypes from 'prop-types';
import { createRef } from 'react';

const DrumPad = props => {
    let { info, onSetValue } = props

    const ref = createRef();
    const playSound = rff => {
        rff.current.play()
        onSetValue(info.text);
    }
    
    return <button className="drum-pad" onClick={() => playSound(ref)} ><audio ref={ref} id={info.value} src={info.audio} type="audio/mpeg"></audio><b>{info.value}</b></button>
// }}><audio className='clip' ref={ref} id={info.value}><source src={info.audio} type="audio/mpeg" /></audio><b>{info.value}</b></button>
}

DrumPad.propTypes = {
    info: PropTypes.object,
    onSetValue: PropTypes.func
}

DrumPad.defaultProps = {
    info: {},
    onSetValue: () => {}
}

export default DrumPad