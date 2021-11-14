import React from "react";
import featuredStyle from "./Featured.module.css";
import Card from "./Card/Card";
import FeaturedData from "./featuredData";

const Featured = () => {
  return (
    <>
      <div className={featuredStyle.container}>
        <h1 className={featuredStyle.heading}>Featured Writers</h1>
        <div className={featuredStyle.card_parent}>
          {FeaturedData.map((value, index) =>{
              return <Card key={index} Imgsrc={value.img} Title={value.name} />
          })}
        </div>
      </div>
    </>
  );
};

export default Featured;
