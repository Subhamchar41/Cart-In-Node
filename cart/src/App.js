import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [cart, sertCart] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:5000/api/addtocart').then(({data}) => {
      console.log("All Cart items"  , data.savedData.data?.length );
      sertCart( data.savedData.data)
    }).catch(err => {
      console.log("Error"  , err);
    })
  },[])
  
const [products] = useState([
  {
     name: "Shirt",
     price: "450",
     img: "https://rukminim1.flixcart.com/image/800/960/kf1fo280hlty2aw-0/t-shirt/b/o/e/-original-imafdfvvzycg62dp.jpeg?q=50"
  },
  {
    name: "Shirt",
    price: "430",
    img: "https://rukminim1.flixcart.com/image/800/960/ke4kjgw0-0/t-shirt/r/w/x/s-101-try-this-original-imafuvgbqkvhtmwp.jpeg?q=50"
  },
  {
    name: "Shirt",
    price: "430",
    img: "https://rukminim1.flixcart.com/image/800/960/ke4kjgw0-0/t-shirt/r/w/x/s-101-try-this-original-imafuvgbqkvhtmwp.jpeg?q=50"
  },
  {
    name: "Shirt",
    price: "430",
    img: "https://rukminim1.flixcart.com/image/800/960/ke4kjgw0-0/t-shirt/r/w/x/s-101-try-this-original-imafuvgbqkvhtmwp.jpeg?q=50"
  }
])

const addToCart = (product) =>{

  sertCart([...cart,product]);

  let temp  =cart;
  temp.push(product)

  axios.post('http://localhost:5000/api/addtocart' ,  {
    data : temp
  }).then(result => {
    console.log("Result"  , result );
  }).catch(err => {
    console.log("Error"  , err);
  })

};

const handleCart =()=> {
  axios.get('http://localhost:5000/api/addtocart').then(result => {
    console.log("All Cart items"  , result );
  }).catch(err => {
    console.log("Error"  , err);
  })
}

  return (
   <div className="App">
     <h1>Products</h1>
     <header>
       <button onClick={handleCart}>Go To Cart({cart.length})</button>
     </header>
     <div className="products">
     {products.map((product, idx) =>(
       <div className="product" key={idx}>
        <img src={product.img} alt={product.name}></img>
        <h3>{product.name}</h3>
        <h2>{product.price}</h2>
        <button onClick={()=>addToCart(product)} >Add To Cart</button>
       </div>
       ))}
       </div>
   </div>
  );
}

export default App;
