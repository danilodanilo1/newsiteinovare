// src/components/ServicesSection.tsx
'use client';
import styled from 'styled-components';
import Image from 'next/image'; // Usar o componente Image do Next.js para otimização

interface SectionProps {
  id?: string;
}

// --- Styled Components ---
const Section = styled.section`
  background-color: #f4f6f8; /* Nosso Cinza Claro */
  padding: 40px 20px;
`;

const SectionTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  color: #0d2c54; /* Azul Marinho */
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 30px;
`;

const CardsGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr; /* 1 coluna no mobile */

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr; /* 2 colunas em tablets */
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden; /* Garante que a imagem não vaze das bordas arredondadas */
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  color: #0d2c54;
  margin-top: 0;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #555;
  line-height: 1.6;
`;

// --- Componente React ---
const servicesData = [
  {
    image: "/images/sacada.png", // Coloque as imagens na pasta /public/images
    title: "Redes para Sacadas",
    description: "Curta sua varanda com total segurança para crianças e animais de estimação."
  },
  {
    image: "/images/piscina.png",
    title: "Redes para Piscinas",
    description: "Segurança total para evitar acidentes para crianças e pets."
  }
];

export default function ServicesSection({ id }: SectionProps) {
  return (
    <Section id={id}>
      <SectionTitle>Soluções Completas em Redes de Proteção</SectionTitle>
      <CardsGrid>
        {servicesData.map((service, index) => (
          <Card key={index}>
            <Image src={service.image} alt={service.title} width={500} height={300} style={{ width: '110%', height: 'auto' }} />
            <CardContent>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </CardsGrid>
    </Section>
  );
}