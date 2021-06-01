import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Rating from './Rating';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  // const addToCartHandler = () => {
  //   history.push(`/cart/${match.params.id}?qty=${qty}`);
  // };
  return (
    <Card
      className='m-2 p-2 rounded'
      style={{ minHeight: '29rem', position: 'relative' }}
    >
      <Link to={`/product/${product._id}`}>
        {new Date(product.createdAt).getDate() <= 20 && (
          <Badge
            pill
            variant='success mr-2 p-2'
            style={{ position: 'absolute', top: '2rem' }}
          >
            New
          </Badge>
        )}
        <Card.Img src={product.image} variant='top' />
      </Link>
      <div
        className='x'
        // onClick={(e) => {
        //   dispatch(addToCart(product._id, 1));
        // }}
      >
        <i className='fas fa-shopping-cart' style={{ color: 'white' }}>
          {' '}
          Add to cart
        </i>
      </div>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
