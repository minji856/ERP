import React , { useState }from 'react';
import WorkIn from 'components/WorkIn';
import WorkOut from 'components/WorkOut';
import NowClock from 'components/NowClock';
import OnlyNumClock from 'components/OnlyNumClock';

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
                                <h1>현재 시간 : <NowClock/></h1>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h3>출근 시간 퇴근 시간</h3>
                            <br></br>
                            <br></br>
                            <br></br>
                            {/* 공백 출력 <p>금붕어<Span />|<Span />과장</p> */}
                            <h1><OnlyNumClock/></h1>
                            <div>
                                <button onClick={() => 
                                    WorkIn(currentTime, workClickTime, setworkClickTime, setisWorkdisabled, setisleaveWorkdisabled)} 
                                    disabled={isWorkdisabled}>출근하기<br></br><OnlyNumClock/>
                                </button>
                                <button>외근</button>
                                <button onClick={() => 
                                    WorkOut(currentTime, leaveWorkClickTime, setleaveWorkClickTime, setisWorkdisabled, setisleaveWorkdisabled)} 
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


/* 모달창 버전 
import React, { useState } from 'react';
import Modal from 'react-modal';
import WorkIn from 'components/WorkIn';
import WorkOut from 'components/WorkOut';
import NowClock from 'components/NowClock';
import OnlyNumClock from 'components/OnlyNumClock';

const Attendance = () => {
    const [workClickTime, setworkClickTime] = useState(null);
    const [leaveWorkClickTime, setleaveWorkClickTime] = useState(null);
    const [isWorkdisabled, setisWorkdisabled] = useState(false);
    const [isleaveWorkdisabled, setisleaveWorkdisabled] = useState(true);
    const [modalIsOpen, setIsOpen] = useState(false);
    
    const currentTime = new Date().toLocaleString();

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <>
        {/* 여기에 현재 접속한 사원이름 출력과 연차현황 출력 }
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
                                <button onClick={openModal}>출퇴근 관리</button>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
        </div>

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Attendance Modal"
        >
            <h2>근태관리</h2>
            <div>
                <h1>현재 시간 : <NowClock /></h1>
                <br></br>
                <h3>출근 시간 퇴근 시간</h3>
                <br></br>
                <h1><OnlyNumClock /></h1>
                <div>
                    <button onClick={() => {
                        WorkIn(currentTime, workClickTime, setworkClickTime, setisWorkdisabled, setisleaveWorkdisabled);
                        closeModal();
                    }} disabled={isWorkdisabled}>출근하기<br></br><OnlyNumClock />
                    </button>
                    <button>외근</button>
                    <button onClick={() => {
                        WorkOut(currentTime, leaveWorkClickTime, setleaveWorkClickTime, setisWorkdisabled, setisleaveWorkdisabled);
                        closeModal();
                    }} disabled={isleaveWorkdisabled}>퇴근하기
                    </button>
                </div>
                <button onClick={closeModal}>닫기</button>
            </div>
        </Modal>
        </>
    );
}

export default Attendance;
*/