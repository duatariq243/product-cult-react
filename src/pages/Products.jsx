import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Products() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-8">Products</h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Products;
