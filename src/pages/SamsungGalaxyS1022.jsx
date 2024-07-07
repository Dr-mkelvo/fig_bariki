import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS1022.css";

const SamsungGalaxyS1022 = () => {
  const navigate = useNavigate();

  const onArrowLeftContainerClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-12");
  }, [navigate]);

  const onActionAidTextClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-40");
  }, [navigate]);

  const onAddPictureTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-38">
      <i className="step-121">step 3/3</i>
      <div className="complete-your-profile1">Choose your default charity</div>
      <div className="arrow-left28" onClick={onArrowLeftContainerClick}>
        <div className="arrow-left-child26" />
        <img className="path-95-icon9" alt="" src="/path-95.svg" />
      </div>
      <div className="aarp-foundation">AARP Foundation</div>
      <div className="vector-parent">
        <img className="group-child115" alt="" src="/rectangle-1552.svg" />
        <div className="aarp-foundation1">A</div>
      </div>
      <div className="arcons-children-hospice">Arcons Children Hospice</div>
      <div className="action-against-hunger">Action against hunger</div>
      <div className="actionaid" onClick={onActionAidTextClick}>
        <span className="action">Action</span>Aid
      </div>
      <div className="acumen">Acumen</div>
      <div className="adelson-foundation-container">
        <span className="action">A</span>
        {`delson Foundation `}
      </div>
      <div className="samsung-galaxy-s10-38-child" />
      <div className="add-picture2">skip</div>
      <div className="add-picture3" onClick={onAddPictureTextClick}>
        Finish
      </div>
      <img className="path-27-icon4" alt="" src="/path-27.svg" />
      <div className="acumen1">Search</div>
    </div>
  );
};

export default SamsungGalaxyS1022;
