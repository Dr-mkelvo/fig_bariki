import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS104.css";

const SamsungGalaxyS104 = () => {
  const navigate = useNavigate();

  const onNextTextClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-29");
  }, [navigate]);

  const onArrowLeftContainerClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-9");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-27">
      <div className="group-parent1">
        <div className="rectangle-parent4">
          <div className="group-child15" />
          <img
            className="sustainable-development-goals-8"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--1@2x.png"
          />
        </div>
        <div className="rectangle-parent5">
          <div className="group-child16" />
          <img
            className="sustainable-development-goals-9"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--11@2x.png"
          />
        </div>
        <div className="group-wrapper1">
          <div className="path-25-container">
            <img className="path-25-icon2" alt="" src="/path-25.svg" />
            <div className="group-child17" />
          </div>
        </div>
        <div className="sustainable-development-goals-parent2">
          <img
            className="sustainable-development-goals-10"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--12@2x.png"
          />
          <div className="group-child18" />
        </div>
        <div className="sustainable-development-goals-parent3">
          <img
            className="sustainable-development-goals-10"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--13@2x.png"
          />
          <div className="group-child19" />
        </div>
        <div className="rectangle-parent6">
          <div className="group-child20" />
          <div className="group-child21" />
          <div className="group-child22" />
        </div>
      </div>
      <img className="coinup-icon1" alt="" src="/coinup1@2x.png" />
      <img className="log-in-icon1" alt="" src="/login.svg" />
      <div className="next3" onClick={onNextTextClick}>
        Next
      </div>
      <div className="line-group">
        <div className="group-child23" />
        <div className="contact">contact</div>
      </div>
      <div className="line-container">
        <div className="group-child24" />
        <div className="contact">name</div>
      </div>
      <div className="line-parent1">
        <div className="group-child23" />
        <div className="email1">Email</div>
      </div>
      <img className="mask-group-61" alt="" src="/mask-group-61@2x.png" />
      <div className="lets-complete-your">Start here</div>
      <i className="lets-complete-your1">step 1/2</i>
      <div className="arrow-left6" onClick={onArrowLeftContainerClick}>
        <div className="arrow-left-child4" />
        <img className="path-95-icon1" alt="" src="/path-95.svg" />
      </div>
    </div>
  );
};

export default SamsungGalaxyS104;
