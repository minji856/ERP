const WorkIn = (currentTime, workClickTime, setworkClickTime, setisWorkdisabled, setisleaveWorkdisabled) => {
    setworkClickTime(currentTime);
    if (window.confirm("출근하시겠습니까?")) {
        fetch('/api/work-in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ workClickTime: currentTime })
        })
        .then(response => response.json())
        .then(data => {
            console.log('출근 시간 저장 성공:', data);
        })
        .catch((error) => {
            console.error('출근 시간 저장 실패:', error);
        });
        setisleaveWorkdisabled(false); // 퇴근 버튼이 활성화됨
        setisWorkdisabled(true); // 출근 버튼이 비활성화됨
    }
};

export default WorkIn;