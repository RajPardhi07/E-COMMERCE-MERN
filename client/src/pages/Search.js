import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import "../styles/Search.css"
const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search results"}>
      <div className="main-search">
        <div className="t">
          <h1>SEARCH RESULTS</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="card-m">
            {values?.results.map((p) => (
              <div className="card-search">
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-textdata">
                  <h4 className="card-title">{p.name}</h4>
                  <h5 className="card-text">
                    {p.description.substring(0, 30)}...
                  </h5>
                  <p className="card-text">MRP: $ {p.price}</p>
                  <button class="dets-btn">More Details</button>
                  <button class="add-btnsearch">ADD TO CART</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;