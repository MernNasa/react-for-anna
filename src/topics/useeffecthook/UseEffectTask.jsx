import React, { useEffect, useState } from 'react'

const UseEffectTask = () => {
    const[products,setProducts]=useState([])
    const[deleteProduct,setDeleteProduct]=useState(0)
    const f_data=async () => {
        console.log("hii")
        const response=await fetch("https://fakestoreapi.com/products")
        const res=await response.json()
        setTimeout(()=>{
            setProducts(res)
        },3000)
    }

    useEffect(()=>{
        f_data()
    },[products])

   
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    const product = await fetch("https://fakestoreapi.com/products");
    const final = await product.json();
    console.log(final);
    setProduct(final);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  console.log(product)

  return (
    <div className='mainbox'>

        
    {products.length === 0 ? (
        <h1>Loading products.....</h1>
      ) : (
        products.map((user, index) => {
          return (
            <div key={index}>
              <div className="card">
                <div className="img">
                  <img src={user.image} alt="" />
                </div>
                <div className="textbox">
                  <h1>Name :{user.title.slice(0,10)}</h1>
                  <h4>Price :{user.price}</h4>
                  <button onClick={()=>setProducts([])}>Delete Item</button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  )
}

export default UseEffectTask