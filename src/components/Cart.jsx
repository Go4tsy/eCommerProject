import React, { useEffect } from 'react';


const Cart = () => {




useEffect(() => {


    const url = 'https://fakestoreapi.com/carts'
    
    
        fetch(url)
        .then(res=>res.json())
        .then(json=>console.log(json))


}, [])



    return (
        <>
        
        </>
    );
};

export default Cart;