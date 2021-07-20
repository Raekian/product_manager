import React from 'react'
import axios from 'axios';
import{ Link } from '@reach/router';
export default props => {
    return (
        <div>
            <h1>Products</h1>
            <div class="container">
            {props.product.map((item, idx)=>{
                return <Link to={`/product/${item._id}`}>{item.title}</Link>
            })}
            </div>
        </div>
    )
}

