import { useSelector } from "react-redux";
import styles from "../Checkout/checkout.module.css";

const Checkout = () => {
  let total = 0;
  const menus = useSelector((state) => state.myItems.dishes);
  const finalMenu = menus.map((value, index) => {
    total = total + value.item.price;
    return (
      <>
        <tr>
          <td style={{ border: "1px solid black" }}>{index + 1}</td>
          <td style={{ border: "1px solid black" }}>{value.item.name}</td>
          <td style={{ border: "1px solid black" }}>{value.item.price}</td>
        </tr>
      </>
    );
  });

  return (
    <>
      <div>
        <h4>Your Items</h4>
      </div>
      <div>
        <table className="table table-striped table-bordered border-dark center">
          <tr>
            <th className={styles.th} style={{ border: "1px solid black" }}>
              Sr.No
            </th>
            <th style={{ border: "1px solid black" }}>Name</th>
            <th style={{ border: "1px solid black" }}>Amount</th>
          </tr>
          {finalMenu}
          <tr>
            <th style={{ fontWeight: "bold", border: "1px solid black" }}>
              Total
            </th>
            <th style={{ border: "1px solid black" }}></th>
            <th style={{ fontWeight: "bold", border: "1px solid black" }}>
              {total}
            </th>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Checkout;
