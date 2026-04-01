import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Cart from './components/cart'
import ToolsBanner from './components/ToolsBanner'
import Tools from './components/Tools'
import User from './components/User'
import NavBar from './components/navBar'
import Acc from './components/CreateAccount'
import Footer from './components/footer'
import Pri from './components/pricing'

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
    <NavBar></NavBar>
    <User></User>
    <ToolsBanner></ToolsBanner>
    {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center gap-1.5 bg-transparent">
  <input onClick={()=> setActiveTab("products")} type="radio" name="my_tabs_1" className="tab rounded-full font-bold w-40 bg-[linear-gradient(to_bottom,_rgba(79,57,246,1)_0%,_rgba(149,20,250,1)_100%)] text-white" aria-label="products" defaultChecked />
  <input onClick={()=> setActiveTab("cart")} type="radio" name="my_tabs_1" className="tab rounded-full font-bold w-40 bg-[linear-gradient(to_bottom,_rgba(79,57,246,1)_0%,_rgba(149,20,250,1)_100%)] text-white" aria-label={`Cart (${Carts.length})`}  />
  
</div>


    {ActiveTab==="products" && <Tools toolsPromise={toolsPromise}  Carts={Carts} setCarts={setCarts} ></Tools>}
    {ActiveTab==="cart" && <Cart  Carts={Carts} setCarts={setCarts}></Cart>}
    <Acc></Acc>
    <Pri></Pri>
    <Footer></Footer>
    </>
      
  )
}

export default App
