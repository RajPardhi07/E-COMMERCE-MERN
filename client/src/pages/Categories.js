import Layout from '../components/Layout/Layout'
import React from 'react'
import useCategory from '../hooks/useCategory'
import { Link } from 'react-router-dom'
import "../styles/mainCategories.css"
const Categories = () => {

    const categories = useCategory()

    return (
        <Layout title={"All Categories"}>

            <div className='main-categories'>
                <h1>ALL CATEGORIES</h1>
                <div className='roww'>

                    {categories.map((c) => (
                        <div className='btn-categories' key={c._id}>
                            <Link className='btn-cat' to={`/category/${c.slug}`}>
                                {c.name}
                            </Link>


                        </div>
                    ))}

                </div>

            </div>

        </Layout>
    )
}

export default Categories