import React , { useState }from 'react';
// import moment from 'moment';
// 자동으로 한국 시간을 불러오지만 import 추가 함
import 'moment/locale/ko';
import WorkIn from 'components/WorkIn';

const Attendance = () => {
    // moment.js를 이용한 시간 출력
    const [workClickTime, setworkClickTime] = useState(null);
    const [leaveWorkClickTime, setleaveWorkClickTime] = useState(null);
    const [isWorkdisabled, setisWorkdisabled] = useState(false);
    const [isleaveWorkdisabled, setisleaveWorkdisabled] = useState(true);
    const currentTime = new Date().toLocaleString();
    
    /* 출근시간을 저장하는 메서드입니다. */
    const handleClockIn = () => {
        setworkClickTime(currentTime);
        if(window.confirm("출근하시겠습니까?")){
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
    
    /* 퇴근시간을 저장하는 메서드입니다. */
    const handleClockOut = () => {
        setleaveWorkClickTime(currentTime);
        if(window.confirm("퇴근하시겠습니까?")){
            setisleaveWorkdisabled(true); // 퇴근 버튼이 비활성화됨
            setisWorkdisabled(false); // 출근 버튼이 다시 활성화됨
        }
    };

    return (
        <>
        {/* 여기에 현재 접속한 사원이름 출력과 연차현황 출력 */}
        <div className="container mt-5">
            <h1 className="h3 mb-0 text-gray-800">출퇴근</h1>
            <div className="card mt-4">
                <div className="card-header">
                    <h5>출퇴근/근태현황</h5>
                </div>
                <div className="card-body">
                    <div className="col-md-12">
                        <header>
                            <div>
                                <h1>현재 시간: {new Date().toLocaleString()}</h1>
                                <button onClick={handleClockIn} disabled={isWorkdisabled}>출근하기</button><br/>
                                <button>외근</button><br/>
                                <button onClick={handleClockOut} disabled={isleaveWorkdisabled}>퇴근하기</button>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Attendance;
