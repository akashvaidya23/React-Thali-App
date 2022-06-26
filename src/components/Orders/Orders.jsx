import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/MyOrder/MyOrderSlice";

const Orders = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.myItems.dishes);
  const totalItems = items.length;
  let price = 0;
  const myItems = items.map((value, index) => {
    const removeHandler = () => {
      dispatch(removeFromCart(index));
    };
    price = value.item.price + price;
    return (
      <>
        <div
          className="card"
          style={{
            width: "18rem",
            margin: "10px",
            backgroundColor: "silver",
          }}
          key={index}
        >
          <div className="card-body">
            <h5 className="card-title">{value.item.name}</h5>
            <img
              src={value.item.image}
              alt="img"
              width="150px"
              height="150px"
            />
            <p className="card-text">Rs.{value.item.price}</p>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-danger"
                onClick={removeHandler}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <h4>Your Orders</h4>
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        {myItems}
      </div>
      <div>
        <p>Total Items : {totalItems}</p>
        <p>Total Amount : {price}</p>
      </div>
      <div>
        <button className="btn btn-dark">
          <Link
            to="/checkout"
            style={{
              textDecoration: "none",
              marginLeft: "10px",
              color: "whitesmoke",
            }}
          >
            Place Order
          </Link>
        </button>
      </div>
    </>
  );
};

export default Orders;
