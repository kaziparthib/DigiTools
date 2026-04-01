const Pri=()=>{
  return(
    <>
    
<div className="m-5">
       
     <div className="text-center">
      <h1 className="text-3xl font-bold">Simple,Transparent Pricing</h1>
      <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
     </div>

      <div className="max-w-7xl mx-auto px-24 grid grid-cols-1 md:grid-cols-3 gap-2 pt-3">


        <div className="shadow-sm w-70 p-2.5 space-y-1.5 bg-[#f9fafcFF]">
          <div>
            <h3 className="font-bold">Starter</h3>
            <p>Perfect for getting started</p>
          </div>
          <div>
            <p><span className="font-bold text-2xl">$0</span>/Month</p>
          </div>
          <div>
            <ul>
              <li>Access to 10 free tools</li>
              <li>Basic tamplates</li>
              <li>Community support</li>
              <li>1 project per month</li>
            </ul>
          </div>
          <button className="btn rounded-full w-full mt-2 bg-[linear-gradient(to_bottom,_rgba(79,57,246,1)_0%,_rgba(149,20,250,1)_100%)] text-white">Get Started Free</button>
        </div>


          <div className="shadow-sm w-70 p-2.5 space-y-1.5 bg-[linear-gradient(to_bottom,_rgba(79,57,246,1)_0%,_rgba(149,20,250,1)_100%)] text-white ">
          <div>
            <h3 className="font-bold">Pro</h3>
            <p>Best for professionals</p>
          </div>
          <div>
            <p><span className="font-bold text-2xl">$29</span>/Month</p>
          </div>
          <div>
            <ul>
              <li>Access to all premium tools</li>
              <li>Unlimited tamplates</li>
              <li>Priority support</li>
              <li>Unlimited project</li>
              <li>Cloud sync</li>
              <li>Advanced analytics</li>
            </ul>
          </div>

          <button className="btn rounded-full w-full mt-2 bg-white">Start Pro Trial</button>
        </div>


            <div className="shadow-sm w-70 p-2.5 space-y-1.5 bg-[#f9fafcFF]">
          <div>
            <h3 className="font-bold">Pro</h3>
            <p>Best for professionals</p>
          </div>
          <div>
            <p><span className="font-bold text-2xl">$29</span>/Month</p>
          </div>
          <div>
            <ul>
              <li>Everything in pro</li>
              <li>Team collaboration</li>
              <li>Custom integrations</li>
              <li>Dedicated support</li>
              <li>SLA guarantee</li>
              <li>custom branding</li>
            </ul>
          </div>

          <button className="btn rounded-full w-full mt-2 bg-[linear-gradient(to_bottom,_rgba(79,57,246,1)_0%,_rgba(149,20,250,1)_100%)] text-white">Contact Sales</button>
        </div>


        </div>





       
</div>
    </>
  )
}
export default Pri