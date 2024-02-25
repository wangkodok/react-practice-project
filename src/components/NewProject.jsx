import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="닫기">
        <h2 className="text-xl font-bold text-stone-700 my-4">
          빈 칸이 있습니다.
        </h2>
        <p className="text-stone-600 mb-4">
          제목, 상세설명, 마감일을 작성해주세요.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              취소
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              저장
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="제목" />
          <Input ref={description} label="상세설명" textarea />
          <Input type="date" ref={dueDate} label="마감일" />
        </div>
      </div>
    </>
  );
}
