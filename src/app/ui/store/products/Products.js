import React from 'react'
import styles from './products.module.css'
import { BsCheck, BsPen } from "react-icons/bs";
import Link from 'next/link';
const Products = () => {
    return (
        <>
            <tr className={styles.bgBlue}>
                <td className="pt-2">
                    <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className={styles.img + ' ' + "rounded-circle"} alt="" />
                    <div className={styles.name + ' ' + "ps-2"}>
                            <Link href={'/store/products/sdjiushd'}> Emilia Kollette</Link>                       
                    </div>
                </td>
                <td className="pt-3 mt-1">25 Sep 2020</td>
                <td className="pt-3">11:00 AM</td>
                <td className="pt-3"><span className="fa fa-check pl-3"></span><BsCheck /></td>
                <td className="pt-3"><span className="fa fa-ellipsis-v btn"></span><BsPen /></td>

            </tr>
        </>
    )
}

export default Products