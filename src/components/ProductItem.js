import React from "react";
import "./ProductItem.css";
import { useDispatch } from "react-redux";
import { addCart } from "../store/actions";

export default function ProductItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div class="ProductItem">
      <img src={item.product_img} alt="μΉν" className="item-img" />
      <div className="item-name">{item.product_name}</div>
      <div className="item-price">{item.price}μ</div>
      <button className="add-cart-btn" onClick={() => dispatch(addCart(item))}>
        <i className="fas fa-plus"></i>
        Cart
      </button>
    </div>
  );
}
