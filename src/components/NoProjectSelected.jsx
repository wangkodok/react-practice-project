import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={noProjectImage}
        alt="빈 할 일 목록"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        선택된 프로젝트가 없습니다.
      </h2>
      <p className="text-stone-400 mb-4">
        프로젝트를 선택하거나 새로운 프로젝트를 시작하십시오.
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>새 프로젝트 추가</Button>
      </p>
    </div>
  );
}
