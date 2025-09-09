// src/components/FinalCTA.tsx
'use client';

import styled from 'styled-components';
import Link from 'next/link';

interface SectionProps {
  id?: string;
}

// --- Styled Components ---

const SectionWrapper = styled.section`
  background-color: #0d2c54; /* Nosso azul marinho para criar contraste */
  color: #ffffff; /* Texto branco */
  padding: 50px 20px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 80px 40px;
  }
`;

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.3;
  margin-top: 0;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  opacity: 0.9;
`;

// Reutilizando o estilo do botão do Hero para consistência
const CtaButton = styled(Link)`
  display: inline-block;
  background-color: #00bcd4; /* Nosso azul principal para se destacar no fundo escuro */
  color: white;
  padding: 15px 35px;
  border-radius: 8px;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 188, 212, 0.3);

  &:hover {
    background-color: #0097a7;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 188, 212, 0.4);
  }
`;

// --- Componente React ---

export default function FinalCTA({ id }: SectionProps) {
  return (
    <SectionWrapper id={id}>
      <Container>
        <Title>Pronto para proteger quem você ama?</Title>
        <Subtitle>
          Fale agora com um de nossos especialistas. O orçamento é rápido,
          gratuito e sem nenhum compromisso.
        </Subtitle>
        <CtaButton href="https://wa.me/5511954971933" target="_blank" rel="noopener noreferrer">
          Solicite um Orçamento Grátis
        </CtaButton>
      </Container>
    </SectionWrapper>
  );
}