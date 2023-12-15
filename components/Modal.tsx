import ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";
import { ProjectModalItem } from "./ProjectModalItem";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import { BsFillPeopleFill } from "@react-icons/all-files/bs/BsFillPeopleFill";
import { FaRegCalendarAlt } from "@react-icons/all-files/fa/FaRegCalendarAlt";
import { FaCode } from "@react-icons/all-files/fa/FaCode";
import { RiArrowDropRightLine } from '@react-icons/all-files/ri/RiArrowDropRightLine';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  project: string;
}

const Modal = ({ open, onClose, project }: ModalProps) => {
  const { t } = useTranslation('project');
  if (!open) return null;
  const thisProject = ProjectModalItem.find((item) => (item.id === project));
  return ReactDOM.createPortal(
    <>
      <div key={thisProject?.id} className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="modal-overlay absolute w-full h-full bg-textGreen opacity-10"></div>
        <div className="max-w-3xl relative w-auto my-6 mx-auto px-6">
          <div className="rounded relative flex flex-col w-full mx-auto bg-bodyColor">
            <button className="absolute top-0 right-0 p-2 text-2xl x-10 z-10 text-textGreen" onClick={onClose}>
              <IoClose />
            </button>
            <div className="relative p-9 text-textLight">
              <p className="mb-3">{thisProject?.image}</p>
              <p className="ml-1 text-2xl font-titleFont font-bold tracking-wide text-textGreen text-center">{thisProject?.title}</p>
              <div className="ml-1 text-xs tracking-wide flex items-end gap-3 mb-5 px-0.5 text-textDark justify-center">
                <div className="flex gap-1 items-center">
                  <BsFillPeopleFill size={13} />
                  {thisProject?.team}
                </div>
                <div className="flex items-center gap-1">
                  <FaRegCalendarAlt size={13} />
                  {thisProject?.period}
                </div>
                {thisProject?.gh && <div>
                  <a href={thisProject?.gh} target="_blank">
                    <FaCode size={15} className="text-textGreen" />
                  </a>
                </div>}
              </div>
              {thisProject?.role.map((item, i) => (
                <div key={i} className="flex items-start text-xs sml:text-base tracking-wide">
                  <p><RiArrowDropRightLine className="text-textGreen" size={27} /></p>
                  <p className="leading-snug">{t(`${item}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("global-modal") as HTMLElement
  )
}

export default Modal
