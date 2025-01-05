"use client";

import React, { useState, useEffect, useMemo } from 'react';
import ResumeComponent from './ResumeComponent';

// 3번 코드
// 2번코드의 경우 education/experience data가 한개만 바뀌어도 중복으로 transform
// memo에 둘다 저장해두고 둘중하나만 바뀌면 나머지하나는 저장해둔값 활용
export default function ResumeState() {
  const [eduData, setEduData] = useState([]);
  const [expData, setExpData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resEdu = await fetch('/api/education');
      const resExp = await fetch('/api/experiences');

      const resultEdu = await resEdu.json();
      const resultExp = await resExp.json();

      setEduData(resultEdu);
      setExpData(resultExp);
    }

    fetchData();
  }, []); //[] 초기에만 Loading 특별히 변경 기준되는 모니터링 state가 없음.


  //eduData를 메모, Exp변경 시 별도 연산없이 저장된 eduData 활용
  const transformedEduData = useMemo(
    () =>
      Array.isArray(eduData)
        ? eduData
        : Object.values(eduData).flatMap((item) =>
            Array.isArray(item) ? item : Object.values(item)
          ),
    [eduData]
  );

  //expData를 메모, Edu변경 시 별도 연산없이 저장된 expData 활용
  const transformedExpData = useMemo(
    () =>
      Array.isArray(expData)
        ? expData
        : Object.values(expData).flatMap((item) =>
            Array.isArray(item) ? item : Object.values(item)
          ),
    [expData]
  );

  if (!transformedEduData.length || !transformedExpData.length) {
    return <p>Loading...</p>;
  }

  return <ResumeComponent experiences={transformedExpData} education={transformedEduData} />;
}