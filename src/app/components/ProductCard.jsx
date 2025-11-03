'use client';

export default function ProductCard({product}) {
    const outOfStock = product.stock === 0;

    if (outOfStock == false) {
        console.log();
        
    }
};

return (
    <div className="product-card">
        <h3>{name}</h3>
        <p className="pice">Price: ${product.price}</p>
        <p className="category">Category: {product.category}</p>
        <p className="stock"></p>
        <button disabled={outOfStock}></button>
    </div>
)