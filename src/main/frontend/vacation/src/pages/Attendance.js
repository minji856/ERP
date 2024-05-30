import React , { useState }from 'react';
import moment from 'moment';
// 자동으로 한국 시간을 불러오지만 import 추가 함
import 'moment/locale/ko';

const Attendance = () => {
    /* 출근시간 저장용 */
    const [workClickTime, setworkClickTime] = useState(null);
    const [leaveWorkClickTime, setleaveWorkClickTime] = useState(null);
    const currentTime = new Date().toLocaleString();

    // moment.js를 이용한 시간 출력
    const nowTime = moment().format('YY-MM-DD HH:mm:ss');

    const handleClockIn = () => {
        setworkClickTime(currentTime);
        alert("출근하시겠습니까?");
        console.log('출근한 시간: ' + workClickTime);
    };

    const handleClockOut = () => {
        setleaveWorkClickTime(currentTime);
        // 비활성화로 설정해두기
        console.log('퇴근했습니다.' + leaveWorkClickTime);
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
                                <button onClick={handleClockIn}>출근하기</button><br/>
                                <button>외근</button><br/>
                                <button onClick={handleClockOut}>퇴근하기</button>
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
