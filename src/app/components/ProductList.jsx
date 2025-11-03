'use client';

import ProductCard from "./ProductCard";

export default function ProductList({products, addCart}) {
    return (
        <div className="product-list">
            <h2>Product List</h2>
            <ul>
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} addCart={addCart}/>
                ))};
            </ul>
        </div>
    );
}