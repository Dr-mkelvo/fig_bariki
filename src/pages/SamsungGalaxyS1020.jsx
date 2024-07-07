import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS1020.css";

const SamsungGalaxyS1020 = () => {
  const navigate = useNavigate();

  const onArrowLeftContainerClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-23");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-24">
      <div className="samsung-galaxy-s10-24-child" />
      <div className="samsung-galaxy-s10-24-item" />
      <div className="donate4">Donate</div>
      <i className="phone-number1">Phone number</i>
      <div className="donate-with1">Donate with</div>
      <div className="m-pesa4">M-Pesa</div>
      <img className="chevron-down-icon1" alt="" src="/chevrondown.svg" />
      <div className="samsung-galaxy-s10-24-inner" />
      <div className="payment1">Payment</div>
      <div className="samsung-galaxy-s10-24-child1" />
      <div className="arrow-left26" onClick={onArrowLeftContainerClick}>
        <div className="arrow-left-child24" />
        <img className="path-104-icon13" alt="" src="/path-104.svg" />
      </div>
    </div>
  );
};

export default SamsungGalaxyS1020;
