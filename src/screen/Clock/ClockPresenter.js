import React from "react";

function ClockPresenter({time,onClickAlarm}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
      <div style={{ height: 50, backgroundColor: '#cff', width: '100%' }}>
        <h3>Clock</h3>
      </div>

      <section style={{ height: 300, backgroundColor: '#ccc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3>{time}</h3>
      </section>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button style={{ flex: 1, height: 30 }} onClick={onClickAlarm(60000)}>1분</button>
        <button style={{ flex: 1, height: 30 }} onClick={onClickAlarm(10000)}>10초</button>
      </div>
      </div>
  );
}

export default ClockPresenter;
