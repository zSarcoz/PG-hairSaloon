import { createContext, useEffect, useState } from "react";
import { addToCart} from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../redux/store/index";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // console.log("children of cartContext",children)
  const [pay, setPay] = useState(false);
  const userA = useSelector((state) => state.currentUserLocalStorage);
  console.log("userA", userA);
  const [products, setProducts] = useState(() => {
    try {
      const productosLocalStorage = localStorage.getItem("cartProducts");
      return productosLocalStorage ? JSON.parse(productosLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });
  const [user, setUser] = useState(() => {
    try {
      const userLocalStorage = localStorage.getItem("currentUserLocalStorage");
      return userLocalStorage ? JSON.parse(userLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    // console.log("sera este el problema",products)
    localStorage.setItem("currentUserLocalStorage", JSON.stringify(user));
    if (!pay) localStorage.setItem("cartProducts", JSON.stringify(products));
    setPay(false);
    if (pay && products !== []) {
      setTimeout(() => {
        // setUser([]);
        setProducts([]);
      }, "3000");
    }
    console.log("user useState", user);
    console.log("products", products);
    // else localStorage.setItem("cartProducts", JSON.stringify([]))

    // console.log(products)
    // const cartProductArray = localStorage.getItem("cartProducts");
  }, [products, pay, user]);

  const addProductToCart = async ({
    id,
    name,
    subtipos,
    price,
    sexo,
    image,
  }) => {
    // console.log("tickets", tickets);
    //console.log("esto es el products", products); //
    let inCart = Array.isArray(products) && products.filter((p) => p.id === id);
    console.log("incart", inCart);

    if (inCart.length > 0) {
      setProducts(
        products.map((p) => {
          if (p.id === id) {
            if (p.amount) {
              return { ...p, amount: p.amount + 1 };
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text:
                  "You can't buy more tickets, there's not enough in stock " +
                  p.amount,
              });
              return {
                ...p,
              };
            }
          } else
            return {
              ...p,
            };
        })
      );
    } else {
      setProducts([
        ...products,
        {
          id,
          name,
          subtipos,
          price,
          sexo,
          image,
          amount: 1,
        },
      ]);
      await store.dispatch(
        addToCart({
          id,
          name,
          subtipos,
          price,
          sexo,
          image,
          amount: 1,
        })
      );
    }
  };

  function substractdProductFromCart(id, operacion) {
    // let inCart = products && products.filter((p) => p.id === id);
    // p.id === id

    setProducts(
      products.map((p) => {
        if (p.id === id && p.amount > 1 && operacion === "resta") {
          return {
            ...p,
            amount: p.amount - 1,
          };
        } else if (p.id === id && operacion === "suma") {
          if (p.amount) {
            console.log("este es tu amount", p.amount);
            return {
              ...p,
              amount: p.amount + 1,
            };
          } else {
            Swal.fire({
              icon: "error",
              title: "Opps...",
              text: "No stock available",
              confirmButtonColor: "#3085d6",
            });
            return {
              ...p,
            };
          }
        } else {
          return {
            ...p,
          };
        }
      })
    );
    localStorage.removeItem("cartProducts");
  }

  function deleteProductFromCart(id) {
    setProducts(products.filter((p) => p.id !== id));
  }
  const createUser = (userA) => {
    console.log("createUser", userA);
    setUser([...user, {userA}]);
    // store.dispatch(user);
  };
  // const createUser = ({id, name, lastName, direction, phone, cedula, email}) => {
  //   console.log("createUser", userA);
  //   setUser([...user, {id, name, lastName, direction, phone, cedula, email}]);
  //   // store.dispatch(user);
  // };

  return (
    <CartContext.Provider
      value={{
        addProductToCart,
        substractdProductFromCart,
        products,
        setProducts,
        deleteProductFromCart,
        setPay,
        createUser,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
