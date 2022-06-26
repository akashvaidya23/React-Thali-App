import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import items from "../../common/menu.json";
import Dish from "../Dish/Dish";
const Menu = () => {
  const count = useSelector((state) => state.myItems.dishes);
  const length = count.length;
  const item = items.map((value, index) => {
    return (
      <Dish
        name={value.name}
        price={value.price}
        img={value.image}
        key={index}
        number={index + 1}
        no={index}
      />
    );
  });
  return (
    <>
      <h5>All Menu</h5>
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        {item}
      </div>
      <div>
        {length > 1 && (
          <button className="btn btn-dark">
            <Link
              to="/orders"
              style={{
                textDecoration: "none",
                marginLeft: "10px",
                color: "whitesmoke",
              }}
            >
              See Your Thali
            </Link>
          </button>
        )}
      </div>
    </>
  );
};

export default Menu;
