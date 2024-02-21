import Button from "./Button";

export default function ProjectsSidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-50">
        프로젝트 project
      </h2>
      <div>
        <Button>추가</Button>
      </div>
      <ul>
        <li></li>
      </ul>
    </aside>
  );
}
