import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS1019.css";

const SamsungGalaxyS1019 = () => {
  const navigate = useNavigate();

  const onNextTextClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-18");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-17">
      <div className="samsung-galaxy-s10-17-child" />
      <img
        className="samsung-galaxy-s10-17-item"
        alt=""
        src="/ellipse-9@2x.png"
      />
      <div className="select-an-organization1">Select an organization</div>
      <div className="donate3">Donate</div>
      <div className="samsung-galaxy-s10-17-inner" />
      <div className="arrow-left25">
        <div className="arrow-left-child23" />
        <img className="path-104-icon12" alt="" src="/path-104.svg" />
      </div>
      <div className="next8" onClick={onNextTextClick}>
        Next
      </div>
      <div className="component-44-1">
        <img className="search-icon4" alt="" src="/search.svg" />
        <div className="component-44-1-child" />
        <div className="search2">search</div>
        <img className="x-icon5" alt="" src="/x2.svg" />
      </div>
      <div className="component-43-1">
        <div className="component-43-1-child" />
        <img className="search-icon5" alt="" src="/search1.svg" />
        <img className="x-icon6" alt="" src="/x2.svg" />
        <div className="search3">search</div>
      </div>
      <img className="settings-icon6" alt="" src="/settings.svg" />
      <div className="group-parent10">
        <div className="rectangle-parent42">
          <div className="group-child107" />
          <img
            className="sustainable-development-goals-44"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--19@2x.png"
          />
        </div>
        <div className="sustainable-development-goals-parent21">
          <img
            className="sustainable-development-goals-45"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--110@2x.png"
          />
          <div className="group-child108" />
        </div>
        <div className="group-wrapper10">
          <div className="path-25-parent9">
            <img className="path-25-icon11" alt="" src="/path-252.svg" />
            <div className="group-child109" />
          </div>
        </div>
        <div className="sustainable-development-goals-parent22">
          <img
            className="sustainable-development-goals-46"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--111@2x.png"
          />
          <div className="group-child110" />
        </div>
        <div className="sustainable-development-goals-parent23">
          <img
            className="sustainable-development-goals-46"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--112@2x.png"
          />
          <div className="group-child111" />
        </div>
        <div className="rectangle-parent43">
          <div className="group-child112" />
          <div className="group-child113" />
          <div className="group-child114" />
        </div>
      </div>
      <img className="menu-icon3" alt="" src="/menu.svg" />
    </div>
  );
};

export default SamsungGalaxyS1019;
