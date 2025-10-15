import React from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import chainImg from './assets/chains.jpg';
import earing from './assets/earing.jpg';
import bracelet from './assets/bracelet.jpg';

const products = [
  { id: 1, name: "Chain", price: 500,quantity:"3",image: chainImg },
  { id: 2, name: "Earing", price: 600,quantity:"5",image: earing },
  { id: 3, name: "Bracelet", price: 700,quantity:"7", image: bracelet },
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));


  return (
    <div className="flex flex-wrap justify-center items-start gap-10 m-5">
      {/* Image */}
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-96 h-96 object-cover rounded-lg"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col justify-start gap-4">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-xl font-semibold">Price: {product.price}</p>
        <p className="text-md">Quantity:{product.quantity} </p>
        <Button variant="primary" className="w-40">Add to Cart</Button>
      </div>
    </div>
  );
}

export default ProductDetails;
