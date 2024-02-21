'use client';

import Link from 'next/link';
import React from 'react'
import styles from './sidebar.module.css'
import { FcAdvertising, FcBusinessman, FcFilledFilter, FcInTransit, FcLike, FcLikePlaceholder, FcList, FcOrgUnit, FcOrganization, FcSettings, FcShipped } from 'react-icons/fc';
import { FaGrip } from 'react-icons/fa6';
import { useParams, usePathname, useRouter } from 'next/navigation';



const Sidebar = () => {    
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
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse">
                <div className="position-sticky pt-3">
                    <div className="card storeName mb-3">
                        <div className="card-body">
                            <Link href={'/'} className='h4'>The Bazaar</Link>
                        </div>
                    </div>
                    <ul className="nav flex-column">
                        <li className="nav-item">                            
                            <Link className={pathname == '/store' ? 'nav-link active' : 'nav-link'} href={'/store'}>
                            <FaGrip className='me-2' />
                                Dashboard 
                            </Link>

                        </li>
                        {links.map(({ id, title, link, icon }) => (
                            <li className="nav-item" key={id}>
                                <Link className={pathname == link ? 'nav-link active' : 'nav-link'} href={link}>
                                    <span data-feather="file">{icon}</span>
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Saved reports</span>
                        <a className="link-secondary" href="#" aria-label="Add a new report">
                            <span data-feather="plus-circle"></span>
                        </a>
                    </h6> */}
                    {/* <ul className="nav flex-column mb-2">
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
                    </ul> */}
                </div>
            </nav>

        </>
    )
}

export default Sidebar