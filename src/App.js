import "./App.css"
import { useEffect, useState } from "react"

function App() {
  
  const [drumKey, setDrumKey] = useState('Drum Machine')
  
  const keys = {
    "Q": "Ride Cymbal?" , 
    "W": "Crash Cymbal?" , 
    "E": "High Tom?" , 
    "A": "Snare Drum?" , 
    "S": "High Hat?" , 
    "D": "Stand Tom?" , 
    "Z":  "Closed HH?" ,
    "X": "Kick Drum?" ,
    "C": "Open HH?"
 }
  
  const play = (drumKey) => {
    
    if(keys[drumKey] === undefined )   {
      return 
    }
    
    document.getElementById(drumKey).play()
    setDrumKey(keys[drumKey])
  }
  const handleKeyPress = (e) => {
    
    play(e.key.toUpperCase())
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  })

  return (
    <div className="App">      
      <div className="container" id="drum-machine">
        
        <div className="row">
          <div className="col-xl-1 drum-pad" id="padQ" onClick={()=>play('Q')}>
            Q<audio className="clip" id="Q" src="assets/Q.mp3"></audio>
          </div>
          <div className="col-xl-1 drum-pad" id="padW" onClick={()=>play('W')}>
            W<audio className="clip" id="W" src="assets/W.mp3"></audio>
          </div>
          <div className="col-xl-1 drum-pad" id="padE" onClick={()=>play('E')}>
            E<audio className="clip" id="E" src="assets/E.mp3"></audio>
          </div>
        </div>
        <div className="row ">
          <div className="col-xl-1 drum-pad" id="padA" onClick={()=>play('A')}>
            A<audio className="clip" id="A"  src="assets/A.mp3"></audio>
          </div>
          <div className="col-xl-1 drum-pad" id="padS"  onClick={()=>play('S')}>
            S<audio className="clip" id="S" src="assets/S.mp3"></audio>
          </div>
          <div className="col-xl-1 drum-pad" id="padD"  onClick={()=>play('D')}>
            D<audio className="clip" id="D"  src="assets/D.mp3"></audio>
          </div>
          
          <div className="col-xl-2"></div>
          
          <div className="col-xl-4 text-center justify-content-end" id="display">{drumKey}</div>
        
        </div>
        <div className="row">
          <div className="col-xl-1 drum-pad" id="padZ"  onClick={()=>play('Z')}>
            Z<audio className="clip" id="Z" src="assets/Z.mp3"></audio>
          </div>
          <div className="col-xl-1 drum-pad" id="padX"  onClick={()=>play('X')}>
            X<audio className="clip" id="X"  src="assets/X.mp3"></audio>
          </div>
          <div className="col-xl-1 drum-pad" id="padC"  onClick={()=>play('C')}>
            C<audio className="clip" id="C" src="assets/C.mp3"></audio>
          </div>
        </div>
      </div>
      
      
      <div id="avatar"><img src="images/arakawacow.jpg" alt="me!" ></img></div>
    </div>
  )
}

export default App
