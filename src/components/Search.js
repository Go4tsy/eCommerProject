import React from "react";

function Search( { data })  {
    console.log(data)

// // function handleChange(event) {
// //     setSearchString(event.target.value);
// //   }

// //   function handleSubmit(event) {
// //     event.preventDefault();
// //     getProducts(searchString);
// //     console.log(getProducts)
// //   }
 
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

                 return (
                    <div key={product.id}>
                        
                        {data[0] ? 
                        <img src={product.image} alt={product.title}/>
                        :
                         "no product found" }  

                    {/* // { <img src={product.image} alt={product.title} /> } */}

                    </div>

                )
             })}
         </div>
   
    
);
}

export default Search;