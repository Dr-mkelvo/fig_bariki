import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS109.css";

const SamsungGalaxyS109 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-25");
  }, [navigate]);

  const onGroupContainerClick1 = useCallback(() => {
    navigate("/samsung-galaxy-s10-42");
  }, [navigate]);

  const onGroupContainerClick2 = useCallback(() => {
    navigate("/samsung-galaxy-s10-26");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-34">
      <div className="manage-account-settings">Manage Account Settings</div>
      <div className="settings">Settings</div>
      <div className="change-profile-settings">Change Profile Settings</div>
      <div className="samsung-galaxy-s10-34-child" />
      <div className="arrow-left13">
        <div className="arrow-left-child11" />
        <img className="path-104-icon7" alt="" src="/path-104.svg" />
      </div>
      <img
        className="samsung-galaxy-s10-34-item"
        alt=""
        src="/ellipse-9@2x.png"
      />
      <img
        className="samsung-galaxy-s10-34-inner"
        alt=""
        src="/ellipse-9@2x.png"
      />
      <div className="manage-donation-tracking">Manage donation tracking</div>
      <div className="manage-donation-tracking1">
        Default charity organization
      </div>
      <div className="rectangle-parent13" onClick={onGroupContainerClick}>
        <div className="group-child42" />
        <div className="m-pesa-linked">M-Pesa Linked</div>
        <img className="check-circle-icon1" alt="" src="/checkcircle1.svg" />
      </div>
      <div className="rectangle-parent14" onClick={onGroupContainerClick1}>
        <div className="group-child42" />
        <div className="m-pesa-linked1">Kenya Red Cross</div>
      </div>
      <div className="image">image</div>
      <div className="rectangle-parent15" onClick={onGroupContainerClick2}>
        <div className="group-child42" />
        <div className="annie">Annie</div>
        <div className="chi">Chi</div>
        <div className="div3">****</div>
        <div className="ellipse-div" />
        <img className="camera-icon1" alt="" src="/camera.svg" />
      </div>
      <img className="edit-2-icon" alt="" src="/edit2.svg" />
      <img className="menu-icon1" alt="" src="/menu.svg" />
      <img className="menu-icon2" alt="" src="/menu.svg" />
    </div>
  );
};

export default SamsungGalaxyS109;
