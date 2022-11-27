import React from "react";

function ClockPresenter() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
      <div style={{ height: 50, backgroundColor: '#cff', width: '100%' }}>
        <h3>Clock</h3>
      </div>

      <section style={{ height: 300, backgroundColor: '#ccc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3>HH:MM:SS</h3>
      </section>
    </div>
  );
}

export default ClockPresenter;
