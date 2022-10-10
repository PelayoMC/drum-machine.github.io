import { createRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import DrumPad from "./Keys/DrumPad";
import keys from "./Keys/keys";

const Drum = () => {
  let [data, setData] = useState("");
  let [power, setPower] = useState(true);
  let [bank, setBank] = useState(false);
  let [volume, setVolume] = useState(30);
  let [key, setKey] = useState({ k: null, n: null });
  const drumRef = createRef();
  useEffect(() => {
    if (drumRef) {
      drumRef.current.focus();
    }
  }, [drumRef]);

  const showData = (event) => {
    setData(event);
  };
  const keyPressed = (evt) => {
    setKey({ k: evt.key, n: evt.timeStamp });
  };
  const powerModifier = () => {
    setPower(!power);
  };
  const bankModifier = () => {
    setBank(!bank);
  };
  const volumeModifier = (evt) => {
    console.log(evt.target.valueAsNumber);
    setData("Volumen: " + evt.target.valueAsNumber);
    setVolume(parseInt(evt.target.valueAsNumber));
  };

  return (
    <div
      id="drum-machine"
      className="row"
      ref={drumRef}
      onKeyDown={keyPressed}
      tabIndex={-1}
    >
      <div id="drum-buttons" className="col-6">
        {keys.map((k, index) => (
          <DrumPad
            key={index}
            power={power}
            bank={bank}
            volume={volume}
            keyPressed={key}
            info={k}
            onSetValue={(data) => showData(data)}
          />
        ))}
      </div>
      <div className="col-6">
        <div className="logo">
          <span>FCC </span>
          <FontAwesomeIcon icon={faFreeCodeCamp} size="lg" />
        </div>
        <div className="controls-container">
          <label className="form-check-label" htmlFor="switch1">
            Power
          </label>
          <div className="form-switch pb-1">
            <input
              className="form-check-input"
              type="checkbox"
              id="switch1"
              checked={power}
              onChange={powerModifier}
            ></input>
          </div>
          <div className="mb-1" id="display">
            {power ? data : "POWER OFF"}
          </div>
          <div className="pb-3 pt-1">
            <input
              type="range"
              value={volume}
              min={0}
              max={100}
              step={1}
              onChange={(event) => {
                volumeModifier(event);
              }}
            />
          </div>
          <label className="form-check-label" htmlFor="switch2">
            Bank
          </label>
          <div className="form-switch pb-1">
            <input
              className="form-check-input"
              type="checkbox"
              id="switch2"
              checked={bank}
              onChange={bankModifier}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drum;
