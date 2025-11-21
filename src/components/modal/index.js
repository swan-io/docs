import React, { useEffect } from "react";
import "./styles.css";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.147052 0.303788L0.21967 0.21967C0.485936 -0.0465966 0.9026 -0.0708026 1.19621 0.147052L1.28033 0.21967L7.75 6.689L14.2197 0.21967C14.5126 -0.0732233 14.9874 -0.0732233 15.2803 0.21967C15.5732 0.512563 15.5732 0.987437 15.2803 1.28033L8.811 7.75L15.2803 14.2197C15.5466 14.4859 15.5708 14.9026 15.3529 15.1962L15.2803 15.2803C15.0141 15.5466 14.5974 15.5708 14.3038 15.3529L14.2197 15.2803L7.75 8.811L1.28033 15.2803C0.987437 15.5732 0.512563 15.5732 0.21967 15.2803C-0.0732233 14.9874 -0.0732233 14.5126 0.21967 14.2197L6.689 7.75L0.21967 1.28033C-0.0465966 1.01406 -0.0708026 0.5974 0.147052 0.303788L0.21967 0.21967L0.147052 0.303788Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
