import React from "react";
import { IconButton,Button } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?format=webp&w=480&dpr=2.0"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold ">Tom T-shirt</p>
          <p className="opacity-70"> Size: L,White</p>
          <p className="opacity-70 mt-2">Seller: Happu Singh</p>

          <div className="flex space-x-5 items-center  text-gray-900 pt-6">
            <p className="opacity line-through">₹1999</p>
            <p className="font-semibold">₹199</p>
            <p className="font-semibold text-green-600">70% off</p>
          </div>
        </div>
       
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4 ">
            <div className="flex items-center space-x-2">
                <IconButton>
                    <RemoveCircleOutlineIcon />
                </IconButton>
                <span className="py-1 px-7 border rounded-sm">3</span>
                <IconButton sx={{color:"RGB(145 85 253)"}}>
                    <ControlPointIcon/>
                </IconButton>
            </div>
            <div>
                <Button sx={{color:"RGB(145 85 253)"}}>Remove</Button>
            </div>
        </div>
    </div>
  );
};

export default CartItem;
