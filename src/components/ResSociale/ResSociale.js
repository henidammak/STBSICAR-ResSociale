import React from "react";
import "./ResSociale.css";
import { AiOutlineBank } from "react-icons/ai";
import { FaPencilRuler } from "react-icons/fa";
import ResPart2 from "../ResPart2/ResPart2";
const ResSociale = () => {
  return (
    <div>
      <h1 className="title">RESPONSABILITÉ SOCIALE</h1>
      <div className="Icons">
        <div>
          <a href="#politique">
            {" "}
            <FaPencilRuler id="icon1" />
          </a>
          <h3 className="title-icon">Notre politique interne</h3>
        </div>
        <div>
          <a href="#part">
            <AiOutlineBank id="icon" />
          </a>
          <h3 className="title-icon">nos participations</h3>
        </div>
      </div>

      <div id="politique" className="d-flex justify-content-around">
        <div>
          <img src="/img3.jpg" width="750rem" alt="" />
        </div>
        <div id="politique">
          <h1> Notre politique interne </h1>
          <p className="p-politique">
            Nous permettons à nos collaborateurs de grandir au sein de STB
            SICAR, aussi bien professionnellement que personnellement. Nous
            veillons à l’égalité entre tous et à l’accomplissement de chacun.
          </p>
        </div>
      </div>
      <h1 className="title">EN BREF...</h1>
      <div className="cercles">
        <p className="cercle1">
          Renforcer nos engagements pour l’égalité femmes-hommes
        </p>
        <p className="cercle2">
          Accompagner nos collaborateurs pour faire évoluer leurs compétences
        </p>
        <p className="cercle3">
          Offrir à nos collaborateurs une qualité de vie au travail optimale
        </p>
      </div>
      <div id="part">
        <h3 className="nospart">Nos Participations</h3>

        <p className="p-nospart">
          Nous sommes conscients de la nécessité de prendre en considération les
          critères environnementaux, sociaux et de qualité de gouvernance (ESG)
          dans la politique d’investissement. Ainsi, nous avons établi une
          charte ESG. Nous sommes également très attachés à la qualité de
          l’approche et à la politique mise en œuvre par nos participations en
          ce qui concerne le respect de l’environnement et la gestion des
          ressources humaines. Pour ce faire, un questionnaire a été envoyé aux
          sociétés financées. Il s’appuie sur un socle commun comprenant des
          indicateurs quantitatifs portant sur les 3 grands thèmes ESG
          prioritaires de la STB SICAR.
        </p>
      </div>

      <div className="cercles-2">
        <p className="cercle1-2">Gouvernance</p>
        <p className="cercle2-2">Volet social</p>
        <p className="cercle3-2">Environnement</p>
      </div>

      <ResPart2 />
    </div>
  );
};

export default ResSociale;
