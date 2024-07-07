import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS1026.css";

const SamsungGalaxyS1026 = () => {
  const navigate = useNavigate();

  const onLogInIconClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-9");
  }, [navigate]);

  const onCoffeeIconClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-21");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-43">
      <div className="samsung-galaxy-s10-43-child" />
      <div className="group-parent11">
        <div className="rectangle-parent44">
          <div className="group-child119" />
          <img
            className="sustainable-development-goals-49"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--1@2x.png"
          />
        </div>
        <div className="rectangle-parent45">
          <div className="group-child120" />
          <img
            className="sustainable-development-goals-50"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--11@2x.png"
          />
        </div>
        <div className="group-wrapper11">
          <div className="path-25-parent10">
            <img className="path-25-icon12" alt="" src="/path-25.svg" />
            <div className="group-child121" />
          </div>
        </div>
        <div className="sustainable-development-goals-parent25">
          <img
            className="sustainable-development-goals-51"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--18@2x.png"
          />
          <div className="group-child122" />
        </div>
        <div className="sustainable-development-goals-parent26">
          <img
            className="sustainable-development-goals-51"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--13@2x.png"
          />
          <div className="group-child123" />
        </div>
        <div className="rectangle-parent46">
          <div className="group-child124" />
          <div className="group-child125" />
          <div className="group-child126" />
        </div>
      </div>
      <div className="micro-donate-to-charity1">{`Micro-donate to charity `}</div>
      <div className="ask-bariki1">Ask Bariki</div>
      <img className="coinup-icon9" alt="" src="/coinup1@2x.png" />
      <div className="menu3">
        <div className="menu-child4" />
        <div className="menu-child5" />
        <div className="menu-child6" />
      </div>
      <img className="log-in-icon10" alt="" src="/login.svg" />
      <img
        className="log-in-icon11"
        alt=""
        src="/login2.svg"
        onClick={onLogInIconClick}
      />
      <img
        className="coffee-icon1"
        alt=""
        src="/coffee1.svg"
        onClick={onCoffeeIconClick}
      />
      <div className="what-is-bariki3">donate different</div>
      <img className="mic-icon" alt="" src="/mic.svg" />
      <div className="group-parent12">
        <div className="rectangle-parent47">
          <div className="group-child127" />
          <img
            className="sustainable-development-goals-53"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--19@2x.png"
          />
        </div>
        <div className="sustainable-development-goals-parent27">
          <img
            className="sustainable-development-goals-54"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--110@2x.png"
          />
          <div className="group-child128" />
        </div>
        <div className="group-wrapper12">
          <div className="path-25-parent11">
            <img className="path-25-icon13" alt="" src="/path-252.svg" />
            <div className="group-child129" />
          </div>
        </div>
        <div className="sustainable-development-goals-parent28">
          <img
            className="sustainable-development-goals-55"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--111@2x.png"
          />
          <div className="group-child130" />
        </div>
        <div className="sustainable-development-goals-parent29">
          <img
            className="sustainable-development-goals-55"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--112@2x.png"
          />
          <div className="group-child131" />
        </div>
        <div className="rectangle-parent48">
          <div className="group-child132" />
          <div className="group-child133" />
          <div className="group-child134" />
        </div>
      </div>
      <div className="what-is-bariki4">What is Bariki and how can I join</div>
      <div className="what-is-bariki5">{`Which charities are currently suported `}</div>
      <div className="what-is-bariki6">type here</div>
      <img className="sdgs-icon" alt="" src="/sdgs@2x.png" />
      <img className="path-27-icon8" alt="" src="/path-27.svg" />
      <img className="path-28-icon" alt="" src="/path-27.svg" />
    </div>
  );
};

export default SamsungGalaxyS1026;
