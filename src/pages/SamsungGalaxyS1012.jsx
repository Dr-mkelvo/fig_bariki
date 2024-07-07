import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS1012.css";

const SamsungGalaxyS1012 = () => {
  const navigate = useNavigate();

  const onArrowLeftContainerClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-19");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-20">
      <div className="samsung-galaxy-s10-20-child" />
      <img
        className="samsung-galaxy-s10-20-item"
        alt=""
        src="/ellipse-9@2x.png"
      />
      <div className="payment">Payment</div>
      <div className="samsung-galaxy-s10-20-inner" />
      <div className="arrow-left16">
        <div className="arrow-left-child14" />
        <img className="path-104-icon8" alt="" src="/path-104.svg" />
      </div>
      <i className="phone-number">Phone number</i>
      <div className="donate-with">Donate with</div>
      <div className="m-pesa">M-Pesa</div>
      <img className="chevron-down-icon" alt="" src="/chevrondown.svg" />
      <div className="samsung-galaxy-s10-20-child1" />
      <img className="settings-icon3" alt="" src="/settings.svg" />
      <div className="arrow-left17" onClick={onArrowLeftContainerClick}>
        <div className="arrow-left-child15" />
        <img className="path-104-icon8" alt="" src="/path-104.svg" />
      </div>
    </div>
  );
};

export default SamsungGalaxyS1012;
