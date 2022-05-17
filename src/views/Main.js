import axios from 'axios';
import React, {useEffect,useState} from 'react';

import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';


const Main= () => {
    const[products,setProduct]=useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/product')
        .then(res=>setProduct(res.data))
        .catch(err=>console.log('Error: ', err))
    },[])

    const removeFromDom = productId => {
        setProduct(products.filter(p => p._id !== productId));
    }

    return (
        <>
        <ProductForm/>
        <ProductList products={products} removeFromDom={removeFromDom}/>
        </>
    )
}

export default Main;