import React,{useEffect,useState} from "react";
import moment from "moment"
import ClockPresenter from "./ClockPresenter";

function ClockContainer() {
  const [time, setTime] = useState("");
  const [alarm, setAlarm] = useState(null);

  useEffect(() => {
    const timeInterver = setInterval(()=>{
      const time = moment().format("HH:mm:ss");
      setTime(time);
    },100);

    return () => {
      clearInterval(timeInterver);
    }
  }, [])

  useEffect(() => {
    return () => {
      clearTimeout(alarm)
    }
  }, [alarm]);

  
  const handleClickAlarm=(time) => () =>{

    if(alarm) clearTimeout(alarm)

    const alarmTimeout=setTimeout(()=>{
      alert("예약한 알람입니다")
    },time);

    setAlarm(alarmTimeout)
  }
  

  return <ClockPresenter time = {time} onClickAlarm={handleClickAlarm}/>;
}

export default ClockContainer;
