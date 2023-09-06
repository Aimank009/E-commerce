import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, findProducts } from '../../State/Product/Action.js';
import { Avatar, Button, CardHeader } from '@mui/material';
import { Card } from '@mui/material';




const ProductsTable = () => {

const dispatch=useDispatch();
const {products}=useSelector(store=>store);

console.log("products-----",products);

const handleProductDelete=(productId)=>{
  dispatch(deleteProduct(productId))
}
  useEffect(() => {
  
    const data = {
      category:"", 
      colors:  [], 
      sizes:  [],
      minPrice: 0,
      maxPrice: 10000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber:null,
      pageSize:10,
      stock:"",
    };
    dispatch(findProducts(data));
  }, [products.deletedProduct]);

  console.log("bur ------",products.products.content)
  return (
    <div className='p-5'>

    <Card className='mt-2 shadow-lg border border-gray-200'  >
    <CardHeader title='All Products' />
    <TableContainer sx={{}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.products.content ? (
              products.products.content.slice(0).map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='left'>
                <Avatar src={item.imageUrl}></Avatar>
              </TableCell>
              <TableCell align='left' scope="row">
                {item.title}
              </TableCell>
              <TableCell align="left">{item.category.name}</TableCell>
              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left">{item.quantity}</TableCell>
              <TableCell align="left">
                <Button onClick={()=>handleProductDelete(item._id)} variant='outlined'>
                    Delete
                </Button>
              </TableCell>
            </TableRow>
          ))):(
            <TableRow>
              <TableCell colSpan={5}>Loading...</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </Card>


     
    </div>
  )
}

export default ProductsTable