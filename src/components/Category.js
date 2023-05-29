export const Category = ({ getProductsByCat }) => {
  const updateSelection = (e) => {
    getProductsByCat(e.target.value);
  };
  return (
    <form className="input-group mt-4 w-25 ">
      <select className="custom-select text-primary" onChange={(e) => updateSelection(e)}>
        <option value="none">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelry</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
    </form>
  );
};
