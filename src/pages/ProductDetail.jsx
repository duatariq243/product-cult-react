import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id.toString() === id);

  if (!product) {
    return <h2 className="text-center mt-20">Product not found</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-cover rounded-xl mb-8"
      />

      <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-500 mb-4">{product.subtitle}</p>

      <p className="text-orange-500 font-semibold mb-6">
        {product.status}
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        {product.description}
      </p>
    </div>
  );
}

export default ProductDetail;
