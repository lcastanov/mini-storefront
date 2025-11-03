'use client';

import {useEffect, useState} from 'react';
import ProductList from './ProductList';

export default function Catalog () {
    const [products, setProducts] = useState([]);
    const [status, setStatus] = useState('loading');
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('/api/products')
        .then(r => r.json())
        .then(setProducts)
        .catch(err => {
            console.error(err);
            setStatus('error')});
    }, []);
}
