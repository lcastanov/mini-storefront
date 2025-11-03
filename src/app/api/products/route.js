export async function GET() {
    const products = [
    // Makeup Products
    {id: 'm-1', name: 'Lipstick', price: 27.00, category: 'Makeup', stock: 24},
    {id: 'm-2', name: 'Mascara', price: 29.00, category: 'Makeup', stock: 30},
    {id: 'm-3', name: 'Eyeshadow Palette', price: 54.00, category: 'Makeup', stock: 19},
    {id: 'm-4', name: 'Concealer', price: 20.00, category: 'Makeup', stock: 12},
    // Skincare Products
    {id: 's-1', name: 'Cleansing Balm', price: 54.00, category: 'Skincare', stock: 20},
    {id: 's-2', name: 'Moisturizer', price: 26.99, category: 'Skincare', stock: 28},
    {id: 's-3', name: 'Eye Cream', price: 54.00, category: 'Skincare', stock: 10},
    {id: 's-4', name: 'Toner', price: 15.99, category: 'Skincare', stock: 14},
    // Hair Products
    {id: 'h-1', name: 'Straightener', price: 239.99, category: 'Hair', stock: 32},
    {id: 'h-2', name: 'Shampoo', price: 34.00, category: 'Hair', stock: 17},
    {id: 'h-3', name: 'Conditioner', price: 17.99, category: 'Hair', stock: 19},
    {id: 'h-4', name: 'Repair Mask', price: 22.00, category: 'Hair', stock: 27}
];
    return Response.json(products);
}