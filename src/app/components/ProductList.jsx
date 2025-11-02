'use client';

const products = [
    // Makeup Products
    {id: 'm-1', name: 'Lipstick', price: 27.00, category: 'Makeup', stock: 24},
    {id: 'm-2', name: 'Mascara', price: 29.00, category: 'Makeup', stock: 30},
    {id: 'm-3', name: 'Eyeshadow Palette', price: 54.00, category: 'Makeup', stock: 19},
    {id: 'm-4', name: 'Concealer', price: 20.00, category: 'Makeup', stock: 12},
    {id: 'm-5', name: 'Blush', price: 26.00, category: 'Makeup', stock: 30},
    {id: 'm-6', name: 'Skin Tint', price: 32.00, category: 'Makeup', stock: 42},
    {id: 'm-7', name: 'Highligher', price: 17.00, category: 'Makeup', stock: 28},
    {id: 'm-8', name: 'Bronzer', price: 21.00, category: 'Makeup', stock: 15},
    // Skincare Products
    {id: 's-1', name: 'Cleansing Balm', price: 54.00, category: 'Skincare', stock: 20},
    {id: 's-2', name: 'Moisturizer', price: 26.99, category: 'Skincare', stock: 28},
    {id: 's-3', name: 'Eye Cream', price: 54.00, category: 'Skincare', stock: 10},
    {id: 's-4', name: 'Toner', price: 15.99, category: 'Skincare', stock: 14},
    {id: 's-5', name: 'Vitamin-C Serum', price: 53.99, category: 'Skincare', stock: 9},
    {id: 's-6', name: 'Face Wash', price: 21.99, category: 'Skincare', stock: 40},
    {id: 's-7', name: 'Sunscreen', price: 38.00, category: 'Skincare', stock: 35},
    {id: 's-8', name: 'Chemical Exfoliator', price: 29.99, category: 'Skincare', stock: 11},
    // Hair Products
    {id: 'h-1', name: 'Straightener', price: 239.99, category: 'Hair', stock: 32},
    {id: 'h-2', name: 'Shampoo', price: 34.00, category: 'Hair', stock: 17},
    {id: 'h-3', name: 'Conditioner', price: 17.99, category: 'Hair', stock: 19},
    {id: 'h-4', name: 'Repair Mask', price: 22.00, category: 'Hair', stock: 27},
    {id: 'h-5', name: 'Curling Iron', price: 163.00, category: 'Hair', stock: 6},
    {id: 'h-6', name: 'Dryer', price: 249.99, category: 'Hair', stock: 21},
    {id: 'h-7', name: 'Heat Protectant', price: 30.00, category: 'Hair', stock: 28},
    {id: 'h-8', name: 'Round Brush', price: 20.00, category: 'Hair', stock: 33},
];


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