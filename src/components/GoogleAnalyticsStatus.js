import React from "react";

function GoogleAnalyticsStatus() {
  function checkGoogleAnalytics() {
    if (typeof window.gtag === "function") {
      return "Google Analytics is connected.";
    } else {
      return "Google Analytics is not connected.";
    }
  }

  return (
    <div>
      <h2>Google Analytics Status</h2>
      <p>{checkGoogleAnalytics()}</p>
    </div>
  );
}

export default GoogleAnalyticsStatus;
