export default function About() {
  const skills = ['JavaScript', 'Python', 'React', 'Tailwind', 'Node.js'];
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>
          Turin은 열정적인 중학생 개발자로, 다양한 웹 기술을 배우고 프로젝트에 적용하고 있습니다.
        </p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Timeline</h3>
        <ol className="border-l border-gray-300 dark:border-gray-700 ml-2">
          <li className="pl-4 mb-4">
            <div className="text-sm text-gray-500">2023</div>
            <p className="font-medium">프로그래밍 시작</p>
          </li>
          <li className="pl-4 mb-4">
            <div className="text-sm text-gray-500">2024</div>
            <p className="font-medium">첫 디스코드 봇 배포</p>
          </li>
          <li className="pl-4">
            <div className="text-sm text-gray-500">2025</div>
            <p className="font-medium">포트폴리오 사이트 공개</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
