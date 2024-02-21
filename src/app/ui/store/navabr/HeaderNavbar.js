'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { FcAdvertising, FcBusinessman, FcFilledFilter, FcInTransit, FcLike, FcLikePlaceholder, FcList, FcOrgUnit, FcOrganization, FcSettings, FcShipped } from 'react-icons/fc';
import { FaGrip } from 'react-icons/fa6'; const HeaderNavbar = () => {
  const pathname = usePathname()
  const links = [
    {
      id: 1,
      title: 'Orders',
      link: "/store/orders",
      icon: <FcShipped className='me-2 sideicons' />,

    },
    {
      id: 2,
      title: 'Category',
      link: "/store/category",
      icon: <FcFilledFilter className='me-2 sideicons' />,
    },

    {
      id: 3,
      title: 'Products',
      link: "/store/products",
      icon: <FcList className='me-2 sideicons' />,
    },

    {
      id: 3,
      title: 'Customers',
      link: "/store/customers",
      icon: <FcBusinessman className='me-2 sideicons' />,

    },
    {
      id: 4,
      title: 'Offers',
      link: "/store/offers",
      icon: <FcAdvertising className='me-2 sideicons' />,

    },



    {
      id: 6,
      title: 'Settings',
      link: "/store/settings",
      icon: <FcSettings className='me-2 sideicons' />,

    },

  ];

  return (

    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-white p-3 mb-3">
          <Container fluid>
            <Navbar.Brand href='/'>Local Market</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {links.map(({ id, title, link }) => (
                    <Nav.Link className={pathname == link ? 'nav-link active' : 'nav-link'} href={link}>
                      {title}
                    </Nav.Link>
                  ))}
                  <NavDropdown title="Profile" id="basic-nav-dropdown" className='me-5'>
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>

  )
}

export default HeaderNavbar