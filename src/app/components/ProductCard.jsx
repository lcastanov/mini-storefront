'use client';

export default function ProductCard({product, addCart}) {
    const outOfStock = product.stock === 0;

    const addClick = () => {
        if (outOfStock == false) {
        addCart(product.id)
    };
};

return (
    <div className="product-card">
        <h3>{product.name}</h3>
        <p className="pice">Price: ${product.price}</p>
        <p className="category">Category: {product.category}</p>
        <p className="stock">{outOfStock ? 'Item is Out of Stock' : `Stock: ${product.stock}`}</p>
        <button disabled={outOfStock} onClick={addClick}>{outOfStock ? 'Item is Out of Stock' : 'Add Item to Cart'}</button>
    </div>
)}