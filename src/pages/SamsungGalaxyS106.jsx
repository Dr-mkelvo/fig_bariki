import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS106.css";

const SamsungGalaxyS106 = () => {
  const navigate = useNavigate();

  const onNextTextClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-23");
  }, [navigate]);

  const onArrowLeftContainerClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-21");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-22">
      <div className="samsung-galaxy-s10-22-child" />
      <i className="enter-amount4">enter amount</i>
      <div className="samsung-galaxy-s10-22-item" />
      <div className="next4" onClick={onNextTextClick}>
        Next
      </div>
      <div className="enter-your-donation">Enter your donation</div>
      <div className="samsung-galaxy-s10-22-inner" />
      <div className="component-45-2">
        <div className="component-45-2-child" />
        <div className="ksh">Ksh</div>
        <div className="div1">$</div>
      </div>
      <div className="arrow-left9" onClick={onArrowLeftContainerClick}>
        <div className="arrow-left-child7" />
        <img className="path-104-icon4" alt="" src="/path-104.svg" />
      </div>
    </div>
  );
};

export default SamsungGalaxyS106;
