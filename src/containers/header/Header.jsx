import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Le të ndërtojmë diçka të mahnitshme me GPT-3 OpenAI
        </h1>
        <p>
          Aftësitë e GPT-3 nga OpenAI, mund të krijojmë aplikacione të
          mahnitshme, të shkruajmë tekstet më frytdhënëse dhe të eksplorojmë
          potencialet e pa kufij të inteligjencës artificiale."
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Adresa juaj e email" />
          <button type="button">Fillo</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>
            "1,600 persona kanë kërkuar qasje ose vizitë në 24 orët e fundit."
          </p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
