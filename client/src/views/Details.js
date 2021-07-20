import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';


export default (props) => {
    const [product, setProduct] = useState({})
    
    const onDelete =(e)=>{
        console.log("delete something")
        axios.delete("http://localhost:8000/api/delete/"+props._id)
        .then(res=>{
            console.log(res)
            navigate("/")
        })
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props._id)
            .then(res => {setProduct(res.data); console.log(res)})
    }, [props._id])
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Details:{product.details}</p>
            <a href="/">Home</a> |
            <Link to={`/api/update/${product._id}`} >Edit</Link> |
            <button onClick = {onDelete}>Delete</button>
        </div>
    )
}

