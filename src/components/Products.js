import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {add} from "../store/cartSlice"

const Products = () => {

    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async() => {
            const res = await fetch("https://fakestoreapi.com/products");

            const data = await res.json(); //converted to json to get the data
            // console.log(data);
            setProducts(data);
        }
        fetchProducts();
    }, [])

    const handleAdd = (product) => {
        dispatch(add(product));
    }

  return (
    <div className='productsWrapper'>
        {
            products.map(product =>(
                <div className='card' key={product.id}>
                    <img src={product.image} alt='' />

                    <h4>{product.title}</h4>

                    <h3>$ {product.price}</h3>

                    <button onClick={() => handleAdd(product)} className='btn'>Add to Cart</button>
                </div>
            ))
        }
        
    </div>
  )
}

export default Products