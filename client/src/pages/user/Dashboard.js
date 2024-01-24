import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth'
import "../../styles/UserDashboard.css"

const Dashboard = () => {
  const [auth] = useAuth()
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="main-order">

        <div className="left-dash">
          <UserMenu />
        </div>
        <div className="right-dash">
          <div className='card-dash'>

            <h3>Name: {auth?.user?.name}</h3>
            <h3>Email: {auth?.user?.email}</h3>
            <h3>Address: {auth?.user?.address}</h3>

          </div>

        </div>

      </div>
    </Layout>
  )
}

export default Dashboard