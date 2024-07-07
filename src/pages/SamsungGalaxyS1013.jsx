import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS1013.css";

const SamsungGalaxyS1013 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-41");
  }, [navigate]);

  const onKsh2000TextClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-14");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-15">
      <img
        className="samsung-galaxy-s10-15-child"
        alt=""
        src="/ellipse-9@2x.png"
      />
      <div className="confirm-your-donation">Confirm your donation</div>
      <div className="samsung-galaxy-s10-15-item" />
      <div className="from">From</div>
      <div className="m-pesa1">M-Pesa</div>
      <div className="m-pesa2">Ksh 5.00</div>
      <div className="m-pesa3">31.07.2024</div>
      <div className="date">Date</div>
      <div className="default">Organization</div>
      <div className="default1">Donation</div>
      <div className="default2">Due date</div>
      <div className="div5">01-07-2024</div>
      <div className="kenya-red-cross4">Kenya Red Cross</div>
      <div className="rectangle-parent24" onClick={onGroupContainerClick}>
        <div className="group-child71" />
        <div className="donate-to-my">Donate ksh 5.00 elsewhere</div>
      </div>
      <div className="ksh-20001" onClick={onKsh2000TextClick}>
        Done
      </div>
      <div className="samsung-galaxy-s10-15-inner" />
      <div className="arrow-left18" onClick={onKsh2000TextClick}>
        <div className="arrow-left-child16" />
        <img className="path-104-icon10" alt="" src="/path-104.svg" />
      </div>
      <img className="settings-icon4" alt="" src="/settings.svg" />
    </div>
  );
};

export default SamsungGalaxyS1013;
