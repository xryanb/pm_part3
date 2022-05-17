import React,{useEffect,useState} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';



const Results = (props) => {
    const[product,setProduct] = useState(null);
    const {id}=useParams();

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res=>{
            console.log(res.data)
            setProduct(res.data);
        })
        .catch(err=>console.log(err))
    },[id])


    return (
        product ?
    <>
        <h1>Title: {product.title}</h1>
        <p>Price: {product.price}</p>
        <p>Description:{product.description}</p>
    </> : <h1>LOADING....</h1> 
    )
}

export default Results;