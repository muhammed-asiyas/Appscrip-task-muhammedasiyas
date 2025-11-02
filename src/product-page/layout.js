"use client";

import { useState } from "react";
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

const productItems = [
  {
    id: 1,
    imgUrl:
      "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1762010985/Image_q4pvot.png",
    altText: "bag",
    name: "PRODUCT NAME",
  },
  {
    id: 2,
    imgUrl:
      "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1762011028/Image_zkb7mr.png",
    altText: "toy",
    name: "PRODUCT NAME",
  },
  {
    id: 3,
    imgUrl:
      "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1762011069/Rectangle_29438_zg62l8.png",
    altText: "keychain",
    name: "PRODUCT NAME",
  },
  {
    id: 4,
    imgUrl:
      "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1762011115/Rectangle_29438_vqr6eg.png",
    altText: "cap",
    name: "PRODUCT NAME",
  },
  {
    id: 5,
    imgUrl:
      "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1762011153/Rectangle_29438_om1o2r.png",
    altText: "bag",
    name: "PRODUCT NAME",
  },
  {
    id: 6,
    imgUrl:
      "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1762011187/Rectangle_29438_x48lpm.png",
    altText: "toys",
    name: "PRODUCT NAME",
  },
  {
    id: 7,
    imgUrl:
      "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1762011223/Rectangle_29438_pcfego.png",
    altText: "bag",
    name: "PRODUCT NAME",
  },
  {
    id: 8,
    imgUrl:
      "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1762011254/Rectangle_29438_lanvry.png",
    altText: "bag",
    name: "PRODUCT NAME",
  },
  {
    id: 9,
    imgUrl:
      "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1762011300/Rectangle_29438_ic0vs4.png",
    altText: "bag",
    name: "PRODUCT NAME",
  },
  {
    id: 10,
    imgUrl:
      "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1762011357/Rectangle_29438_ddawkp.png",
    altText: "small bag",
    name: "PRODUCT NAME",
  },
  {
    id: 11,
    imgUrl:
      "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1762011390/Rectangle_29438_ieeguh.png",
    altText: "women bag",
    name: "PRODUCT NAME",
  },
  {
    id: 12,
    imgUrl:
      "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1762011427/Rectangle_29438_slgrfl.png",
    altText: "womwn bag",
    name: "PRODUCT NAME",
  },
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
  const [clickFilterBtn, setClickFilterBtn] = useState(false);
  const onClickFilterBtn = () => setClickFilterBtn((prevState) => !prevState);
  const [clickProductFilterBtn, setClickProductFilterBtn] = useState(false);
  const onClickProductFilterBtn = () =>
    setClickProductFilterBtn((prevState) => !prevState);
  const FilterBtnText = clickFilterBtn ? "HIDE FILTER" : "SHOW FILTER";
  const FilterArrow = clickFilterBtn ? RiArrowLeftSLine : RiArrowRightSLine;
  const ProductFilterArrow = clickProductFilterBtn
    ? RiArrowUpSLine
    : RiArrowDownSLine;
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
        <select className="recommended-select-container">
          {recommendedFilterItems.map((eachFilters) => (
            <option
              className="recommended-filter-options-box"
              key={eachFilters.id}
              value={eachFilters.item}
            >
              {eachFilters.item}
            </option>
          ))}
        </select>
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
            {productFilterItems.map((eachFilters) => (
              <li key={eachFilters.id}>
                <div className="product-filter-first-row-container">
                  <h3 className="product-filter-head">{eachFilters.item}</h3>
                  <button
                    className="filter-btn"
                    type="button"
                    onClick={onClickProductFilterBtn}
                  >
                    <ProductFilterArrow className="filter-arrow-btn" />
                  </button>
                </div>
                <p className="product-filter-selected">All</p>
                {clickProductFilterBtn ? (
                  <ul className="product-sub-field-container">
                    <p className="unselect-text">Unselect all</p>
                    {subFilterItems.map((eachSubItems) => (
                      <li key={eachSubItems.id} className="list-sub-field-container">
                        <input
                          className="checkbox"
                          type="checkbox"
                          name="product-category"
                        />
                        <h5 className="sub-category-filter-name">
                          {eachSubItems.item}
                        </h5>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <hr className="hr-line-filter" />
              </li>
            ))}
          </ul>
        ) : null}
        <ul className="product-list-item-container">
          {productItems.map((eachProducts) => (
            <li className="product-items" key={eachProducts.id}>
              <img
                className="product-image"
                src={eachProducts.imgUrl}
                alt={eachProducts.altText}
              />
              <h4 className="product-name">{eachProducts.name}</h4>
              <div className="description-product-container">
                <p className="product-description">
                  {" "}
                  <span className="product-description sign-in-text">
                    Sign in
                  </span>{" "}
                  or Create an account to see pricing
                </p>
                <RiPokerHeartsLine className="heart-icon" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
