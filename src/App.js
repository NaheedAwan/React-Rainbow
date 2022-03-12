
import './App.css';
import React, { useState } from 'react'
import ColorBlock from './Components/ColorBlock'
import ColorForm from './Components/ColorForm'

function App() {
  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])
  let colorMap = colors.map((color, index) => {
    return (
      <ColorBlock color={color} />
    )
  })
  const addColor = (newColor) => {
    setColors([colors, newColor])
  }
  return (
    <div className="App">
      {/* {colors.map((color, i) =>
        <ColorBlock key={i} color={color} />
      )} */}
         {colorMap}
        <ColorForm addColor={addColor} />

      {/* <>
        <ColorForm />
        {colorMap}
        <ColorForm addColor={addColor} />
      </> */}

    </div>


  )
}

export default App;
