// src/components/OurProcess.tsx
'use client';

import styled from 'styled-components';
// Importando os ícones que planejamos
import { FaWhatsapp, FaRulerCombined, FaHardHat, FaThumbsUp } from 'react-icons/fa';

interface SectionProps {
  id?: string;
}

// --- Dados dos Passos do Processo ---
const processData = [
  {
    icon: <FaWhatsapp />,
    title: "Contato e Orçamento Rápido",
    description: "Fale conosco com as medidas ou fotos do local e preparamos um orçamento detalhado sem compromisso."
  },
  {
    icon: <FaRulerCombined />,
    title: "Visita e Medição Precisa",
    description: "Agendamos uma visita técnica para confirmar todas as medidas e garantir uma instalação perfeita."
  },
  {
    icon: <FaHardHat />,
    title: "Instalação Segura e Profissional",
    description: "Nossa equipe realiza a instalação com agilidade, limpeza e o máximo de cuidado e segurança."
  },
  {
    icon: <FaThumbsUp />,
    title: "Proteção e Garantia",
    description: "Sua família e pets seguros! Você recebe nossa garantia completa de 5 anos e a tranquilidade que merece."
  }
];

// --- Styled Components ---
const SectionWrapper = styled.section`
  padding: 40px 20px;
  background-color: #ffffff; // Fundo branco para alternar com a seção anterior

  @media (min-width: 768px) {
    padding: 80px 40px;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  color: #0d2c54;
  text-align: center;
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 50px;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; // 1 coluna no mobile
  gap: 40px;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr; // 2 colunas em telas um pouco maiores
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr); // 4 colunas em desktop
  }
`;

const StepCard = styled.div`
  text-align: center;
  position: relative;
  padding: 20px;
`;

const IconWrapper = styled.div`
  font-size: 3rem; // Ícones maiores
  color: #00bcd4; // Nosso azul principal
  margin-bottom: 20px;
  display: inline-block;
`;

const StepTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  color: #0d2c54;
  font-size: 1.2rem;
  margin: 0 0 10px 0;
`;

const StepDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #555;
  line-height: 1.6;
  margin: 0;
`;


// --- Componente React ---
export default function OurProcess({ id }: SectionProps) {
  return (
    <SectionWrapper id={id}>
      <Container>
        <SectionTitle>Tranquilidade do início ao fim</SectionTitle>
        <ProcessGrid>
          {processData.map((step, index) => (
            <StepCard key={index}>
              <IconWrapper>{step.icon}</IconWrapper>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepCard>
          ))}
        </ProcessGrid>
      </Container>
    </SectionWrapper>
  );
}