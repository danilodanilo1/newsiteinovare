// src/components/HeroSection.tsx
'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

interface SectionProps {
  id?: string;
}

// --- Styled Components ---

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
`;

const BackgroundImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(13, 44, 84, 0.7) 0%,
    rgba(13, 44, 84, 0) 60%
  );
  z-index: -1;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  padding: 0 20px;
  max-width: 600px;
  /* Adicionado para garantir que os itens fiquem empilhados corretamente */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// ▼▼▼ ALTERAÇÃO 1: Criamos um container (div) para o logo ▼▼▼
const ImageLogoContainer = styled.div`
  position: relative; /* Essencial para o 'fill' da imagem funcionar */
  width: 100%; /* O logo ocupará 80% da largura do Content */
  max-width: 350px; /* Um tamanho máximo para não ficar gigante no desktop */
  margin-bottom: .5rem; /* Espaçamento abaixo do logo */

  /* Proporção da imagem (aspect-ratio). Ex: se seu logo for 2:1 (largura:altura) */
  aspect-ratio: 2 / 1; 
`;

const Subtitle = styled.p`
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 25px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CtaButton = styled(Link)`
  display: inline-block;
  background-color: #00bcd4;
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0097a7;
  }
`;

const SmallText = styled.p`
  font-family: sans-serif;
  font-size: 0.90rem;
  margin-top: 15px;
  opacity: 0.9;
  font-weight: bold;
`;

// --- Componente React ---

export default function HeroSection({ id }: SectionProps) {
  return (
    <HeroWrapper id={id}>
      <BackgroundImage
        src="/images/familia-sacada-segura.png"
        alt="Família feliz em sacada com rede de proteção"
        fill
        priority
      />
      <Overlay />
      <Content>
        {/* ▼▼▼ ALTERAÇÃO 2: Usamos o novo container e a imagem com 'fill' dentro dele ▼▼▼ */}
        <ImageLogoContainer>
          <Image
            src="/images/logo-inovare.svg"
            alt="logo inovare redes de proteção"
            fill
            priority
            // Adicionado para garantir que o logo não seja cortado
            style={{ objectFit: 'contain' }}
          />
        </ImageLogoContainer>

        <Subtitle>
          Instalação especializada de redes de proteção.
        </Subtitle>
        <CtaButton href="https://wa.me/5511954971933" target="_blank" rel="noopener noreferrer">
          Peça seu Orçamento Grátis
        </CtaButton>
        <SmallText>
          Orçamento rápido, grátis e sem compromisso
        </SmallText>
      </Content>
    </HeroWrapper>
  );
}