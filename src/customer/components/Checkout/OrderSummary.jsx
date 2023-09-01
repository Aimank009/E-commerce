import React from 'react'
import AddressCard from "../AddressCard/AddressCard"
import Cart from '../Cart/Cart'
const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-md'>
        <AddressCard/>
      </div>
      <Cart/>
    </div>
  )
}

export default OrderSummary