const WorkOut = (currentTime, leaveWorkClickTime, setleaveWorkClickTime, setisWorkdisabled, setisleaveWorkdisabled) => {
    setleaveWorkClickTime(currentTime);
    if (window.confirm("퇴근하시겠습니까?")) {
        setisleaveWorkdisabled(true); // 퇴근 버튼이 비활성화됨
        setisWorkdisabled(false); // 출근 버튼이 다시 활성화됨
    }
};

export default WorkOut;