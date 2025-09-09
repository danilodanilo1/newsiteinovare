// src/components/Header.tsx
'use client';

import { useState, useEffect } from 'react'; // Importar useState e useEffect
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu'; // Importar o novo componente

// --- Styled Components ---
const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  background-color: transparent;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: #0d2c54;
  cursor: pointer;
  z-index: 102; /* Garante que o botão fique acima do menu e overlay */
  transition: color 0.3s ease;
  margin-right: 1.5rem;
`;

// --- Componente React ---
export default function Header() {
  // 1. Adicionar estado para controlar o menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. Lógica para travar o scroll do body quando o menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function para garantir que o scroll volte ao normal se o componente for desmontado
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <HeaderWrapper>
        <LogoContainer href="/">
          <Image
            src="/images/triangulosemnome.svg"
            alt="INOVARE Redes de Proteção"
            width={70}
            height={40}
            priority
          />
        </LogoContainer>

        {/* 3. Botão que alterna o estado e muda o ícone */}
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>
      </HeaderWrapper>

      {/* 4. Renderizar o menu, passando o estado e a função de fechar */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}