import React , { useState }from 'react';
import moment from 'moment';
// 자동으로 한국 시간을 불러오지만 import 추가 함
import 'moment/locale/ko';

const Attendance = () => {
    /* 출근시간 저장용 */
    const nowTime = moment().format('YY-MM-DD HH:mm:ss');
    const [workClickTime, setworkClickTime] = useState(nowTime);
    const [leaveWorkClickTime, setleaveWorkClickTime] = useState(nowTime);
    const [isWorkdisabled, setisWorkdisabled] = useState(false);
    const [isleaveWorkdisabled, setisleaveWorkdisabled] = useState(true);
    const currentTime = new Date().toLocaleString();

    // moment.js를 이용한 시간 출력

    const handleClockIn = () => {
        setworkClickTime(currentTime);
        window.confirm("출근하시겠습니까?");
        setisleaveWorkdisabled(false); // 퇴근 버튼이 활성화됨
        console.log('출근한 시간: ' + workClickTime);
        setisWorkdisabled(true); // 출근 버튼이 비활성화됨
    };
    
    const handleClockOut = () => {
        setleaveWorkClickTime(currentTime);
        alert("퇴근하시겠습니까?");
        // 비활성화로 설정해두기
        console.log('퇴근한 시간: ' + leaveWorkClickTime);
    };

    return (
        <>
        {/* 여기에 현재 접속한 사원이름 출력과 연차현황 출력 */}
        <div class="container mt-5">
            <h1 class="h3 mb-0 text-gray-800">출퇴근</h1>
        <div className="card mt-4">
            <div className="card-header">
                <h5>출퇴근/근태현황</h5>
            </div>
                <div class="card-body">
                    <div className="col-md-12">
                        <header>
                            <div>
                                <h1>현재 시간: {new Date().toLocaleString()}</h1>
                                <h1>현재 시간(moment 버전): {nowTime}</h1>
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
