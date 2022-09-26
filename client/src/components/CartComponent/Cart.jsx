import React, { useState, useEffect, useContext } from "react";
import style from "../styles/Ticket.module.css";
import css from "../styles/Cart.module.css";
import { Link, useHistory } from "react-router-dom";
import { CartContext } from "./CartContext";
import { Button, IconButton, Card } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteFromCart, getUsers } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2"

function Cart() {
  const services = useSelector((state) => state.services);
  // console.log(airlines)
  const currentUser=useSelector(state=>state.currentUser)
  console.log("current user from cart",currentUser)
  const history = useHistory();
  const dispatch = useDispatch();

  const { products, addProductToCart, substractdProductFromCart, deleteProductFromCart } =
    useContext(CartContext);
  const [subTotal, setSubTotal] = useState(0);

  function handleDelete(id) {
    // console.log(id)
    let productToDelete = products.filter((p) => p.id === id);
    setSubTotal(
      subTotal - productToDelete[0].amount * productToDelete[0].price
    );
    dispatch(deleteFromCart(id));
    deleteProductFromCart(id);
    toast.error("Deleted from cart", {
      icon: "❌",
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function handleSum(id) {
    substractdProductFromCart(id, "suma");
  }

  function handleRest(id) {
    substractdProductFromCart(id, "resta");
  }

  useEffect(() => {
    if (products.length > 0) {
      setSubTotal(
        products
          .map((p) => p.price * p.amount)
          .reduce((previousValue, currentValue) => previousValue + currentValue)
      );
    }
    dispatch(getUsers)
  }, [products]);

  function handleCheckout() {
    if(currentUser.length){
      if (currentUser[0]) {
        history.push("/payment");
      }
    }else{
     
        Swal.fire({
          icon: "question",
          title: "Oops...",
          text: "You need to be logged to buy",
          confirmButtonColor: "#10408F",
        });
        history.push("/register");
      }

  }

  return (
    // <div className={css.cart_container}>
    //   <Link to="/">
    //     <Button variant="outlined" size="large">
    //       Keep shopping
    //     </Button>
    //   </Link>
    //   {products.length ? (
    //     products.map((c) => {
    //       console.log("esto es products en cart", products);
    //       console.log("esto es c de products en cart", c);
    //       return (
    //         <div className={css.card} key={c.id}>
    //           <li
    //             className={style.cards_item}
    //           >
    //             <div className={style.card}>
    //               <div className="card_image">
    //                 <img src={c.logo} alt="#" width="100px" height="100px" />
    //               </div>
    //               <div className={style.card_content}>
    //                 {services.map((airline) => {
    //                   if (c.airlineId === airline.id) {
    //                     return (
    //                       <h2
    //                         className={
    //                           style.card_title
    //                         }
    //                       >
    //                         {airline.name}
    //                       </h2>
    //                     );
    //                   }
    //                 })}

    //                 <h5
    //                   className={
    //                     style.card_desinfo
    //                   }
    //                 >
    //                   Origin: {c.subtipos} | Destination: {c.suptipos}{" "}
    //                 </h5>
    //                 <p
    //                   className={
    //                     style.card_text
    //                   }
    //                 >
    //                   {c.subtipos} / {c.subtipos}
    //                 </p>
    //               </div>
    //               <div>
    //                 <p
    //                   className={
    //                     style.card_text
    //                   }
    //                 >
    //                   ${c.price}
    //                 </p>
    //               </div>
    //               <IconButton size="large" onClick={() => handleDelete(c.id)}>
    //                 <DeleteIcon color="primary" />
    //               </IconButton>
    //             </div>
    //           </li>
    //           <div className={css.amountBtn}>
    //             <Button onClick={() => handleSum(c.id)}>
    //               <AddIcon />
    //             </Button>
    //             <h5
    //               className={
    //                 css.amount_display
    //               }
    //             >
    //               {c.amount}
    //             </h5>
    //             <Button onClick={() => handleRest(c.id)}>
    //               <RemoveIcon />
    //             </Button>
    //           </div>
    //         </div>
    //       );
    //     })
    //   ) : (
    //     <div className={css.empty_cart}>
    //       <h1 className={css.title}>
    //         Your cart is empty
    //       </h1>
    //       {/* <img className={css.imgEmpty} src={vacio} alt="#" /> */}
    //       <h1 className={css.title}>
    //         Add tickets to your cart!
    //       </h1>
    //     </div>
    //   )}

    //   {subTotal !== 0 && products.length && (
    //     <div className={css.containerAll}>
    //       <Card
    //         className={
    //           css.payment_container
    //         }
    //       >
    //         <div
    //           className={css.card_content}
    //         >
    //           <h1
    //             className={
    //               css.title_summary
    //             }
    //           >
    //             Order Summary
    //           </h1>

    //           <h4
    //             className={css.text_summary}
    //           >
    //             Subtotal
    //           </h4>
    //           {subTotal !== 0 && (
    //             <span
    //               className={
    //                 css.text_summary
    //               }
    //             >
    //               ${subTotal}
    //             </span>
    //           )}

    //           <h4
    //             className={css.text_summary}
    //           >
    //             Fees
    //           </h4>
    //           {subTotal !== 0 && (
    //             <span
    //               className={
    //                 css.text_summary
    //               }
    //             >
    //               ${((subTotal * 0.1) / 100).toFixed(2)}
    //             </span>
    //           )}

    //           <h4
    //             className={css.text_summary}
    //           >
    //             Total
    //           </h4>
    //           {subTotal !== 0 && (
    //             <span
    //               className={
    //                 css.text_summary
    //               }
    //             >
    //               ${(subTotal + (subTotal * 0.1) / 100).toFixed(2)}
    //             </span>
    //           )}

    //           <Button
    //             variant="contained"
    //             color="success"
    //             onClick={() => handleCheckout()}
    //           >
    //             Proceed to Checkout
    //           </Button>
    //         </div>
    //       </Card>
    //     </div>
    //   )}
    // </div>
    <div>Hola</div>
  );
}

export default Cart;
