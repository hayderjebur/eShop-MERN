import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{ marginBottom: '2rem', marginRight: '0', paddingRight: '0' }}>
      <Row>
        <Col
          style={{
            padding: '0',
          }}
        >
          <Image
            src='/images/ahmad.jpeg'
            style={{
              width: '100%',
              height: '85vh',
              position: 'relative',
            }}
          />
        </Col>

        <Col
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>
            <span
              style={{
                textTransform: 'none',
                color: '#4bbf73',
                fontFamily: 'Dancing Script',
              }}
            >
              Ahmad
            </span>
            <span
              style={{
                textTransform: 'none',
                fontFamily: 'Dancing Script',
              }}
            >
              Mzeil
            </span>
          </h1>
          <p className='fontStyle'>
            Born in Sydney in 1972, Joseph Rolella has exhibited consistently
            for the past twelve years both nationally and internationally.
            Rolella has won several major art prizes including the Australian
            Cricket Art Prize in 2011 for the painting “Cricket at Kandahar”.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{ margin: '1rem', color: '#4bbf73', cursor: 'pointer' }}
            >
              <a href='https://www.facebook.com/ahmad.mzeil.31' target='_blank'>
                <i class='fab fa-facebook fa-3x '></i>
              </a>
            </div>
            <div
              style={{ margin: '1rem', color: '#4bbf73', cursor: 'pointer' }}
            >
              <a href='mailto:ahmadmzeil71@gmail.com' target='_blank'>
                <i class='fab fa-google-plus fa-3x '></i>
              </a>
            </div>
            <div
              style={{ margin: '1rem', color: '#4bbf73', cursor: 'pointer' }}
            >
              <i class='fab fa-instagram fa-3x'></i>
            </div>
          </div>
          <Link to={`/page/1`}>
            {' '}
            <button size='lg' className='btnn'>
              Gallery
            </button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default LandingPage;
