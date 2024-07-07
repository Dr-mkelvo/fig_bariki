import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ArrowLeft.css";

const ArrowLeft = () => {
  const navigate = useNavigate();

  const onArrowLeftContainerClick = useCallback(() => {
    navigate("/samsung-galaxy-s10-10");
  }, [navigate]);

  return (
    <div className="arrow-left30" onClick={onArrowLeftContainerClick}>
      <div className="arrow-left-child28" />
      <img className="path-95-icon11" alt="" src="/path-95.svg" />
    </div>
  );
};

export default ArrowLeft;
