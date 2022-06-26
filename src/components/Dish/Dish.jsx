import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/MyOrder/MyOrderSlice";

const Dish = ({ name, price, img, number }) => {
  const [add, setAdd] = useState(0);
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    setAdd(1);
    const myItem = {
      id: number,
      name: name,
      price: price,
      image: img,
    };
    dispatch(addToCart(myItem));
  };

  return (
    <>
      <div
        className="card"
        style={{
          width: "18rem",
          margin: "10px",
          backgroundColor: "silver",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <input type="hidden" value={number} />
          <img src={img} alt="img" width="150px" height="150px" />
          <p className="card-text">Rs.{price}</p>
          <div className="btn-group">
            {add !== 0 ? (
              <button type="button" className="btn btn-danger">
                <i className="fa-solid fa-minus"></i>
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-success"
                onClick={addToCartHandler}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dish;
