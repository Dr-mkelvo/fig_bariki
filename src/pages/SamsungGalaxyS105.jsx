import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS105.css";

const SamsungGalaxyS105 = () => {
  const navigate = useNavigate();

  const onFinishTextClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-38");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-12">
      <div className="group-parent2">
        <div className="rectangle-parent7">
          <div className="group-child26" />
          <img
            className="sustainable-development-goals-12"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--1@2x.png"
          />
        </div>
        <div className="rectangle-parent8">
          <div className="group-child27" />
          <img
            className="sustainable-development-goals-13"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--11@2x.png"
          />
        </div>
        <div className="group-wrapper2">
          <div className="path-25-parent1">
            <img className="path-25-icon3" alt="" src="/path-25.svg" />
            <div className="group-child28" />
          </div>
        </div>
        <div className="sustainable-development-goals-parent4">
          <img
            className="sustainable-development-goals-14"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--18@2x.png"
          />
          <div className="group-child29" />
        </div>
        <div className="sustainable-development-goals-parent5">
          <img
            className="sustainable-development-goals-14"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--13@2x.png"
          />
          <div className="group-child30" />
        </div>
        <div className="rectangle-parent9">
          <div className="group-child31" />
          <div className="group-child32" />
          <div className="group-child33" />
        </div>
      </div>
      <img className="coinup-icon2" alt="" src="/coinup1@2x.png" />
      <img className="log-in-icon2" alt="" src="/login.svg" />
      <div className="component-39-1">
        <div className="component-39-1-child" />
        <div className="track-your-m-pesa">Track your M-Pesa donation</div>
        <div className="arrow-left7">
          <div className="arrow-left-child5" />
          <img className="path-92-icon" alt="" src="/path-58.svg" />
        </div>
        <div className="component-39-1-item" />
        <div className="component-39-1-inner" />
        <div className="submit">Submit</div>
        <img className="x-icon" alt="" src="/x.svg" />
        <img className="check-circle-icon" alt="" src="/checkcircle.svg" />
      </div>
      <div className="finish" onClick={onFinishTextClick}>
        Next
      </div>
      <i className="step-22">step 2/3</i>
      <div className="parent">
        <div className="div">1/5</div>
        <img className="chevron-left-icon" alt="" src="/chevronleft.svg" />
        <img className="chevron-right-icon" alt="" src="/chevronright.svg" />
      </div>
      <div className="track-your-donations1">Track your donations</div>
      <img className="search-icon" alt="" src="/search.svg" />
      <div className="arrow-left8">
        <div className="arrow-left-child6" />
        <img className="path-95-icon2" alt="" src="/path-951.svg" />
      </div>
    </div>
  );
};

export default SamsungGalaxyS105;
