import React from 'react';
import  {useState, useEffect} from 'react'

const Product = () => {

    const [data, setData] = useState([]);
    const [filter,setFilter] = useState(data);
    const [loading, setlLoading] = useState(false);
    let componentMounted = true



    useEffect(() => {
        const getProduct = async () => {
            setlLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted) {
                setData(await response.clone().json())
                setFilter(await response.json());
                setlLoading(false)
                console.log(filter)
            }
            return () => {
                componentMounted = false
            }

        }
        getProduct()
    }, [])


    const Loading = () => {
        return (
            <>
                Loading.....
            </>
        )
    }

const ShowProduct = () => {
    return (
        <div className='buttons'>
            <button className='btn btn-outline-dark'>All</button>
            <button className='btn btn-outline-dark'>All2</button>

        </div>

    )
}
    

    return (
        <div>
            <div className="container my-5 py-5" >
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'> Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProduct/>}
                </div>
            </div>
        </div>
    );
};

export default Product;