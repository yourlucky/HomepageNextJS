'use client';

import React, { useState, useEffect } from 'react';
import ResumeComponent from './ResumeComponent';

//1번 코드
// 여기서의 useEffect는 트리거를 빈 배열로 넣어 초기 로딩에만 작동하고 다시 동작하지 않음
//렌더를 다시하는 것은 기준이 되는 데이터는 useEffect가장 뒤에 입력

//참고.useEffect는 state외에도 몇몇 trigger 등을 통해 동작할 수 있음
//ex)이벤트리스너(키보드/마우스), 타이머, API호출 등

export default function ResumeState() {
  const [resumeData, setResumeData] = useState({
    experiences: [],
    education: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const [resEdu, resExp] = await Promise.all([
        fetch('/api/education'),
        fetch('/api/experiences'),
      ]);

      const resultEdu = await resEdu.json();
      const resultExp = await resExp.json();

      const transformData = (data) =>
        Array.isArray(data)
          ? data
          : Object.values(data).flatMap((item) =>
              Array.isArray(item) ? item : Object.values(item)
            );

      setResumeData({
        experiences: transformData(resultExp),
        education: transformData(resultEdu),
      });
      setLoading(false);
    }

    fetchData();
  }, []); //[] 초기에만 Loading 특별히 변경 기준되는 모니터링 state가 없음.

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ResumeComponent
      experiences={resumeData.experiences}
      education={resumeData.education}
    />
  );
}
