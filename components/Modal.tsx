import ReactDOM from "react-dom";
import { ProjectModalItem } from "./ProjectModalItem";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  project: string;
}

const Modal = ({ open, onClose, project }: ModalProps) => {
  if (!open) return null;
  const thisProject = ProjectModalItem.find((item)=>(item.id === project));
  const imageURL = thisProject?.image;

  return ReactDOM.createPortal(
    <>
      <div key={thisProject?.id} className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
        <div className="max-w-containerxs relative w-auto my-6 mx-auto">
          <div className="w-10/12 rounded-md relative flex flex-col w-full bg-white mx-auto">
              <button className="absolute top-0 right-0 p-2 text-xl x-10 z-10" onClick={onClose}>
                  <IoClose />
              </button>
            <div className="relative p-6 flex flex-col items-center justify-center">
              <div className="">{thisProject?.image}</div>
              <div className="">dd</div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("global-modal") as HTMLElement
  )
}

export default Modal
