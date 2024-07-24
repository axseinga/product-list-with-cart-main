import React from "react";
import { useBlockOverflow } from "../hooks/useBlockOverflow";

type ModalProps = {
  children: React.ReactNode;
  isModalOpen: boolean;
};

export const Modal = ({ children, isModalOpen }: ModalProps) => {
  const modalRef = React.useRef<HTMLDialogElement | null>(null);
  useBlockOverflow(isModalOpen);

  return (
    <dialog
      open={isModalOpen}
      ref={modalRef}
      className="fixed inset-0 flex h-full w-full overflow-y-auto bg-gray-900 bg-opacity-60 items-end sm:items-center sm:justify-center"
    >
      <div className="w-full rounded-xl bg-white shadow-xl min-h-min sm:max-w-[35rem]">{children}</div>
    </dialog>
  );
};
