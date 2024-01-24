import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../styles/usermenu.css"

const UserMenu = () => {
    return (
        <>
            <div className="main-userorder">
                    <h4>Dashboard</h4>
                <div className="admin-userorder">

                    <NavLink to="/dashboard/user/profile" className="menulist-userorder">
                        Profile</NavLink>
                    <NavLink to="/dashboard/user/orders" className="menulist-userorder">
                        Orders</NavLink>
                </div>
            </div>

        </>
    )
}

export default UserMenu