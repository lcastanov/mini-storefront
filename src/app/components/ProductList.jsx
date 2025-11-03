'use client';

import ProductCard from "./ProductCard";

export default function ProductList({products, addCart}) {
    return (
        <div className="product-list">
            <h2>Product List</h2>
            <div>
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} addCart={addCart}/>
                ))}
            </div>
        </div>
    );
}