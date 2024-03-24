import { useState, useReducer, useContext, createContext } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export const MyContext = createContext()

const initialState = {
  dataForComponent1: "1 data",
  dataForComponent2: "2 data",
  dataForComponent3: "3 data",
  dataForComponent4: "4 data",
  dataForComponent5: "5 data",
  dataForComponent6: "6 data",  
}


const reducer = (state, action) => {
   if(action.type == "component1"){
    return {
      ...state, dataForComponent1: action.payload
    }
   } else if(action.type == "component2"){
    return {
      ...state, dataForComponent2: action.payload
    }
   } else if(action.type == "component3"){
    return {
      ...state, dataForComponent3: action.payload
    }
   } else if(action.type == "component4"){
    return {
      ...state, dataForComponent4: action.payload
    }
   } else if(action.type == "component5"){
    return {
      ...state, dataForComponent5: action.payload
    }
   } else if(action.type == "component6"){
    return {
      ...state, dataForComponent6: action.payload
    }
   }

}





function App() {

  const [state, dispatch] = useReducer(reducer, initialState) 

   return (
    <MyContext.Provider value={{
      state,
      dispatch
    }}>
      <div className='App'>
        <Home />
        <About />
        <Contact />

      </div>
    </MyContext.Provider>   
  );
}

export default App
