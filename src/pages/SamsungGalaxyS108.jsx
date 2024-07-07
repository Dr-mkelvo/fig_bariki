import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS108.css";

const SamsungGalaxyS108 = () => {
  const navigate = useNavigate();

  const onNextTextClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-19");
  }, [navigate]);

  const onArrowLeftContainerClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-17");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-18">
      <div className="samsung-galaxy-s10-18-child" />
      <img
        className="samsung-galaxy-s10-18-item"
        alt=""
        src="/ellipse-9@2x.png"
      />
      <div className="enter-your-donation1">Enter your donation</div>
      <div className="samsung-galaxy-s10-18-inner" />
      <div className="arrow-left11">
        <div className="arrow-left-child9" />
        <img className="path-104-icon5" alt="" src="/path-104.svg" />
      </div>
      <div className="component-45-1">
        <div className="component-45-1-child" />
        <div className="ksh1">Ksh</div>
        <div className="div2">$</div>
      </div>
      <i className="enter-amount5">enter amount</i>
      <div className="samsung-galaxy-s10-18-child1" />
      <div className="next5" onClick={onNextTextClick}>
        Next
      </div>
      <img className="settings-icon2" alt="" src="/settings.svg" />
      <div className="arrow-left12" onClick={onArrowLeftContainerClick}>
        <div className="arrow-left-child10" />
        <img className="path-104-icon5" alt="" src="/path-104.svg" />
      </div>
    </div>
  );
};

export default SamsungGalaxyS108;
