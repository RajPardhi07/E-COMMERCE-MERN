import React from 'react'
import { NavLink } from 'react-router-dom'

import '../../styles/AdminDashboard.css'

const AdminMenu = () => {
    return (
        <>

            <div className="www">
                <div className="admin-menu">
                    <h4>Admin Panel</h4>
                    <div className='admin-list'>
                        <NavLink to="/dashboard/admin/create-category" className="menulist">
                            CREATE CATEGORY</NavLink>
                        <NavLink to="/dashboard/admin/products" className="menulist">
                            PRODUCTS</NavLink>
                        <NavLink to="/dashboard/admin/orders" className="menulist">
                            ORDERS</NavLink>
                        <NavLink to="/dashboard/admin/create-product" className="menulist">
                            CREATE PRODUCT</NavLink>
                        <NavLink to="/dashboard/admin/users" className="menulist">
                            USERS</NavLink>
                    </div>
                </div>
            </div>


        </>
    )
}

export default AdminMenu