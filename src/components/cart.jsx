import { toast } from "react-toastify"

const Cart=({Carts, setCarts})=>{
  const total=Carts.reduce((sum,item)=>parseInt(sum)+parseInt(item.price),0)
  const handlePay=()=>{
     setCarts([])
     toast.success("Payment Successfull!")
  }
  const handleDlt=(a)=>{
 const filterd=Carts.filter(b=>b.id !==a.id)
 setCarts(filterd)
 toast.error("removed!")
  }
  return(
    
     <div className=" p-10 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold">Your Cart</h1>

      {Carts.length === 0 ? (
        <p className="text-center text-2xl p-5"> Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-5 mt-4">
            {Carts.map((item) => (
              <div
                className="flex items-center justify-between bg-blue-50 rounded-lg p-3"
                key={item.id}
              >
                <div className="flex  items-center gap-2">
                  <div>
                    <p>fghj</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <div className=" font-bold">${item.price}</div>
                  </div>
                </div>

                
                  

                  <button onClick={()=>handleDlt(item)} className="text-red-500 cursor-pointer ">
                    remove
                  </button>
                
              </div>
            ))}
          </div>

          <div className=" flex justify-between  p-5 mt-5 rounded-lg text-3xl font-bold">
            <div>Total</div>
            <div>${total}</div>
          </div>

          <button
            onClick={handlePay}
            className="btn w-full mt-5 bg-red-500 text-white text-2xl  rounded-lg"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
    
  )

}     

export default Cart