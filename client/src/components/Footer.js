import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy;{' '}
            <span
              style={{
                fontSize: '1rem',
                textTransform: 'none',
                color: '#4bbf73',
              }}
            >
              Ahmad
            </span>
            Mzeil
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
