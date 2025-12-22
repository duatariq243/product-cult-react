import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300">
      
      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          {product.title}
        </h3>

        <p className="text-gray-500 text-sm mb-2">
          {product.subtitle}
        </p>

        <p className="text-orange-500 font-semibold text-sm mb-3">
          {product.status}
        </p>

        <p className="text-gray-700 text-sm mb-5 leading-relaxed">
          {product.description}
        </p>

        <Link to={`/product/${product.id}`}>
  <button className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-600 transition">
    {product.buttonText}
  </button>
</Link>
      </div>
    </div>
  );
}

export default ProductCard;
