import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Message from './Message';
import { listTopProducts } from '../actions/productActions';
import Figure from 'react-bootstrap/Figure';

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel fade pause='hover' className='bg-dark'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          {/* <Link to={`/product/${product._id}`}> */}
          <Image
            src={product.image}
            //style={{ borderRadius: '1px' }}
            alt={product.name}
            fluid
            className='h-30 w-30'
            rounded
          />

          {/* <Carousel.Caption className='carousel-caption'>
            <h2>
              {product.name} (${product.price})
            </h2>
          </Carousel.Caption> */}
          {/* </Link> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
