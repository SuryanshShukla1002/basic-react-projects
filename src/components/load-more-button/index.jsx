import { useEffect } from "react";
import { useState } from "react";
import './styles.css';

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  async function fetchProducts() {
    try {
        setLoading(true)
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json()
      if(result  && result.products && result.products.length) {
        setProducts(result.products)
        setLoading(false)
      }

      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if(loading){
    return <div>Loading Data! please wait</div>
  }
  return (
  <div className="load-more-container">
    <div className='product-container'>
        {
            products && products.length ? products.map(item => <div key={item.id} className='product'>
                <img src={item.thumbnail} alt={item.title}/>
                <p>{item.title}</p>
            </div>) : null
        }
    </div>
    <div>
        <button className='button-container'>LOad more products</button>
    </div>
  </div>

)
}
