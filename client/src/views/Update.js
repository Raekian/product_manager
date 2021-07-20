import {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const Update = (props) => {
    const [product, setProduct] = useState({})
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props._id)
            .then(res => {setProduct(res.data); console.log(res)})
    }, [props._id])

    const onSubmitHandler = e => {

        e.preventDefault();
        //make a post request to create a new person
        axios.put('http://localhost:8000/api/update/'+ props._id, {
            title,
            price,
            description
        })
        .then(res=>{
            console.log(res)
            navigate("/")
        })
            .catch(err=>console.log(err))
    }

        const onDelete =(e)=>{
            console.log("delete something")
            axios.delete("http://localhost:8000/api/delete/"+props._id)
            .then(res=>{
                console.log(res)
                navigate("/")
            })
        }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder={product.title} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} placeholder={product.price} value={price}/>
            </p>
            <p>
                <label>Desription</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} placeholder={product.description} value={description}/>
            </p>
            <input type="submit"/>
            <button onClick = {onDelete}>Delete</button>
        </form>
        </div>
    );
};

Update.propTypes = {};

export default Update;