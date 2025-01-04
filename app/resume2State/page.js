"use client";
import React, { useState, useEffect } from 'react';
import ResumeComponent from './ResumeComponent';

//2번 코드
//useState가 활용된 데이터가 변경될 때 해당 컴포넌트를 다시 렌더함

//추가 내용.transformData를 외부로 분리하여 useEffect적용
//transformData의 useEffect의 경우 [eduData, expData] 로 eduData, expData  변경 시에 포멧변경

export default function ResumeState() {
  const [eduData, setEduData] = useState([]);
  const [expData, setExpData] = useState([]);
  const [transformedEduData, setTransformedEduData] = useState([]);
  const [transformedExpData, setTransformedExpData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [resEdu, resExp] = await Promise.all([
          fetch('/api/education'),
          fetch('/api/experiences')
        ]);

        const resultEdu = await resEdu.json();
        const resultExp = await resExp.json();

        setEduData(resultEdu);
        setExpData(resultExp);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []); //[] 초기에만 Loading 특별히 변경 기준되는 모니터링 state가 없음.

  // ResumeComponent에 맞게 포멧변경 useState 적용
  useEffect(() => {
    const transformData = (data) =>
      Array.isArray(data)
        ? data
        : Object.values(data).flatMap((item) =>
            Array.isArray(item) ? item : Object.values(item)
          );

    setTransformedEduData(transformData(eduData));// eduData 변환 후 set을 통한 업데이트
    setTransformedExpData(transformData(expData));// expData 변환 후 set을 통한 업데이트
  }, [eduData, expData]);

  //edu,exp모두 transfrom 되지 않으면 loading 표시 
  if (!transformedEduData.length || !transformedExpData.length) {
    return <p>Loading...</p>;
  }

  return (
    <ResumeComponent
      experiences={transformedExpData}
      education={transformedEduData}
    />
  );
}