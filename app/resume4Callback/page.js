'use client';

import React, { useState, useEffect, useCallback } from 'react';
import ResumeComponent from './ResumeComponent';

// 4번 코드 초기버전
// 주요 변경 내용 state에 fetch데이터를 넣으니 fetch전 길이 check로 loading에서 못나옴
// useCallbac은 동기로 처리하여 fetch한 eduData가 아닌 transformed된 값을 넣음
//--> 이렇게 하니 되긴하나 계속 무한루프마냥 데이터를 받음(컴퓨터 과부하)
// fetchData를 모니터링 및 업데이트에 따른 전체코드 다시 렌더링
// fetch 및 transform은 메모제이션 실행, !transformedEduData.length || !transformedExpData.length 렌더 시 통과하여 return 도달

export default function ResumeState() {
  const [transformedEduData, setTransformedEduData] = useState([]);
  const [transformedExpData, setTransformedExpData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const resEdu = await fetch('/api/education'); // education 데이터 호출
      const resExp = await fetch('/api/experiences'); // experiences 데이터 호출

      const resultEdu = await resEdu.json();
      const resultExp = await resExp.json();

      // 데이터 변환 및 상태 업데이트
      const transformData = (data) =>
        Array.isArray(data)
          ? data
          : Object.values(data).flatMap((item) =>
              Array.isArray(item) ? item : Object.values(item)
            );

      setTransformedEduData(transformData(resultEdu)); // 변환된 eduData 상태 업데이트
      setTransformedExpData(transformData(resultExp)); // 변환된 expData 상태 업데이트
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []); //[] 초기에만 Loading 특별히 변경 기준되는 모니터링 state가 없음.

  useEffect(() => {
    fetchData();
    //}, [transformedExpData,transformedEduData ]); // transformedEduData,transformedExpData 상태를 모니터링
  }, [fetchData]); // fetchData가 변경 모니터링

  // transformedEduData와 transformedExpData가 비어 있으면 로딩 상태 표시
  if (!transformedEduData.length || !transformedExpData.length) {
    return <p>Loading...</p>;
  }

  return (
    <ResumeComponent
      experiences={transformedExpData} // 변환된 expData 전달
      education={transformedEduData} // 변환된 eduData 전달
    />
  );
}
