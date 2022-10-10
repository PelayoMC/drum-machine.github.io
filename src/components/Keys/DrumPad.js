import PropTypes from "prop-types";
import { createRef, useEffect } from "react";

const DrumPad = (props) => {
  let { info, power, bank, volume, keyPressed, onSetValue } = props;

  useEffect(() => {
    if (keyPressed.k && keyPressed.k.toUpperCase() === info.value) {
      playSound();
    }
    if (volume) {
      let n = volume / 100;
      ref.current.volume = n;
    }
  });

  const ref = createRef();
  const playSound = () => {
    if (power) {
      ref.current.load();
      ref.current.play();
      onSetValue(bank ? info.text2 : info.text);
    }
  };

  return (
    <button className="drum-pad" onClick={playSound}>
      <audio
        ref={ref}
        id={info.value}
        src={bank ? info.audio2 : info.audio}
        type="audio/mpeg"
      ></audio>
      <b>{info.value}</b>
    </button>
  );
  // }}><audio className='clip' ref={ref} id={info.value}><source src={info.audio} type="audio/mpeg" /></audio><b>{info.value}</b></button>
};

DrumPad.propTypes = {
  info: PropTypes.object,
  power: PropTypes.bool,
  bank: PropTypes.bool,
  volume: PropTypes.number,
  keyPressed: PropTypes.object,
  onSetValue: PropTypes.func,
};

DrumPad.defaultProps = {
  info: {},
  power: false,
  bank: false,
  volume: 30,
  keyPressed: {},
  onSetValue: () => {},
};

export default DrumPad;
