import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function InPersonTraining( ) {


    const [data, setData]=useState([])
    

useEffect(() => {

    const url = "https://fakestoreapi.com/products"
 
    
          fetch(url)
        .then(res=>res.json())
        .then(res=>{

            console.log(res)
            setData(res)

        })

            
},[])



    return (
        <Container>
        <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
        {data.map((product,index) => {
                return(
         <Col key={product.id}>
                <Card className='h-100'  >
                    {product.image && (
                   <Card.Img
                    variant='top'
                    src={product.image ? product.image : ''}
                    alt={product.title}
                />
            )}
            <Card.Body>
                {product.image ? (
                    ''
                ) : (
                    <Card.Title>No Image Available</Card.Title>
                )}
                <Card.Text className='text-muted'>{product.title}</Card.Text>
                <Card.Text className=''>{product.price}$</Card.Text>
            </Card.Body>
            <Card.Footer>
               <Button onClick={() => (product.id)} variant='outline-dark'>
                        add to cart
                </Button>
            </Card.Footer>
        </Card>
                       </Col>
                )
            })}
            </Row>
            
            </Container>
        
        
        
    );
}

export default InPersonTraining;