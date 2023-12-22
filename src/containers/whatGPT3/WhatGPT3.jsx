import React from "react";
import { Feature } from "../../components";
import "./whatGTP3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="Cfare eshte GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          "Mundësitë janë përtej imagjinatës suaj."
        </h1>
        <p>Eksploro Librarin</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Ne si miq me opinion, nëpërmjet mesazhit, gëzojmë kënaqësi. Të gjitha frontet e diskutuara janë të rëndësishme."
        />
        <Feature
          title="Knowledgebase"
          text="GPT-3 është i aftë të përpunojë informacione të ndryshme, të krijojë tekste, dhe të ofrojë zgjidhje në disa fusha, duke shfrytëzuar njohuritë e saj të gjerë të përfituara nga trajnimet e saj me një shumëllojshmëri të të dhënave."
        />
        <Feature
          title="Education"
          text="Qëllimi kryesor është të personalizojë mësimin për studentët, duke përdorur teknologjinë për të ofruar një përvojë mësimore më efektive, të përshtatshme dhe të adaptueshme sipas nevojave individuale të secilit nxënës."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
