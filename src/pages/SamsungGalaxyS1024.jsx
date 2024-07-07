import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS1024.css";

const SamsungGalaxyS1024 = () => {
  const navigate = useNavigate();

  const onActionAidTextClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-40");
  }, [navigate]);

  const onArrowLeftIconClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-15");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-41">
      <div className="complete-your-profile3">Find a charity to donate to</div>
      <div className="aarp-foundation4">AARP Foundation</div>
      <div className="vector-container">
        <img className="group-child117" alt="" src="/rectangle-1552.svg" />
        <div className="aarp-foundation5">A</div>
      </div>
      <div className="arcons-children-hospice2">Arcons Children Hospice</div>
      <div className="action-against-hunger2">Action against hunger</div>
      <div className="actionaid2" onClick={onActionAidTextClick}>
        <span className="action2">Action</span>Aid
      </div>
      <div className="acumen4">Acumen</div>
      <div className="adelson-foundation-container1">
        <span className="action2">A</span>
        {`delson Foundation `}
      </div>
      <div className="samsung-galaxy-s10-41-child" />
      <img className="path-27-icon6" alt="" src="/path-27.svg" />
      <div className="acumen5">Search</div>
      <img
        className="arrow-left-icon"
        alt=""
        src="/arrowleft.svg"
        onClick={onArrowLeftIconClick}
      />
      <div className="adventist-development-and-container">
        <span className="action2">A</span>dventist Development and Relief Agency
      </div>
    </div>
  );
};

export default SamsungGalaxyS1024;
