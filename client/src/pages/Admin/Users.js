import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import "../../styles/AdminOrder.css"

const Users = () => {
    return (
        <Layout title={"Dashboard -All Users"}>
            <div className='main-alluser'>
                
                    <div className="left-alluser">
                        <AdminMenu />
                    </div>
                    <div className="right-alluser">
                        <h1>All users</h1>
                    </div>
            </div>
        </Layout>
    )
}

export default Users