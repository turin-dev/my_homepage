import React from 'react';

export default function About() {
  const skills = ['JavaScript', 'React', 'Node.js'];
  const timeline = [
    { year: '2023', event: '코딩 시작' },
    { year: '2024', event: '첫 프로젝트 발표' },
  ];

  return (
    <section>
      <h2 className="mb-4 text-xl font-bold">소개</h2>
      <p className="mb-4">Turin은 중학생 개발자로 웹과 봇 개발을 좋아합니다.</p>
      <h3 className="mb-2 font-semibold">기술 스택</h3>
      <div className="mb-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="rounded bg-gray-200 px-2 py-1 text-sm dark:bg-gray-700">
            {skill}
          </span>
        ))}
      </div>
      <h3 className="mb-2 font-semibold">타임라인</h3>
      <ul className="border-l-2 border-gray-300 pl-4 dark:border-gray-700">
        {timeline.map((item) => (
          <li key={item.year} className="mb-2">
            <span className="font-bold">{item.year}</span> - {item.event}
          </li>
        ))}
      </ul>
    </section>
  );
}
