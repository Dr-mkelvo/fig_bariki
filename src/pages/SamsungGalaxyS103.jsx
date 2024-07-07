import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS103.css";

const SamsungGalaxyS103 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-15");
  }, [navigate]);

  const onGroupContainerClick1 = useCallback(() => {
    navigate("/samsung-galaxy-s10-16");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-14">
      <div className="samsung-galaxy-s10-14-child" />
      <div className="samsung-galaxy-s10-14-item" />
      <img
        className="samsung-galaxy-s10-14-inner"
        alt=""
        src="/rectangle-144.svg"
      />
      <img className="ellipse-icon" alt="" src="/ellipse-9@2x.png" />
      <div className="track-your-donations">Track your donations</div>
      <div className="donations">Donations</div>
      <div className="rectangle-parent3" onClick={onGroupContainerClick}>
        <div className="group-child14" />
        <div className="ksh-500">Ksh 5.00</div>
        <div className="kenya-red-cross">Kenya Red Cross</div>
      </div>
      <div className="ksh-5001">Ksh 5.00</div>
      <div className="kenya-red-cross1">Kenya Red Cross</div>
      <div className="ksh-5002">Ksh 5.00</div>
      <div className="kenya-red-cross2">Kenya Red Cross</div>
      <div className="ksh-5003">Ksh 5.00</div>
      <div className="kenya-red-cross3">Kenya Red Cross</div>
      <div className="july-parent" onClick={onGroupContainerClick1}>
        <div className="july">July</div>
        <div className="ksh-2000">Ksh 20.00</div>
      </div>
      <div className="samsung-galaxy-s10-14-child1" />
      <div className="arrow-left5">
        <div className="arrow-left-child3" />
        <img className="path-104-icon3" alt="" src="/path-104.svg" />
      </div>
      <img className="settings-icon1" alt="" src="/settings.svg" />
      <img className="menu-icon" alt="" src="/menu.svg" />
    </div>
  );
};

export default SamsungGalaxyS103;
