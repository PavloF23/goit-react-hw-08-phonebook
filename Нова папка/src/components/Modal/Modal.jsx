import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWrap } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  const handleEscape = evt => { 
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdrop = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdrop}>
      <ModalWrap>{children}</ModalWrap>
    </Overlay>,
    modalRoot
  );
}