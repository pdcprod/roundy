import React, { useState } from 'react';
import { render } from 'react-dom'

import Roundy from '../../src'

function Demo() {
  const [value, setValue] = useState(50);
  return (
    <div className="App">
      <Roundy
        color="red"
        bgColor="blue"
        value={value}
        allowClick
        arcSize={180}
        strokeWidth={10}
        onChange={setValue}
      />
      <h3>{value}</h3>
    </div>
  );
}

render(<Demo />, document.querySelector('#demo'))
