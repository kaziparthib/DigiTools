import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Cart from './components/cart'
import ToolsBanner from './components/ToolsBanner'
import Tools from './components/Tools'

const GetTools=async()=>{
  const res=await fetch("/tools.json");
  return res.json()
}
const toolsPromise=GetTools()

function App() {
  const [ActiveTab,setActiveTab]=useState("products")
  const [Carts,setCarts]=useState([])
  

  return (
    <>
    
    <ToolsBanner></ToolsBanner>
    {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center bg-transparent">
  <input onClick={()=> setActiveTab("products")} type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="products" defaultChecked />
  <input onClick={()=> setActiveTab("cart")} type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`Cart (${Carts.length})`}  />
  
</div>


    {ActiveTab==="products" && <Tools toolsPromise={toolsPromise}  Carts={Carts} setCarts={setCarts} ></Tools>}
    {ActiveTab==="cart" && <Cart  Carts={Carts} setCarts={setCarts}></Cart>}
    </>
      
  )
}

export default App
