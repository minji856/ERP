import React, { useState } from 'react';
import axios from 'axios';

/**
 * 휴가 신청 양식 컴퍼넌트입니다.
 */
const VacationForm = () => {
  const [vacationType, setVacationType] = useState('');
  const [holidayStart, setHolidayStart] = useState('');
  const [holidayEnd, setHolidayEnd] = useState('');
  const [reason, setReason] = useState('');

  const handleType = (event) => {
    event.preventDefault();
    setVacationType(event.target.value);}
  
  const handleHolidayStart = (event) => {
    event.preventDefault();
    setHolidayStart(event.target.value);
  };

  const handleHolidayEnd = (event) => {
    event.preventDefault();
    setHolidayEnd(event.target.value);
  };

  const initialFormState = {
    vacationType: '',
    holidayStart: '',
    holidayEnd: '',
    reason: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  const submitHandler = (event) => {
    event.preventDefault();

    if (formData.vacationType === 'NotSelect') {
      alert('휴가 구분을 선택해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append("vacationType", vacationType);
    formData.append("holidayStart", holidayStart);
    formData.append("holidayEnd", holidayEnd);
    formData.append("reason", reason);

    // formData 객체가 제대로 만들어졌는지 확인
    console.log(vacationType, holidayStart, holidayEnd, reason);
  };

  /**
   * 신청취소를 누르면 예 누를시 작성한 데이터가 초기화됩니다.
   */
  const handleReset = () => {
    if (window.confirm('신청을 취소하시겠습니까? 예 를 누를시 입력하신 내용이 삭제됩니다.')) {
      setFormData(initialFormState);
    }
  };

  return (
    <form className="vacationForm" onSubmit={submitHandler} method="post" action="/api/vacRequest">
      
      <table>
        <tbody>
          <tr>
            <td>
              휴가구분
              <select name="vacationType"
                required
              >
                <option value="NotSelect"> —선택— </option>
                <option value="MonthlyLeave"> 월차 </option>
                <option value="HalfDay"> 반차 </option>
                <option value="AnnualLeave"> 연차 </option>
                <option value="FamilyLeave"> 경조휴가 </option>
                <option value="SickLeave"> 병가 </option>
                <option value="Other"> 기타 </option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              휴가 기간
              <input
                type="date"
                name="holidayStart"
                required
              /> ~
              <input
                type="date"
                name="holidayEnd"
                required
              />
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              (비고)사유 : 
              <textarea
                name="reason"
                placeholder="휴가 사유를 입력하세요."
                required
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
      <input type="submit" value="신청완료" /><button type="button" onClick={handleReset}>신청취소</button>
    </form>
  );
};

export default VacationForm;
