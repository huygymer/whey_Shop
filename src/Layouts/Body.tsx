import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



import Product from "./product";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getHomePageApi } from "../API";
import "./../App.css";
import { addToCart } from "../services/cart.service";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Body = ({ title }: any) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    getHomePageData();
  }, []);
  const getHomePageData = async () => {
    const res = await getHomePageApi();
    setCategories(res.categories);
    setProducts(res.products);
  };
  const changeTab = (tabId: any) => () => {
    setSelectedCategory(tabId);
  };


  return (
    <>
      <div  className="body" id="body">
      <ToastContainer />
        <div className="banner">
          <div className="introduce">
            <div className="title">
              <div className="banner--content">
                <h2>{title}</h2>
                <span>Complete a register to own your account here.</span>
              </div>
              <div className="buy-now">
                <a href="#body" className="access-btn">
                  {" "}
                  Explore More <FontAwesomeIcon icon={faArrowDown} />{" "}
                </a>
                <a href="/LogInPage" className="access-btn">
                  {" "}
                  Get Started <FontAwesomeIcon icon={faArrowRight} />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-menu">
        <div className="tabs">
          <div
            className={`tab ${!selectedCategory ? "active-tab" : ""}`}
            onClick={changeTab("")}
          >
            All
          </div>
          {categories.map((x) => (
            <div
              className={`tab ${selectedCategory == x.id ? "active-tab" : ""}`}
              onClick={changeTab(x.id)}
            >
              {x.name}
            </div>
          ))}
        </div>
        </div>
        
        <div className="content">
          <div className="all-product">
            {products
              .filter(
                (x) => x.categoryId == selectedCategory || !selectedCategory
              )
              .map((x) => (
                <Product
                  id={x.id}
                  type={x.category.name}
                  name={x.name}
                  price={x.price}
                  image={x.imageUrl}
                  description={x.description}
                  onAddToCart={() => addToCart(x)}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
