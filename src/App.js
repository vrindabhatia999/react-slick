import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function App() {
  const photos = [
    {
      name: "photo 1",
      url: "https://images.unsplash.com/photo-1522290141854-9cc619533195?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1786&q=80",
    },
    {
      name: "photo 1",
      url: "https://images.unsplash.com/photo-1585195834027-5b28b11f473d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: "photo 1",
      url: "https://images.unsplash.com/photo-1522290141854-9cc619533195?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1786&q=80",
    },
  ];
  const settings = {
    className: "slider",
    infinite: false,
    slidesToShow: 2,
  };
  return (
    <div>
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div>
              <img width="350px" height="400px" src={photo.url}></img>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default App;
