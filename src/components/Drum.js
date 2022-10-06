import { createRef, useEffect } from "react";
import DrumPad from "./Keys/DrumPad";
import keys from "./Keys/keys";

const Drum = () => {
    const drumRef = createRef();
    useEffect(() => {
        if (drumRef) {
            drumRef.current.focus();
        }
      }, [drumRef]);

    const showData = event => {
        console.log(event);
    }
    const keyPressed = evt => {
        console.log(evt.key);
    }

    return <div id="drum-machine" className="row" ref={drumRef} onKeyDown={keyPressed} tabIndex={-1}>
        <div id="drum-buttons" className="col-6">
            {keys.map((k, index) => <DrumPad key={index} info={k} onSetValue={data => showData(data)}/>)}
        </div>
        <div className="col-6">
        <div className="logo">logo</div>
        <div className="controls-container">
            <div>select</div>
            {/* <audio controls><source src="../../public/audio/Heater 1.mp3" type="audio/mp3"></source></audio> */}
            <div id="display">zone name</div>
            <div>slider</div>
            <div>select2</div>
        </div>
        </div>
    </div>
}

export default Drum;