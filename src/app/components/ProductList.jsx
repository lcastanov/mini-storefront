'use client';

export default function ProductList() {
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>{p.name} - ${p.price}</li>
                ))}
            </ul>
        </div>
    );
}