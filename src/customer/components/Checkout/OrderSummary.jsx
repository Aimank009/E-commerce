import React, { useEffect } from 'react'
import AddressCard from "../AddressCard/AddressCard"
import Cart from '../Cart/Cart'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getOrderById } from '../../../State/Order/Action';
import { Button } from '@mui/material';
import CartItem from '../Cart/CartItem';
const OrderSummary = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const location=useLocation();
  const {order}=useSelector((store)=>store)
  const searchParams=new URLSearchParams(location.search)
  const orderId=searchParams.get("order_id");

  const handleCheckOut=()=>{
    navigate("/payment")
  }
  useEffect(()=>{
    console.log(orderId)
    dispatch(getOrderById(orderId))
  },[orderId])
  return (
    <div className="space-y-5">
        <div className="p-5 shadow-lg rounded-md border ">
            <AddressCard address={order.order?.shippingAddress}/>
        </div>
      <div className="lg:grid grid-cols-3 relative justify-between">
        <div className="lg:col-span-2 ">
          <div className=" space-y-3">
            {order.order?.orderItems.map((item) => (
              <>
                <CartItem item={item} showButton={false}/>
              </>
            ))}
          </div>
        </div>
        <div className="sticky top-0 h-[100vh] mt-5 lg:mt-0 ml-5">
          <div className="border p-5 bg-white shadow-lg rounded-md">
            <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
            <hr />

            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black ">
                <span>Price ({order.order?.totalItem} item)</span>
                <span>₹{order.order?.totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-700">-₹{order.order?.discounte}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-700">Free</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span className="text-green-700">₹{order.order?.totalDiscountedPrice}</span>
              </div>
            </div>

            <Button
              onClick={handleCheckOut}
              variant="contained"
              type="submit"
              sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
            >
              Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary