import React from "react";
import "./sethoo.css";

export const Page = () => {
  return (
    <div className="page">
      <div className="top-bar">
        <div className="rectangle" />
        <div className="title">SEBEES FRESH FOOD LTD</div>
        <div className="navbar">
          <div className="tab">Home</div>
          <div className="tab">About</div>
          <div className="tab">Shop</div>
          <div className="tab">Contact</div>
          <div className="textfield">
            <div className="text">Search in site</div>
            <img className="ic-search" alt="Ic search" src="ic-search.svg" />
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <p className="text-wrapper">Welcome to SEBEES FRESH FOODS</p>
          <p className="description">a brand you can always trust</p>
          <button className="button">
            <div className="primary">
              <div className="div">Shop Now</div>
            </div>
          </button>
        </div>
        <img className="vector" alt="Vector" src="vector-200.svg" />
      </div>
      <div className="section-2">
        <div className="container">
          <div className="title-2">Featured Products</div>
          <p className="p">Discover our wide range of fresh farm produce</p>
          <button className="button">
            <div className="primary">
              <div className="div">View All Products</div>
            </div>
          </button>
          <div className="list">
            <div className="card">
              <div className="image-container">
                <div className="image">
                  <div className="title-3">Fresh Tomatoes</div>
                  <div className="tag">
                    <div className="text-2">Organic</div>
                  </div>
                </div>
              </div>
              <div className="text-content">
                <div className="subtitle">In Stock</div>
              </div>
            </div>
            <div className="card">
              <div className="image-container">
                <div className="image">
                  <div className="title-3">Crisp Lettuce</div>
                </div>
              </div>
              <div className="text-content">
                <div className="title-4">Lettuce</div>
                <div className="subtitle-2">In Stock</div>
              </div>
            </div>
            <div className="card">
              <div className="image-container">
                <div className="image">
                  <div className="title-3">Juicy Oranges</div>
                </div>
              </div>
              <div className="text-content">
                <div className="title-4">Oranges</div>
                <div className="subtitle-2">In Stock</div>
              </div>
            </div>
          </div>
        </div>
        <img className="img" alt="Vector" src="image.svg" />
      </div>
      <div className="section-2">
        <div className="title-wrapper">
          <div className="title-5">What Our Customers Say</div>
        </div>
        <div className="list-2">
          <div className="card-2">
            <div className="user">
              <div className="avatar">
                <div className="avatar-2" />
                <div className="frame">
                  <div className="title-6">Alice</div>
                </div>
              </div>
              <img className="frame-2" alt="Frame" src="frame-427318817.svg" />
            </div>
            <p className="title-7">
              The produce I ordered was fresh and delicious. Highly recommend Sebees Fresh Food!
            </p>
          </div>
          <div className="card-2">
            <div className="user">
              <div className="avatar">
                <div className="avatar-2" />
                <div className="frame">
                  <div className="title-6">Bob</div>
                </div>
              </div>
              <img className="frame-2" alt="Frame" src="frame-427318817-2.svg" />
            </div>
            <p className="title-7">
              I love the convenience of having farm-fresh produce delivered right to my door. The taste is unbeatable!
            </p>
          </div>
        </div>
        <img className="vector-2" alt="Vector" src="vector-200-2.svg" />
      </div>
      <div className="section-2">
        <div className="image-wrapper">
          <div className="image-2">
            <p className="title-8">Join Our Community and Experience the Joy of Fresh Food</p>
            <div className="pagination">
              <div className="rectangle-2" />
              <div className="rectangle-3" />
              <div className="rectangle-3" />
              <div className="rectangle-3" />
            </div>
          </div>
        </div>
        <img className="vector-3" alt="Vector" src="vector-200-3.svg" />
      </div>
      <div className="container-wrapper">
        <div className="container-2">
          <div className="title-9">About Us</div>
          <div className="title-10">Contact</div>
          <div className="title-11">FAQ</div>
          <div className="title-12">Terms of Service</div>
          <div className="title-13">Privacy Policy</div>
        </div>
      </div>
    </div>
  );



  };