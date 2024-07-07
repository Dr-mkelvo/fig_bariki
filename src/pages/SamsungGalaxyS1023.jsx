import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS1023.css";

const SamsungGalaxyS1023 = () => {
  const navigate = useNavigate();

  const onArrowLeftContainerClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-38");
  }, [navigate]);

  const onAddPictureTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-401">
      <div className="samsung-galaxy-s10-40-inner" />
      <i className="step-122">step 3/3</i>
      <div className="complete-your-profile2">Choose your default charity</div>
      <div className="arrow-left29" onClick={onArrowLeftContainerClick}>
        <div className="arrow-left-child27" />
        <img className="path-95-icon10" alt="" src="/path-95.svg" />
      </div>
      <div className="aarp-foundation2">AARP Foundation</div>
      <div className="vector-group">
        <img className="group-child116" alt="" src="/rectangle-1552.svg" />
        <div className="aarp-foundation3">A</div>
      </div>
      <div className="arcons-children-hospice1">Arcons Children Hospice</div>
      <div className="action-against-hunger1">Action against hunger</div>
      <div className="actionaid1" onClick={onArrowLeftContainerClick}>
        <span className="action1">Action</span>Aid
      </div>
      <div className="acumen2">
        Social justice, gender equality and poverty eradication
      </div>
      <div className="acumen3">Search</div>
      <div className="adelson-foundation">Acumen</div>
      <div className="add-picture4">skip</div>
      <div className="add-picture5" onClick={onAddPictureTextClick}>
        Finish
      </div>
      <img className="path-27-icon5" alt="" src="/path-27.svg" />
    </div>
  );
};

export default SamsungGalaxyS1023;
