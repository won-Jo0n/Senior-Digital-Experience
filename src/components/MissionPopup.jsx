import React from "react";
import "./MissionPopup.css";

const MissionPopup = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <div className="popup-header">
          <span className="popup-title">미션</span>
          <button className="popup-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="popup-body">
          <div className="popup-message-box">
            <p className="popup-message">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionPopup;
