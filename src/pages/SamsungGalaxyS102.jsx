import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS102.css";

const SamsungGalaxyS102 = () => {
  const navigate = useNavigate();

  const onNextTextClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-24");
  }, [navigate]);

  const onArrowLeftContainerClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-22");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-23">
      <div className="samsung-galaxy-s10-23-child" />
      <i className="enter-amount2">enter amount</i>
      <i className="needy-account1">Needy account</i>
      <i className="general-account1">General Account</i>
      <i className="enter-amount3">enter amount</i>
      <div className="samsung-galaxy-s10-23-item" />
      <div className="next2" onClick={onNextTextClick}>
        Next
      </div>
      <div className="customize-your-donation1">Customize your donation</div>
      <div className="anonymous-donor">Anonymous Donor</div>
      <div className="donate-different-parent">
        <div className="donate-different">donate different</div>
        <div className="group-container">
          <div className="group-div">
            <div className="group-child6" />
            <img
              className="sustainable-development-goals-4"
              alt=""
              src="/sustainable-development-goals--a-challenge-for-education--14@2x.png"
            />
          </div>
          <div className="rectangle-parent1">
            <div className="group-child7" />
            <img
              className="sustainable-development-goals-5"
              alt=""
              src="/sustainable-development-goals--a-challenge-for-education--15@2x.png"
            />
          </div>
          <div className="group-frame">
            <div className="path-25-group">
              <img className="path-25-icon1" alt="" src="/path-251.svg" />
              <div className="group-child8" />
            </div>
          </div>
          <div className="sustainable-development-goals-container">
            <img
              className="sustainable-development-goals-6"
              alt=""
              src="/sustainable-development-goals--a-challenge-for-education--16@2x.png"
            />
            <div className="group-child9" />
          </div>
          <div className="sustainable-development-goals-parent1">
            <img
              className="sustainable-development-goals-6"
              alt=""
              src="/sustainable-development-goals--a-challenge-for-education--17@2x.png"
            />
            <div className="group-child10" />
          </div>
          <div className="rectangle-parent2">
            <div className="group-child11" />
            <div className="group-child12" />
            <div className="group-child13" />
          </div>
        </div>
      </div>
      <div className="samsung-galaxy-s10-23-inner" />
      <div className="arrow-left4" onClick={onArrowLeftContainerClick}>
        <div className="arrow-left-child2" />
        <img className="path-104-icon2" alt="" src="/path-104.svg" />
      </div>
    </div>
  );
};

export default SamsungGalaxyS102;
