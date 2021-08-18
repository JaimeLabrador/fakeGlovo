import React from "react";
import "./home.css";
import burguer from "../../assets/burguer.svg";
import farma from "../../assets/farma.svg";
import glovoMarket from "../../assets/glovoMarket.svg";
import regalos from "../../assets/regalos.svg";
import restaurantes from "../../assets/restaurantes.svg";
import superMercado from "../../assets/superMercado.svg";
import varita from "../../assets/varita.svg";

const Home = () => {
  return (
    <section>
      <div className="optionsPosition">
        <div className="homeItemsPosition">
          <div className="homeOption topOption">
            <img
              className="homeOption__image"
              alt="burguer icon"
              src={burguer}
            />
            <p className="homeOption__description">McDonalds</p>
          </div>
          <div className="homeOption">
            <img className="homeOption__image" alt="farma icon" src={farma} />
            <p className="homeOption__description">Farmacia</p>
          </div>
          <div className="homeOption topOption">
            <img
              className="homeOption__image "
              alt="glovo market icon"
              src={glovoMarket}
            />
            <p className="homeOption__description">GloboMarket</p>
          </div>
        </div>
        <div className="customOption">
          <img className="customOption__image" alt="varita icon" src={varita} />
          <p className="customOption__description">Personalizado</p>
        </div>
        <div className="homeItemsPosition">
          <div className="homeOption bottomOption">
            <img
              className="homeOption__image"
              alt="restaurants icon"
              src={restaurantes}
            />
            <p className="homeOption__description">Restaurantes</p>
          </div>
          <div className="homeOption">
            <img className="homeOption__image" alt="gift icon" src={regalos} />
            <p className="homeOption__description">Regalos</p>
          </div>
          <div className="homeOption bottomOption">
            <img
              className="homeOption__image "
              alt="super market icon"
              src={superMercado}
            />
            <p className="homeOption__description">Supermercado</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
