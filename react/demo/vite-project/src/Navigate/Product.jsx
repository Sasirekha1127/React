import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import chainImg from './assets/chains.jpg';
import earing from './assets/earing.jpg';
import bracelet from './assets/bracelet.jpg';

const products = [
  { id: 1, name: "Chain", image: chainImg },
  { id: 2, name: "Earing", image: earing },
  { id: 3, name: "Bracelet", image: bracelet },
];

function Product() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-5 m-5">
      {products.map((item) => (
        <Card
          key={item.id}
          style={{ width: '18rem', cursor: 'pointer' }}
          className="hover:shadow-lg hover:scale-105 transition-transform duration-300"
          onClick={() => navigate(`/products/${item.id}`)}
        >
          <Card.Img
            variant=""
            src={item.image}
            className='h-48 w-full object-cover'
          />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Product;
