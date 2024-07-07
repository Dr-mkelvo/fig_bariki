import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS1015.css";

const SamsungGalaxyS1015 = () => {
  const navigate = useNavigate();

  const onArrowLeftContainerClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-14");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-16">
      <img
        className="samsung-galaxy-s10-16-child"
        alt=""
        src="/rectangle-152.svg"
      />
      <div className="samsung-galaxy-s10-16-item" />
      <div className="samsung-galaxy-s10-16-inner" />
      <img
        className="samsung-galaxy-s10-16-child1"
        alt=""
        src="/ellipse-9@2x.png"
      />
      <div className="monthly-donations">Monthly Donations</div>
      <div className="july1">July</div>
      <div className="june">June</div>
      <div className="april">April</div>
      <div className="march">March</div>
      <div className="summarize-report">Summarize report</div>
      <div className="download-report">Download report</div>
      <div className="ksh-20002">Ksh 20.00</div>
      <div className="ksh-20003">Ksh 20.00</div>
      <div className="ksh-20004">Ksh 20.00</div>
      <div className="ksh-20005">Ksh 20.00</div>
      <img className="settings-icon5" alt="" src="/settings.svg" />
      <div className="samsung-galaxy-s10-16-child2" />
      <div className="arrow-left20" onClick={onArrowLeftContainerClick}>
        <div className="arrow-left-child18" />
        <img className="path-104-icon11" alt="" src="/path-104.svg" />
      </div>
      <img className="download-icon" alt="" src="/download.svg" />
      <div className="rectangle-parent27">
        <div className="group-child74" />
        <div className="summarize-report-container">
          <span className="summarize-report1">summarize report</span>
          {` `}
        </div>
      </div>
      <img className="path-27-icon" alt="" src="/path-27.svg" />
    </div>
  );
};

export default SamsungGalaxyS1015;
