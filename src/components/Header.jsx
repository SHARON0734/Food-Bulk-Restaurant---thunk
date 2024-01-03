import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restaurantSlice';

function Header() {
  const dispatch = useDispatch()
  return (
    <Navbar variant='dark' className='p-3'>
    <Container>
      <Navbar.Brand href="" className='d-flex'>
        <img
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHB6Jg9FKPdDYMgPvCC3ff7TxCw1t3aJK1BA&usqp=CAU"
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}
       <h4 className='mt-3 ms-4'> Food <span className='text-primary'>Bulk</span></h4>
      </Navbar.Brand>
      <input onChange={(e)=>dispatch(search(e.target.value))} type="text" placeholder='enter Neighbourhood' className='form-control w-25' />
    </Container>
  </Navbar>
  )
}

export default Header