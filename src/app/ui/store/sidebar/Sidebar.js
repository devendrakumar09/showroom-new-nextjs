import Link from 'next/link';
import React from 'react'
import styles from './sidebar.module.css'
import { FcLike, FcLikePlaceholder, FcOrgUnit, FcOrganization } from 'react-icons/fc';
import { FaGrip } from 'react-icons/fa6';
const Sidebar = () => {
    const links = [
        {
            id: 1,
            title: 'Orders',
            link: "/store/orders",
            // icon: <FaGrip className='me-1 sideicons' />,
        },
        {
            id: 2,
            title: 'Category',
            link: "/store/category",
            // icon: <FaGrip className='me-1 sideicons' />,
        },

        {
            id: 3,
            title: 'Products',
            link: "/store/products",
            // icon: <FaGrip className='me-1 sideicons' />,
        },

        {
            id: 3,
            title: 'Customers',
            link: "/store/customers",
            // icon: <FaGrip className='me-1 sideicons' />,

        },
        {
            id: 4,
            title: 'Offers',
            link: "/store/offers",
            // icon: <FaGrip className='me-1 sideicons' />,

        },



        {
            id: 6,
            title: 'Settings',
            link: "/store/settings",
            // icon: <FaGrip className='me-1 sideicons' />,

        },

    ];

    return (
        <>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3">
                    <div className="card storeName mb-3">
                        <div className="card-body">
                            <Link href={'/store/settings'} className='h4'> Store Name</Link>
                        </div>
                    </div>
                    <ul className="nav flex-column">
                        <li className="nav-item">                            
                            <Link href={'/store'}>
                            <FaGrip className='me-2' />
                                Dashboard
                            </Link>

                        </li>
                        {links.map(({ id, title, link, icon }) => (
                            <li className="nav-item" key={id}>
                                <Link className="nav-link" href={link}>
                                    <span data-feather="file">{icon}</span>
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Saved reports</span>
                        <a className="link-secondary" href="#" aria-label="Add a new report">
                            <span data-feather="plus-circle"></span>
                        </a>
                    </h6>
                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Current month
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Last quarter
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Social engagement
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Year-end sale
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Sidebar