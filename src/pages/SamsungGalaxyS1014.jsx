import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS1014.css";

const SamsungGalaxyS1014 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-28");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-27");
  }, [navigate]);

  const onArrowLeftContainerClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-43");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-9">
      <div className="rectangle-parent25">
        <div className="group-child72" onClick={onRectangleClick} />
        <div className="individual">Individual</div>
        <img className="user-icon" alt="" src="/user.svg" />
      </div>
      <div className="rectangle-parent26" onClick={onGroupContainerClick}>
        <div className="group-child73" />
        <div className="organization">{`Organization `}</div>
        <img className="users-icon" alt="" src="/users.svg" />
      </div>
      <img className="mask-group-62" alt="" src="/mask-group-62@2x.png" />
      <div className="arrow-left19" onClick={onArrowLeftContainerClick}>
        <div className="arrow-left-child17" />
        <img className="path-95-icon5" alt="" src="/path-952.svg" />
      </div>
      <div className="continue-as">continue as</div>
    </div>
  );
};

export default SamsungGalaxyS1014;
