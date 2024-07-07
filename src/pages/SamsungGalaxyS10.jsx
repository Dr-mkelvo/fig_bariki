import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS10.css";

const SamsungGalaxyS10 = () => {
  const navigate = useNavigate();

  const onNextTextClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-20");
  }, [navigate]);

  const onArrowLeftContainerClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-18");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-19">
      <div className="samsung-galaxy-s10-19-child" />
      <img
        className="samsung-galaxy-s10-19-item"
        alt=""
        src="/ellipse-9@2x.png"
      />
      <div className="customize-your-donation">Customize your donation</div>
      <div className="samsung-galaxy-s10-19-inner" />
      <div className="arrow-left">
        <div className="arrow-left-child" />
        <img className="path-104-icon" alt="" src="/path-104.svg" />
      </div>
      <i className="enter-amount">enter amount</i>
      <i className="needy-account">Needy account</i>
      <i className="general-account">General Account</i>
      <i className="enter-amount1">enter amount</i>
      <div className="line-div" />
      <div className="next" onClick={onNextTextClick}>
        Next
      </div>
      <img className="settings-icon" alt="" src="/settings.svg" />
      <div className="arrow-left1" onClick={onArrowLeftContainerClick}>
        <div className="arrow-left-item" />
        <img className="path-104-icon" alt="" src="/path-104.svg" />
      </div>
    </div>
  );
};

export default SamsungGalaxyS10;
