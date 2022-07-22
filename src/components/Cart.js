import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Cart = () => {




useEffect(() => {


    const url = 'https://fakestoreapi.com/carts'
    
    
        fetch(url)
        .then(res=>res.json())
        .then(json=>console.log(json))


}, [])



    return (
        <>

<header className='cart-container'>
    <h1 className='cart-top'>Your cart</h1>
    <p> <a href='/'>Continue shopping</a></p>
    <h2 className='cart-top'>Product</h2>
    <h2 className='cart-top'>Quantity</h2>
    <h2 className='cart-top'>Subtotal</h2>

    </header>
    <main>
    <Row xs={1} md={2} className="g-4" > 
      {Array.from({ length: 4 }).map((cart) => (
        <Col >
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
               test
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </main>
</>
        
    );
};

export default Cart;