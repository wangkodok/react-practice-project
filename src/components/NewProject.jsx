import Input from "./Input";

export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>취소</button>
        </li>
        <li>
          <button>저장</button>
        </li>
      </menu>
      <div>
        <Input label="제목" />
        <Input label="상세설명" textarea />
        <Input label="마감일" />
      </div>
    </div>
  );
}
