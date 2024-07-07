import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS101.css";

const SamsungGalaxyS101 = () => {
  const navigate = useNavigate();

  const onNextTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCreateAnAccountClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-10");
  }, [navigate]);

  const onArrowLeftContainerClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-9");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-28">
      <div className="group-parent">
        <div className="rectangle-parent">
          <div className="group-child" />
          <img
            className="sustainable-development-goals-"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--1@2x.png"
          />
        </div>
        <div className="rectangle-group">
          <div className="group-item" />
          <img
            className="sustainable-development-goals-1"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--11@2x.png"
          />
        </div>
        <div className="group-wrapper">
          <div className="path-25-parent">
            <img className="path-25-icon" alt="" src="/path-25.svg" />
            <div className="group-inner" />
          </div>
        </div>
        <div className="sustainable-development-goals-parent">
          <img
            className="sustainable-development-goals-2"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--12@2x.png"
          />
          <div className="rectangle-div" />
        </div>
        <div className="sustainable-development-goals-group">
          <img
            className="sustainable-development-goals-2"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--13@2x.png"
          />
          <div className="group-child1" />
        </div>
        <div className="rectangle-container">
          <div className="group-child2" />
          <div className="group-child3" />
          <div className="group-child4" />
        </div>
      </div>
      <img className="coinup-icon" alt="" src="/coinup@2x.png" />
      <img className="log-in-icon" alt="" src="/login.svg" />
      <img className="mask-group-6" alt="" src="/mask-group-6@2x.png" />
      <div className="sign-in">Sign in</div>
      <div className="next1" onClick={onNextTextClick}>
        Next
      </div>
      <div className="sign-in-with">Sign in with google</div>
      <div className="create-an-account" onClick={onCreateAnAccountClick}>
        Create an account
      </div>
      <div className="create-an-account1" onClick={onCreateAnAccountClick}>
        Sign in
      </div>
      <div className="line-parent">
        <div className="group-child5" />
        <div className="email">Email</div>
      </div>
      <div className="back-parent">
        <div className="back">Back</div>
        <div className="arrow-left2">
          <div className="arrow-left-inner" />
          <img className="path-58-icon" alt="" src="/path-58.svg" />
        </div>
      </div>
      <div className="arrow-left3" onClick={onArrowLeftContainerClick}>
        <div className="arrow-left-child1" />
        <img className="path-58-icon" alt="" src="/path-95.svg" />
      </div>
    </div>
  );
};

export default SamsungGalaxyS101;
