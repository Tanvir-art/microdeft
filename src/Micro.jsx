import React, { useEffect, useState } from 'react'

const Micro = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getProducts();
    }, [])
    const getProducts= async()=>{
        let result = await fetch("https://dummyjson.com/products");
        result = await result.json();
        setProducts(result);

    }
    console.log(products)
  return (
    <>
    {
        products.map(item=>{ 
            
            return(
                <ul>
                    <li>{item.id}</li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            )
        }) 
    }
    </>
  )
}

export default Micro
