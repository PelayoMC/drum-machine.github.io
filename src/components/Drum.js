import DrumPad from "./DrumPad";

const Drum = () => {
    return <div id="drum-machine" className="row">
        <div className="col-6">
            {Array.from(Array(10).keys()).map((e, index) => <DrumPad key={index} />)}
        </div>
        <div className="col-6">
        <div className="logo">logo</div>
        <div className="controls-container">
            <div>select</div>
            <div>zone name</div>
            <div>slider</div>
            <div>select2</div>
        </div>
        </div>
    </div>
}

export default Drum;