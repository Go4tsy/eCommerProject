import React from "react";

function Search( { data })  {
    console.log(data)


// if(!data.category) {
//     return (
//         <p>Can't be found.</p>

//     )
     
// }


return (
    // <Container>
    // <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
    // {data.map((product,index) => {
    //         return(
    //  <Col key={product.id}>
    //         <Card className='h-100'  >
    //             {product.image && (
    //            <Card.Img
    //             variant='top'
    //             src={product.image ? product.image : ''}
    //             alt={product.title}
    //         />
    //     )}
    //     <Card.Body>
    //         {product.image ? (
    //             ''
    //         ) : (
    //             <Card.Title>No Image Available</Card.Title>
    //         )}
    //         <Card.Text className='text-muted'>{product.title}</Card.Text>
    //         <Card.Text className=''>{product.price}$</Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //        <Button onClick={() => (product.id)} variant='outline-dark'>
    //                 add to cart
    //         </Button>
    //     </Card.Footer>
    // </Card>
    //                </Col>
    //         )
    //     })}
    //     </Row>
        
    //     </Container>
  



         <div> 

            {data && data.map((product) => {
                console.log(product)                

                 return (
                    <div key={product.id}>
                        
                        {data[0] ? 
                        <img src={product.image} alt={product.title}/>
                        :
                        'no product' }  

                    </div>

                )
             })}
         </div>
   
    
);
}

export default Search;