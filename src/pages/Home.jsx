import React from 'react';

export default function Home() {
  return (
    <section className="text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="profile"
        className="mx-auto mb-4 h-32 w-32 rounded-full"
      />
      <h1 className="text-2xl font-bold">안녕하세요, Turin입니다!</h1>
      <p className="text-gray-600 dark:text-gray-300">중학생 개발자, 열정 가득한 신입.</p>
    </section>
  );
}
