import { Fragment } from "react";
import { Category } from "./Category";
import { ProductsShow } from "./ProductsShow";

export const ProductsList = ({
  products,
  addItem,
  getItemByID,
  getProductsByCat,
}) => {
  const handleClick = (product) => {
    getItemByID(product.id);
  };

  const renderedProducts = products.map((product) => {
    return (
      <Fragment key={product.id}>
        <ProductsShow
          product={product}
          handleClick={handleClick}
          addItem={addItem}
        />
      </Fragment>
    );
  });
  return (
    <div className="container">
      <Category getProductsByCat={getProductsByCat} />
      <div className="d-flex justify-content-between flex-wrap">
        {renderedProducts}
      </div>
    </div>
  );
};
