'use client';

export default function CartSummary({cart, decrementCart, resetCart}) {
    const itemTotal = cart.reduce((sum, item) => sum + item.count, 0)
    const priceTotal = cart.reduce((sum, item) => sum + (item.price * item.count), 0)
}