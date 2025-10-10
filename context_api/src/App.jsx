
import './App.css'
import Family from './prop-drill/Family'
import { FamilyContext } from './prop-drill/FamilyContext'

function App() {


  const familyMessage ={
        familyName: "Invincibles"
  }

  return (
    <>
      {/* prop drilling example */}

      {/* <Family message={familyMessage}/> */}
      
      {/* ///////// */}

      {/* context api example */}

      {/* the FamilyContext sends data to all the children without prop drilling */}
      <FamilyContext.Provider value={familyMessage}> 
        <Family />
      </FamilyContext.Provider>
    </>
  )
}

export default App
