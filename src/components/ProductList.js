import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';



const ProductList= (props)=>{
    const {removeFromDom}= props;
    const navigate=useNavigate();

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then(res => {
                removeFromDom(productId);
                navigate('/product',{replace:true})
            })
            .catch(err => console.error(err));
    }


    return(
        <div>
            {props.products.map((product) =>{
                return (
                <div key={product._id}>
                    <Link to={`/product/${product._id}`}>{product.title}</Link> &nbsp;&nbsp;
                    <Link to={`/product/${product._id}/edit`}>Edit</Link>&nbsp;&nbsp;
                    <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>


                </div>
                )}
            )}
        </div>
    )
}

export default ProductList;