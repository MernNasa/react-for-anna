import React, { useState } from "react";

const UseStateTask3 = () => {
  const [products, setProducts] = useState([]);
  const fdata = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data)
    setProducts(data);
  };
  return (
    <div>
         <button onClick={fdata}>Fetch Data</button>
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
                </div>
              </div>
            </div>
          );
        })
      )}
     
    </div>
  );
};

export default UseStateTask3;
