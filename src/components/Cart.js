import { GoTrashcan } from "react-icons/go";

export const Cart = ({ items, addItem, decrement, deleteItem, clearAll }) => {
  let qty = items.reduce((x, y) => x + y.qty, 0);
  const renderedItems = items.map((item) => {
    let itemTotalPrice = (item.qty * item.price).toFixed(2);
    return (
      <div
        key={item.id}
        className="row align-items-center justify-content-between mb-4 border py-2"
      >
        <div className="col-xs-12 text-center col-lg-3 p-0">
          <img src={item.image} alt=".." width="200" height="200" />
          <p className="text-center my-3">Title:{item.title}</p>
        </div>
        <div className="d-flex align-items-center col-md-4 mx-md-auto col-lg-3 w-lg-25">
          <button className="btn btn-dark" onClick={() => addItem(item)}>
            +
          </button>
          <input
            className="form-control text-center"
            type="number"
            value={item.qty}
            readOnly
          />
          <button className="btn btn-dark" onClick={() => decrement(item)}>
            -
          </button>
        </div>
        <p className="cart m-0 mx-auto">Price: {itemTotalPrice} $</p>
        <button
          className="btn btn-danger col-md-4 mx-md-auto col-lg-2"
          onClick={() => deleteItem(item)}
        >
          <GoTrashcan className="mb-1" /> Delete
        </button>
      </div>
    );
  });
  let totalPrice = items.reduce((x, y) => x + y.qty * y.price, 0).toFixed(2);
  return (
    <div className="container mt-5 mb-5">
      <h1>Shopping cart</h1>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <p className="m-0">
          You have
          <label className="text-danger mx-1 font-weight-bold">{qty}</label>
          item in your Card
        </p>
        <button className="btn btn-danger" onClick={() => clearAll()}>
          Clear Shopping Card
        </button>
      </div>
      <div>{renderedItems}</div>
      {items.length === 0 ? (
        <h5>Card Is Empty</h5>
      ) : (
        <div className="d-flex justify-content-end align-items-center">
          <p className="m-4 border p-2 font-weight-bold">Total:{totalPrice}</p>
          <button className="btn btn-success">Order Now</button>
        </div>
      )}
    </div>
  );
};
