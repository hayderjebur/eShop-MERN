import React, { useState, useEffect } from 'react';
import { Link, Router } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Image, Container } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import Meta from '../components/Meta';
import { listProducts } from '../actions/productActions';
import ProductCarousel from '../components/ProductCarousel';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {/* {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )} */}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          {/* <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                <Product product={product} />
              </Col>
            ))}
          </Row> */}
          <Link to='/' className='btn btn-light'>
            Go Back
          </Link>
          <Row style={{ margin: '2rem' }}>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                <Image
                  style={{ margin: '0.5rem' }}
                  src={product.image}
                  // src='./images/1.jpg'
                  thumbnail
                  className='h-100 w-100'
                />
              </Col>
            ))}
          </Row>
          <div style={{ marginLeft: '3rem' }}>
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ''}
            />
          </div>
        </>
      )}
    </>
  );
};

export default HomeScreen;
