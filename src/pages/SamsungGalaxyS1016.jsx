import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS1016.css";

const SamsungGalaxyS1016 = () => {
  const navigate = useNavigate();

  const onArrowLeftContainerClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-27");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-29">
      <div className="group-parent7">
        <div className="rectangle-parent28">
          <div className="group-child75" />
          <img
            className="sustainable-development-goals-32"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--1@2x.png"
          />
        </div>
        <div className="rectangle-parent29">
          <div className="group-child76" />
          <img
            className="sustainable-development-goals-33"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--11@2x.png"
          />
        </div>
        <div className="group-wrapper7">
          <div className="path-25-parent6">
            <img className="path-25-icon8" alt="" src="/path-25.svg" />
            <div className="group-child77" />
          </div>
        </div>
        <div className="sustainable-development-goals-parent15">
          <img
            className="sustainable-development-goals-34"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--18@2x.png"
          />
          <div className="group-child78" />
        </div>
        <div className="sustainable-development-goals-parent16">
          <img
            className="sustainable-development-goals-34"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--13@2x.png"
          />
          <div className="group-child79" />
        </div>
        <div className="rectangle-parent30">
          <div className="group-child80" />
          <div className="group-child81" />
          <div className="group-child82" />
        </div>
      </div>
      <img className="coinup-icon6" alt="" src="/coinup1@2x.png" />
      <img className="log-in-icon7" alt="" src="/login.svg" />
      <div className="register">Register</div>
      <div className="lets-complete-your-container">
        <span className="l">L</span>et's complete your Sign up
      </div>
      <div className="rectangle-parent31">
        <div className="group-child83" />
        <img className="upload-icon" alt="" src="/upload.svg" />
        <div className="articles-of-incorporation-container">
          <span className="l">{` `}</span>Articles of Incorporation
        </div>
      </div>
      <div className="rectangle-parent32">
        <div className="group-child83" />
        <img className="upload-icon1" alt="" src="/upload.svg" />
        <div className="articles-of-incorporation-container">
          <span className="l">T</span>ax Exempt document
        </div>
      </div>
      <div className="rectangle-parent33">
        <div className="group-child83" />
        <img className="upload-icon" alt="" src="/upload.svg" />
        <div className="annual-financial-statement-container">
          <span className="l">A</span>nnual Financial statement
        </div>
      </div>
      <div className="rectangle-parent34">
        <div className="group-child83" />
        <img className="upload-icon3" alt="" src="/upload.svg" />
        <div className="recent-audit-report-container">
          <span className="l">R</span>ecent audit Report
        </div>
      </div>
      <div className="rectangle-parent35">
        <div className="group-child83" />
        <img className="upload-icon" alt="" src="/upload.svg" />
        <div className="certificate-of-good-container">
          <span className="l">{`Certificate `}</span>
          <span className="of">{`of `}</span>
          <span className="l">good standing</span>
        </div>
      </div>
      <div className="arrow-left21" onClick={onArrowLeftContainerClick}>
        <div className="arrow-left-child19" />
        <img className="path-95-icon6" alt="" src="/path-95.svg" />
      </div>
    </div>
  );
};

export default SamsungGalaxyS1016;
