import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS107.css";

const SamsungGalaxyS107 = () => {
  const navigate = useNavigate();

  const onDoneTextClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-12");
  }, [navigate]);

  const onArrowLeftContainerClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-10");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-11">
      <div className="samsung-galaxy-s10-11-child" />
      <div className="group-parent3">
        <div className="rectangle-parent10">
          <div className="group-child34" />
          <img
            className="sustainable-development-goals-16"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--1@2x.png"
          />
        </div>
        <div className="rectangle-parent11">
          <div className="group-child35" />
          <img
            className="sustainable-development-goals-17"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--11@2x.png"
          />
        </div>
        <div className="group-wrapper3">
          <div className="path-25-parent2">
            <img className="path-25-icon4" alt="" src="/path-25.svg" />
            <div className="group-child36" />
          </div>
        </div>
        <div className="sustainable-development-goals-parent6">
          <img
            className="sustainable-development-goals-18"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--18@2x.png"
          />
          <div className="group-child37" />
        </div>
        <div className="sustainable-development-goals-parent7">
          <img
            className="sustainable-development-goals-18"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--13@2x.png"
          />
          <div className="group-child38" />
        </div>
        <div className="rectangle-parent12">
          <div className="group-child39" />
          <div className="group-child40" />
          <div className="group-child41" />
        </div>
      </div>
      <img className="coinup-icon3" alt="" src="/coinup1@2x.png" />
      <img className="log-in-icon3" alt="" src="/login.svg" />
      <div className="done" onClick={onDoneTextClick}>
        Next
      </div>
      <div className="samsung-galaxy-s10-11-item" />
      <div className="username">username</div>
      <i className="step-12">step 1/3</i>
      <div className="complete-your-profile">Complete your profile</div>
      <div className="add-picture">add picture</div>
      <div className="arrow-left10" onClick={onArrowLeftContainerClick}>
        <div className="arrow-left-child8" />
        <img className="path-95-icon3" alt="" src="/path-95.svg" />
      </div>
      <img className="camera-icon" alt="" src="/camera.svg" />
    </div>
  );
};

export default SamsungGalaxyS107;
