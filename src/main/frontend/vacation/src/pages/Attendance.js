import React , { useState }from 'react';
// import moment from 'moment';
import 'moment/locale/ko';
import { handleWorkIn, handleWorkOut} from 'components/WorkIn';

const Attendance = () => {
    const [workClickTime, setworkClickTime] = useState(null);
    const [leaveWorkClickTime, setleaveWorkClickTime] = useState(null);
    const [isWorkdisabled, setisWorkdisabled] = useState(false);
    const [isleaveWorkdisabled, setisleaveWorkdisabled] = useState(true);
    const currentTime = new Date().toLocaleString();
    
    return (
        <>
        {/* 여기에 현재 접속한 사원이름 출력과 연차현황 출력 */}
        <div className="container mt-5">
            <h1 className="h3 mb-0 text-gray-800">출퇴근</h1>
            <div className="card mt-4">
                <div className="card-header">
                    <h5>근태관리</h5>
                </div>
                <div className="card-body">
                    <div className="col-md-12">
                        <header>
                            <div>
                                <h1>현재 시간: {new Date().toLocaleString()}</h1>
                                <button onClick={() => 
                                    handleWorkIn(currentTime, workClickTime, setworkClickTime, setisWorkdisabled, setisleaveWorkdisabled)} 
                                    disabled={isWorkdisabled}>출근하기
                                </button>
                                <button>외근</button>
                                <button onClick={() => 
                                    handleWorkOut(currentTime, leaveWorkClickTime, setleaveWorkClickTime, setisWorkdisabled, setisleaveWorkdisabled)} 
                                    disabled={isleaveWorkdisabled}>퇴근하기
                                </button>
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
