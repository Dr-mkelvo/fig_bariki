import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SamsungGalaxyS1018.css";

const SamsungGalaxyS1018 = () => {
  const navigate = useNavigate();

  const onNextTextClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-11");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-28");
  }, [navigate]);

  const onCreateAnAccountClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-10");
  }, [navigate]);

  const onArrowLeftContainerClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-9");
  }, [navigate]);

  return (
    <div className="samsung-galaxy-s10-10">
      <div className="group-parent9">
        <div className="rectangle-parent39">
          <div className="group-child98" />
          <img
            className="sustainable-development-goals-40"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--1@2x.png"
          />
        </div>
        <div className="rectangle-parent40">
          <div className="group-child99" />
          <img
            className="sustainable-development-goals-41"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--11@2x.png"
          />
        </div>
        <div className="group-wrapper9">
          <div className="path-25-parent8">
            <img className="path-25-icon10" alt="" src="/path-25.svg" />
            <div className="group-child100" />
          </div>
        </div>
        <div className="sustainable-development-goals-parent19">
          <img
            className="sustainable-development-goals-42"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--18@2x.png"
          />
          <div className="group-child101" />
        </div>
        <div className="sustainable-development-goals-parent20">
          <img
            className="sustainable-development-goals-42"
            alt=""
            src="/sustainable-development-goals--a-challenge-for-education--13@2x.png"
          />
          <div className="group-child102" />
        </div>
        <div className="rectangle-parent41">
          <div className="group-child103" />
          <div className="group-child104" />
          <div className="group-child105" />
        </div>
      </div>
      <img className="coinup-icon8" alt="" src="/coinup1@2x.png" />
      <img className="log-in-icon9" alt="" src="/login.svg" />
      <img className="mask-group-63" alt="" src="/mask-group-61@2x.png" />
      <div className="sign-in1">Sign in</div>
      <div className="next7" onClick={onNextTextClick}>
        Next
      </div>
      <div className="already-have-an" onClick={onAlreadyHaveAnClick}>
        I have an account
      </div>
      <div className="back-group">
        <div className="back1">Back</div>
        <div className="arrow-left23">
          <div className="arrow-left-child21" />
          <img className="path-58-icon1" alt="" src="/path-58.svg" />
        </div>
      </div>
      <div className="create-an-account2" onClick={onCreateAnAccountClick}>
        Sign up
      </div>
      <div className="arrow-left24" onClick={onArrowLeftContainerClick}>
        <div className="arrow-left-child22" />
        <img className="path-58-icon1" alt="" src="/path-95.svg" />
      </div>
      <div className="line-parent4">
        <div className="group-child106" />
        <div className="email2">Email</div>
      </div>
      <div className="sign-in-with1">Sign up with google</div>
    </div>
  );
};

export default SamsungGalaxyS1018;
