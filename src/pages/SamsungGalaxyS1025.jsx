import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS1025.css";

const SamsungGalaxyS1025 = () => {
  const navigate = useNavigate();

  const onArrowLeftContainerClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-34");
  }, [navigate]);

  const onActionAidTextClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-40");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-42">
      <div className="complete-your-profile4">Choose your default charity</div>
      <div className="arrow-left31" onClick={onArrowLeftContainerClick}>
        <div className="arrow-left-child29" />
        <img className="path-95-icon12" alt="" src="/path-95.svg" />
      </div>
      <div className="aarp-foundation6">AARP Foundation</div>
      <div className="vector-parent1">
        <img className="group-child118" alt="" src="/rectangle-1552.svg" />
        <div className="aarp-foundation7">A</div>
      </div>
      <div className="arcons-children-hospice3">Arcons Children Hospice</div>
      <div className="action-against-hunger3">Action against hunger</div>
      <div className="actionaid3" onClick={onActionAidTextClick}>
        <span className="action3">Action</span>Aid
      </div>
      <div className="acumen6">Acumen</div>
      <div className="adelson-foundation-container2">
        <span className="action3">A</span>
        {`delson Foundation `}
      </div>
      <div className="samsung-galaxy-s10-42-child" />
      <div className="add-picture6" onClick={onArrowLeftContainerClick}>
        Done
      </div>
      <img className="path-27-icon7" alt="" src="/path-27.svg" />
      <div className="acumen7">Search</div>
    </div>
  );
};

export default SamsungGalaxyS1025;
