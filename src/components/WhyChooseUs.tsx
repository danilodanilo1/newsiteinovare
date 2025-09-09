// src/components/WhyChooseUs.tsx
'use client';

import styled from 'styled-components';
import Image from 'next/image';
// Importaremos os ícones que vamos usar
import { FaShieldAlt, FaTools, FaCheckCircle } from 'react-icons/fa';

// --- Dados dos Diferenciais ---
// Criar um array de dados torna o código mais limpo e fácil de atualizar

interface SectionProps {
  id?: string;
}

const featuresData = [
  {
    icon: <FaShieldAlt />,
    title: "Materiais de Alta Performance",
    description: "Utilizamos apenas materiais com tratamento UV e ganchos em aço inoxidável, garantindo máxima durabilidade e resistência."
  },
  {
    icon: <FaTools />,
    title: "Equipe Técnica Especializada",
    description: "Nossos instaladores são profissionais treinados e experientes, focados em uma instalação segura e com acabamento impecável."
  },
  {
    icon: <FaCheckCircle />,
    title: "Garantia e Qualidade Assegurada",
    description: "Seguimos rigorosamente as normas técnicas da ABNT e oferecemos 5 anos de garantia em todos os nossos produtos e serviços."
  }
];

// --- Styled Components ---
const SectionWrapper = styled.section`
  padding: 40px 20px;
  background-color: #ffffff; /* Fundo branco para destacar */

  @media (min-width: 768px) {
    padding: 80px 40px;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column; /* Mobile-first: colunas empilhadas */
  gap: 40px;

  @media (min-width: 992px) {
    flex-direction: row; /* Layout lado a lado em telas maiores */
    align-items: center;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

const TextColumn = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  color: #0d2c54; /* Nosso Azul Marinho */
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 30px;
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

const IconWrapper = styled.div`
  font-size: 1.5rem;
  color: #00bcd4; /* Nosso Azul Principal */
  margin-top: 5px; /* Alinha o ícone com o texto */
`;

const FeatureTextContainer = styled.div``;

const FeatureTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  color: #0d2c54;
  font-size: 1.1rem;
  margin: 0 0 5px 0;
`;

const FeatureDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #555;
  line-height: 1.6;
  margin: 0;
`;

const ImageColumn = styled.div`
  flex: 1;
  position: relative;
  min-height: 300px;
  /* Garante que o video/imagem de fallback tenha as bordas arredondadas */
  border-radius: 12px; 
  overflow: hidden; /* Importante para cortar o video/imagem dentro das bordas */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); /* Sombra igual à imagem */
`;

const StyledVideo = styled.video`
  width: 20rem;
  height: 26rem;
  object-fit: cover; /* Garante que o vídeo cubra toda a área sem distorcer */
  display: block; /* Remove espaços extras abaixo do vídeo */
`;


// --- Componente React ---
export default function WhyChooseUs({ id }: SectionProps) {
  return (
    <SectionWrapper id={id}>
      <Container>
        <ImageColumn>
          {/* ▼▼▼ SUBSTITUIR Image por Video ▼▼▼ */}
          <StyledVideo
            autoPlay
            loop
            muted // ESSENCIAL: Inicia mudo
            playsInline // Importante para autoplay em iOS
            poster="/images/inovare-tecnico-qualificado.jpg" // Imagem de fallback/thumbnail
          >
            {/* Você pode ter múltiplos <source> para diferentes formatos de vídeo */}
            <source src="/videos/inovare-quality-video.mp4" type="video/mp4" />
            {/* <source src="/videos/inovare-qualidade.webm" type="video/webm" /> */}
            Seu navegador não suporta vídeos HTML5.
          </StyledVideo>
          {/* ▲▲▲ FIM DA SUBSTITUIÇÃO ▲▲▲ */}
        </ImageColumn>
        <TextColumn>
          <SectionTitle>Acabamento Impecável e a Segurança que Você Merece</SectionTitle>
          <FeaturesList>
            {featuresData.map((feature, index) => (
              <FeatureItem key={index}>
                <IconWrapper>{feature.icon}</IconWrapper>
                <FeatureTextContainer>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureTextContainer>
              </FeatureItem>
            ))}
          </FeaturesList>
        </TextColumn>
      </Container>
    </SectionWrapper>
  );
}