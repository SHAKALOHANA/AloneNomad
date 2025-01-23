import React from 'react';
import { createPortal } from 'react-dom';
import * as S from './Modal.css';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ReviewModalProps) {
  if (typeof window === 'undefined') return null;
  if (!isOpen) return null;

  const portalRoot = document.getElementById('portal');
  if (!portalRoot) return null;

  return createPortal(
    <div className={S.overlay} onClick={onClose}>
      <div className={S.modalContainer} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    portalRoot
  );
}
