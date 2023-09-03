const cartService = require("./cart.service.js");
const Address = require("../models/address.model.js");
const OrderItems = require("../models/OrderItems.js");
const Order = require("../models/order.model.js");

async function createOrder(user, shippAddress) {
  let address;

  if (shippAddress._id) {
    let existAddress = await address.findById(shippAddress);
    address = existAddress;
  } else {
    address = new Address(shippAddress);
    address.user = user;
    await address.save();

    user.address.push(address);
    await user.save();
  }
  const cart = await cartService.findUserCart(user._id);
  const orderItem = [];

  for (const item of cart.cartItems) {
    const orderItem = new OrderItems({
      price: item.price,
      product: item.product,
      quantity: item.quantity,
      size: item.size,
      userId: item.userId,
      discountprice: item.discountedPrice,
    });
    const createdOrderItem = await orderItem.save();
    await OrderItems.push(createdOrderItem);
  }
  const createdOrder = new Order({
    user,
    OrderItems,
    totalPrice: cart.totalPrice,
    totalDiscountedPrice: cart.totalDiscountedPrice,
    discount: cart.discount,
    totalItem: cart.totalItems,
    shippingAddress: address,
  });
  const savedOrder = await createOrder.save();

  return savedOrder;
}

async function palceOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "PLACED";
  order.paymentDetails.status = "COMPLETED";

  return await order.save();
}

async function confirmedOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "CONFIRMED";

  return await order.save();
}

async function shippOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "SHIPPED";

  return await order.save();
}

async function deliverOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "DELIVERED";

  return await order.save();
}

async function cancelledOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "CANCELLED";

  return await order.save();
}

async function findOrderById(orderId) {
  const order = await Order.findById(orderId)
    .populate("user")
    .populate({ path: "orderItems", populate: { path: "product" } })
    .populate("shippingAddress");

  return order;
}

async function userOrderHistory(userId) {
  try {
    const orders = await Order.find({ user: userId, orderStatus: "PLACED" })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();

    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getAllOrders() {
  return await Order.find()
    .populate({ path: "orderItems", populate: { path: "product" } })
    .lean();
}
async function deleteOrder(orderId){
    const order=await findOrderById(orderId);
    await Order.findByIdAndDelete(order._id)
}

mosule.exports = {
  createOrder,
  palceOrder,
  shippOrder,
  deliverOrder,
  cancelledOrder,
  userOrderHistory,
  getAllOrders,
  deleteOrder,
  confirmedOrder
};
