import Link from 'next/link';
import React from 'react'
import styles from './sidebar.module.css'
import { FcLike, FcLikePlaceholder, FcOrgUnit, FcOrganization } from 'react-icons/fc';
const Sidebar = () => {
    const links = [
        {
            id: 1,
            title: 'Orders',
            link: "/store/orders",
        }, 
        {
            id: 2,
            title: 'Category',
            link: "/store/category",
        },

        {
            id: 3,
            title: 'Products',
            link: "/store/products",
        },
       
        {
            id: 3,
            title: 'Customers',
            link: "/store/customers",
        },
        {
            id: 4,
            title: 'Offers',
            link: "/store/offers",
        },

        {
            id: 5,
            title: 'Ask',
            link: "/store/ask",
        },


        {
            id: 6,
            title: 'Settings',
            link: "/store/settings",
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
                            <a className="nav-link active" aria-current="page" href="/store">
                                <span data-feather="home"></span>
                                Dashboard
                            </a>
                        </li>
                        {links.map(({ id, title, link }) => (
                            <li className="nav-item" key={id}>
                                <Link className="nav-link" href={link}>
                                    <span data-feather="file"></span>
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