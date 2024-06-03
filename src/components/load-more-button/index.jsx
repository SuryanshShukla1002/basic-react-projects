import { useEffect } from 'react';
import { useState } from 'react';



export default function LoadMoreData(){

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    async function fetchProducts() {
        try {
            const response = await fetch()
        } catch (e) {
            console.log(e);  
        }
    }


    useEffect(() => {
        fetchProducts()
    })
    return (
        <div className='container'>
        
        </div>
    )
}