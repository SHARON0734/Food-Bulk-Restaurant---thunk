import React from 'react'
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RestCard({restaurant}) {
  return (
   <Link to={`/restaurant_view/${restaurant.id}`} style={{textDecoration:'none'}}>
    <Card style={{ width: '100%' }}>
    <Card.Img height={'250px'} width={'250px'}  variant="top" src={restaurant.photograph} />
    <Card.Body>
      <Card.Title className='text-center text-warning p-2'>{restaurant.name}</Card.Title>
     <Row className='p-2'>
       <Col className='ms-3'>
           <Card.Text>
           {restaurant.neighborhood}
           </Card.Text>
       </Col>

       <Col>
           <Card.Text>
            Cusine Type : {restaurant.cuisine_type}
           </Card.Text>
       </Col>

     </Row>
    </Card.Body>
  </Card>
   </Link>
  )
}

export default RestCard