// src/components/MobileMenu.tsx
'use client';

import styled from 'styled-components';
import React from 'react';

// --- Styled Components ---

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.5); opacity: ${props => (props.$isOpen ? 1 : 0)};
  visibility: ${props => (props.$isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out; z-index: 100;
`;

const MenuWrapper = styled.nav<{ $isOpen: boolean }>`
  position: fixed; top: 0; right: 0; width: 80%; max-width: 300px; height: 100%;
  background-color: #0d2c54; transform: translateX(${props => (props.$isOpen ? '0%' : '100%')});
  transition: transform 0.3s ease-in-out; z-index: 101; padding: 20px;
  display: flex; flex-direction: column;
`;

const NavLink = styled.button`
  background: none; border: none; color: white; text-decoration: none;
  font-family: 'Montserrat', sans-serif; font-size: 1.2rem; padding: 15px 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); cursor: pointer;
  text-align: left; width: 100%;
  &:hover { background-color: rgba(255, 255, 255, 0.05); }
`;

// --- Componente React ---
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />
      <MenuWrapper $isOpen={isOpen}>
        <NavLink onClick={(e) => handleScrollTo(e, 'servicos')}>Serviços</NavLink>
        <NavLink onClick={(e) => handleScrollTo(e, 'diferenciais')}>Diferenciais</NavLink>
        <NavLink onClick={(e) => handleScrollTo(e, 'depoimentos')}>Depoimentos</NavLink>
        <NavLink onClick={(e) => handleScrollTo(e, 'processo')}>Nosso Processo</NavLink>
        <NavLink onClick={(e) => handleScrollTo(e, 'contato')}>Contato</NavLink>
      </MenuWrapper>
    </>
  );
}