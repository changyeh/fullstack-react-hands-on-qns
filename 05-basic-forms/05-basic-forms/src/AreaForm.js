import React, {useState} from 'react';

export default function AreaForm(){
  let [width, setWidth] = useState(0);
  let [height, setHeight] = useState(0);

  const updateWidth =  (event) => {
    setWidth(()=>event.target.value);
  }

  const updateHeight = (event) => {
    setHeight(()=>event.target.value);
  }

    return (
      <React.Fragment>
        <div>
          <label>Width:</label>
          <input type="text" value={width} onChange={updateWidth}/>
        </div>
        <div>
          <label>Height:</label>
          <input type="text" value={height} onChange={updateHeight}/>
        </div>
        <div>Area = {width * height}</div>
      </React.Fragment>
    )
}

