"use client";

import { useState, useEffect } from "react";
import axios from 'axios';
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowUpSLine,
  RiArrowDownSLine,
  RiPokerHeartsLine,
} from "react-icons/ri";
import "./index.css";

const recommendedFilterItems = [
  { id: 1, item: "RECOMMENDED" },
  { id: 2, item: "NEWEST FIRST" },
  { id: 3, item: "POPULAR" },
  { id: 4, item: "PRICE: HIGH TO LOW" },
  { id: 5, item: "PRICE: LOW TO HIGH" },
];

const productFilterItems = [
  { id: 1, item: "IDEAL FOR" },
  { id: 2, item: "OCCATION" },
  { id: 3, item: "WORK" },
  { id: 4, item: "FABRIC" },
  { id: 5, item: "SEGMENT" },
  { id: 6, item: "SUITABLE FOR" },
  { id: 7, item: "RAW MATERIALS" },
  { id: 8, item: "PATTERN" },
];

const subFilterItems = [
  { id: 1, item: "Men" },
  { id: 2, item: "Women" },
  { id: 3, item: "Baby & Kids" },
];

export default function ProductPage({ children }) {
  const [products, setProducts] = useState([]);
  const [clickFilterBtn, setClickFilterBtn] = useState(false);
  const [openFilters, setOpenFilters] = useState({});
  const [showRecommendedPopup, setShowRecommendedPopup] = useState(false);
  const [selectedRecommended, setSelectedRecommended] = useState("RECOMMENDED");
  const [likedProducts, setLikedProducts] = useState([]);
  console.log(products)
  
useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("API error:", error));
  }, []);

  const onClickFilterBtn = () => setClickFilterBtn((prevState) => !prevState);
  const onToggleProductFilter = (id) => {
    setOpenFilters((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const FilterBtnText = clickFilterBtn ? "HIDE FILTER" : "SHOW FILTER";
  const FilterArrow = clickFilterBtn ? RiArrowLeftSLine : RiArrowRightSLine;
  const onToggleRecommendedPopup = () => {
    setShowRecommendedPopup((prev) => !prev);
  };

  const onSelectRecommended = (item) => {
    setSelectedRecommended(item);
    setShowRecommendedPopup(false);
  };

  const onToggleLike = (id) => {
    setLikedProducts((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <div className="product-page-container">
      <ul className="filter-container">
        <li className="hide-and-count-items-container">
          <h1 className="items-count">3425 ITEMS</h1>
          <button
            className="filter-btn"
            type="button"
            onClick={onClickFilterBtn}
          >
            <FilterArrow className="filter-arrow-btn" />
            <h1 className="hide-and-show-text">{FilterBtnText}</h1>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="filter-btn-sm"
            onClick={onClickFilterBtn}
          >
            FILTER
          </button>
        </li>
        <div className="vertical-line-sm"></div>

        <div className="recommended-container">
          <button
            type="button"
            className="recommended-btn"
            onClick={onToggleRecommendedPopup}
          >
            {selectedRecommended}
            <RiArrowDownSLine className="recommended-arrow" />
          </button>

          {showRecommendedPopup && (
            <>
              
              <div
                className="popup-overlay"
                onClick={onToggleRecommendedPopup}
              ></div>

              
              <ul className="recommended-popup">
                {recommendedFilterItems.map((eachItem) => (
                  <li
                    key={eachItem.id}
                    className={`recommended-popup-item ${
                      selectedRecommended === eachItem.item ? "active" : ""
                    }`}
                    onClick={() => onSelectRecommended(eachItem.item)}
                  >
                    {eachItem.item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </ul>
      <div className="product-and-filter-container">
        {clickFilterBtn ? (
          <ul className="product-filter-checkbox-container">
            <div className="customizble-checkbox-container">
              <input
                className="customizble-checkbox"
                type="checkbox"
                name="customizble"
              />
              <label className="product-filter-head" htmlFor="customizble">
                CUSTOMIZBLE
              </label>
            </div>
            <hr className="hr-line-filter" />
            {productFilterItems.map((eachFilters) => {
              const isOpen = openFilters[eachFilters.id];
              const ArrowIcon = isOpen ? RiArrowUpSLine : RiArrowDownSLine;

              return (
                <li key={eachFilters.id}>
                  <div className="product-filter-first-row-container">
                    <h3 className="product-filter-head">{eachFilters.item}</h3>
                    <button
                      className="filter-btn"
                      type="button"
                      onClick={() => onToggleProductFilter(eachFilters.id)}
                    >
                      <ArrowIcon className="filter-arrow-btn" />
                    </button>
                  </div>

                  <p className="product-filter-selected">All</p>

                  {isOpen && (
                    <ul className="product-sub-field-container">
                      <p className="unselect-text">Unselect all</p>
                      {subFilterItems.map((eachSubItems) => (
                        <li
                          key={eachSubItems.id}
                          className="list-sub-field-container"
                        >
                          <input
                            className="filter-checkbox"
                            type="checkbox"
                            name="product-category"
                          />
                          <h5 className="sub-category-filter-name">
                            {eachSubItems.item}
                          </h5>
                        </li>
                      ))}
                    </ul>
                  )}

                  <hr className="hr-line-filter" />
                </li>
              );
            })}
          </ul>
        ) : null}
        <ul className="product-list-item-container">
          {products.map((eachProducts) => (
            <li className="product-items" key={eachProducts.id}>
              <img
                className="product-image"
                src={eachProducts.image}
                alt={eachProducts.title}
              />
              <h4 className="product-name">{eachProducts.title}</h4>
              <h2 className="product-price">₹{eachProducts.price}</h2>
              <div className="description-product-container">
                <p className="product-description">
                  {" "}
                  <span className="product-description sign-in-text">
                    Sign in
                  </span>{" "}
                  or Create an account to see pricing
                </p>
                <button
                  type="button"
                  className={`heart-btn ${
                    likedProducts.includes(eachProducts.id) ? "liked" : ""
                  }`}
                  onClick={() => onToggleLike(eachProducts.id)}
                >
                  <RiPokerHeartsLine className="heart-icon" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
