import { useParams } from "react-router-dom";
import { dataBase } from "../dataBase/dataBase";

function SingleProduct() {
  const { id } = useParams();
  const product = dataBase.find((data) => data.id === Number(id));
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.brand}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default SingleProduct;