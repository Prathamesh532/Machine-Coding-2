import React, { useEffect, useState } from 'react'
import ReactDOM  from 'react-dom/client'
import ProgressBar from './src/machineCoding/ProgressBar/ProgressBar'
import Pagination from './src/machineCoding/Pagination/Pagination'
import FileExpoler from './src/machineCoding/FileExpoler/FileExpoler'
import  expoler from "./src/machineCoding/FileExpoler/Data/ExpolerData";
import Timer from './src/machineCoding/TimerCounter/Timer'
import PasswordGen from './src/machineCoding/PasswordGenrator/PasswordGen'
import EmiCaluculator from './src/machineCoding/EMICalculator/EmiCaluculator'


const App = () => {
  const [value, setValue] = useState(0); // progrss bar ----

  // For fileExpoler ----
  const [expolerData, setExpolerData] = useState(expoler);


  // for Progrss Bar ----
  // useEffect(()=>{
  //   setInterval(()=>{
  //     setValue((val) => val + 1)
  //   } , 100)
  // },[])
  return (
    <React.Fragment>
        {/* <h1>Hello</h1> */}
        {/* <ProgressBar value={value} /> */}
        {/* <Pagination /> */}
        {/* <FileExpoler expoler={expolerData} /> */}
        {/* <Timer /> */}
        {/* <PasswordGen  /> */}
        <EmiCaluculator />
    </React.Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)