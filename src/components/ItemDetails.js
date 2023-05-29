export const ItemDetails = ({ value, addItem }) => {
  return (
    <div className="card mt-5 mx-auto p-3 container">
      <div className="row ">
        <div className="col-md-6 col-lg-4 mx-auto mb-3">
          <img src={value.image} alt="..." height="300px" width="300px" />
        </div>
        <div className="col-md-8 mx-auto">
          <div className="card-body p-0 ">
            <h2 className="card-title">{value.title}</h2>
            <p className="card-text ">{value.description}</p>
            <p className="card-text cart">Price: {value.price}$</p>

            <button
              onClick={() => addItem(value)}
              className="btn text-white w-50 mainColor added"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
