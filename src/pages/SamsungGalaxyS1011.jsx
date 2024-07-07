import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS1011.css";

const SamsungGalaxyS1011 = () => {
  const navigate = useNavigate();

  const onNextTextClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-22");
  }, [navigate]);

  const onXIconClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-43");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-21">
      <div className="samsung-galaxy-s10-21-child" />
      <div className="group-parent6">
        <div className="rectangle-parent22">
          <div className="group-child63" />
          <img
            className="sustainable-development-goals-28"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--19@2x.png"
          />
        </div>
        <div className="sustainable-development-goals-parent12">
          <img
            className="sustainable-development-goals-29"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--110@2x.png"
          />
          <div className="group-child64" />
        </div>
        <div className="group-wrapper6">
          <div className="path-25-parent5">
            <img className="path-25-icon7" alt="" src="/path-252.svg" />
            <div className="group-child65" />
          </div>
        </div>
        <div className="sustainable-development-goals-parent13">
          <img
            className="sustainable-development-goals-30"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--111@2x.png"
          />
          <div className="group-child66" />
        </div>
        <div className="sustainable-development-goals-parent14">
          <img
            className="sustainable-development-goals-30"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--112@2x.png"
          />
          <div className="group-child67" />
        </div>
        <div className="rectangle-parent23">
          <div className="group-child68" />
          <div className="group-child69" />
          <div className="group-child70" />
        </div>
      </div>
      <div className="next6" onClick={onNextTextClick}>
        Next
      </div>
      <div className="select-an-organization">Select an organization</div>
      <img className="x-icon3" alt="" src="/x1.svg" onClick={onXIconClick} />
      <div className="samsung-galaxy-s10-21-item" />
      <div className="donate2">Donate</div>
      <div className="component-44-2">
        <img className="search-icon3" alt="" src="/search.svg" />
        <div className="component-44-2-child" />
        <div className="search1">search</div>
        <img className="x-icon4" alt="" src="/x2.svg" />
      </div>
    </div>
  );
};

export default SamsungGalaxyS1011;
