const WorkOut = (currentTime, leaveWorkClickTime, setleaveWorkClickTime, setisWorkdisabled, setisleaveWorkdisabled) => {
    setleaveWorkClickTime(currentTime);
    if (window.confirm("퇴근하시겠습니까?")) {
        fetch('/api/work-out', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ workClickTime: currentTime })
        })
        .then(response => response.json())
        .then(data => {
            console.log('퇴근 시간 저장 성공:', data);
        })
        .catch((error) => {
            console.error('퇴근 시간 저장 실패:', error);
        });
        setisleaveWorkdisabled(true); // 퇴근 버튼이 비활성화됨
        setisWorkdisabled(false); // 출근 버튼이 다시 활성화됨
    }
};

export default WorkOut;