import React from "react";

function Toast({ alerts }) {
  return (
    <div className="toast-container">
      {alerts.map((alert, index) => (
        <div key={index} className={`toast ${alert.type}`}>
          {alert.message}
        </div>
      ))}
    </div>
  );
}

export default Toast;
