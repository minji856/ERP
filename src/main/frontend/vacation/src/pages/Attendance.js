import React , { useState, useEffect }from 'react';
import moment from 'moment';
// 자동으로 한국 시간을 불러오지만 import 추가 함
import 'moment/locale/ko';

const Attendance = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    // useEffect를 사용하여 현재 시간을 갱신합니다.
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        // 컴포넌트가 언마운트되면 clearInterval을 호출하여 setInterval을 정리합니다.
        return () => clearInterval(intervalId);
    }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행되도록 합니다.
    
    const nowTime = moment().format('YYYY-MM-DD HH:mm');
    //console.log(nowTime)

    const handleClockIn = () => {
        // 출근 기능을 수행할 코드를 추가합니다.
        // 이미 출근된 상태면 출근 버튼 비활성화
        alert("출근되었습니다.")
        console.log('출근했습니다.');
    };

    const handleClockOut = () => {
        // 퇴근 기능을 수행할 코드를 추가합니다.
        console.log('퇴근했습니다.');
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
                                <h1>현재 시간: {currentTime.toLocaleTimeString()}</h1>
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
