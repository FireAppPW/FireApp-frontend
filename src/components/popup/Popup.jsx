import React from "react";
import "./popup.scss";

function Popup({ message, onClose }) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2 className="popup-header">New Emergency!</h2>
        <p className="popup-message">{message}</p>
        <div className="button-container">
          <button className="button button-yes" onClick={onClose}>
            Accept
          </button>
          <button className="button button-maybe" onClick={onClose}>
            Maybe
          </button>
          <button className="button button-no" onClick={onClose}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
