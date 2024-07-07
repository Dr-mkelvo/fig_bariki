import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS1017.css";

const SamsungGalaxyS1017 = () => {
  const navigate = useNavigate();

  const onDoneTextClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-34");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-26">
      <div className="menu2">
        <div className="menu-child1" />
        <div className="menu-child2" />
        <div className="menu-child3" />
      </div>
      <div className="group-parent8">
        <div className="rectangle-parent36">
          <div className="group-child88" />
          <img
            className="sustainable-development-goals-36"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--1@2x.png"
          />
        </div>
        <div className="rectangle-parent37">
          <div className="group-child89" />
          <img
            className="sustainable-development-goals-37"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--11@2x.png"
          />
        </div>
        <div className="group-wrapper8">
          <div className="path-25-parent7">
            <img className="path-25-icon9" alt="" src="/path-25.svg" />
            <div className="group-child90" />
          </div>
        </div>
        <div className="sustainable-development-goals-parent17">
          <img
            className="sustainable-development-goals-38"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--12@2x.png"
          />
          <div className="group-child91" />
        </div>
        <div className="sustainable-development-goals-parent18">
          <img
            className="sustainable-development-goals-38"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--13@2x.png"
          />
          <div className="group-child92" />
        </div>
        <div className="rectangle-parent38">
          <div className="group-child93" />
          <div className="group-child94" />
          <div className="group-child95" />
        </div>
      </div>
      <img className="coinup-icon7" alt="" src="/coinup1@2x.png" />
      <img className="log-in-icon8" alt="" src="/login.svg" />
      <div className="done2" onClick={onDoneTextClick}>
        Done
      </div>
      <div className="line-parent2">
        <div className="group-child96" />
        <div className="username1">username</div>
      </div>
      <div className="line-parent3">
        <div className="group-child97" />
        <div className="password">password</div>
      </div>
      <div className="edit-your-profile">Edit your profile</div>
      <div className="samsung-galaxy-s10-26-child" />
      <img className="plus-icon" alt="" src="/plus.svg" />
      <div className="add-picture1">add picture</div>
      <div className="arrow-left22" onClick={onDoneTextClick}>
        <div className="arrow-left-child20" />
        <img className="path-95-icon7" alt="" src="/path-95.svg" />
      </div>
      <img className="camera-icon2" alt="" src="/camera1.svg" />
    </div>
  );
};

export default SamsungGalaxyS1017;
