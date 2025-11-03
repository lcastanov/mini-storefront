'use client';

import React, {useEffect, useState} from 'react';
import ProductList from './ProductList';
import CartSummary from './CartSummary';
import PriceFilter from './PriceFilter';
import StatusMessage from './StatusMessage';

export default function Catalog () {
    const [products, setProducts] = useState([]);
    const [status, setStatus] = useState('loading');
    const [cart, setCart] = useState([]);
    const [category, setCategory] = useState('');
    const [priceFilter, setPriceFilter] = useState('')
    const [message, setMessage] = useState('loading');

    useEffect(() => {
        fetch('/api/products')
        .then(r => r.json())
        .then(data => {
            setProducts(data)
            setStatus('success')})
        .catch(err => {
            console.error(err);
            setStatus('error')});
    }, []);

    const addCart = (id) => {
        setCart(prev => [...prev, id])
        setProducts(prev => prev.map(p => p.id))
    }

    return (
        <div>
            <h1>Beauty Boutique Mini-StoreFront</h1>
            <CategoryFilter
                products={products}
                currentCategory={category}
                setCategory={setCategory}/>
            <PriceFilter
                priceFilter={priceFilter}
                setPriceFilter={setPriceFilter}/>
            <CartSummary
                products={products}
                cart={cart}
                setCart={setCart}/>
            <StatusMessage
                message={message ==== 'Success' && }/>
        </div>
    )

}

