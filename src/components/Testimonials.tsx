// src/components/Testimonials.tsx
'use client';

import styled from 'styled-components';
// Imports da nova biblioteca
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, A11y } from 'swiper/modules';

import { FaStar, FaQuoteLeft } from 'react-icons/fa';

interface SectionProps {
  id?: string;
}

// --- Dados dos Depoimentos (permanecem os mesmos) ---
const testimonialsData = [
  {
    quote: "Serviço impecável! A equipe foi super profissional e a instalação ficou perfeita. Agora me sinto muito mais segura com meu filho na varanda.",
    author: "Juliana M.",
    location: "Vila Ré, SP",
    rating: 5
  },
  {
    quote: "Contratei para a proteção da piscina. O atendimento foi rápido, o preço foi justo e o serviço, de altíssima qualidade. Recomendo de olhos fechados!",
    author: "Ricardo F.",
    location: "Tatuapé, SP",
    rating: 5
  },
  {
    quote: "A rede para os meus gatos ficou excelente. Discreta e muito bem instalada. A equipe foi pontual e muito cuidadosa. Ótimo trabalho!",
    author: "Carla P.",
    location: "Vila Madalena, SP",
    rating: 5
  },
  {
    quote: "Profissionalismo do começo ao fim. Desde o primeiro contato até a finalização do serviço. A empresa realmente passa confiança.",
    author: "Fernando T.",
    location: "Barra funda, SP",
    rating: 5
  }
];

// --- Styled Components (a maioria permanece igual) ---
const SectionWrapper = styled.section`
  padding: 40px 20px;
  background-color: #f4f6f8;

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
  margin-bottom: 40px;
`;

// Container para o Swiper, onde personalizaremos os pontinhos de navegação
const SwiperContainer = styled.div`
  .swiper-pagination-bullet {
    background: #0d2c54; // Cor do pontinho inativo
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    background: #00bcd4; // Cor do pontinho ativo (nosso azul principal)
    opacity: 1;
  }

  .swiper-wrapper {
    /* Garante que os slides tenham a mesma altura */
    align-items: stretch;
  }
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  height: 100%; // Crucial para que o align-items: stretch funcione
`;

const QuoteIcon = styled(FaQuoteLeft)`
  font-size: 2rem;
  color: #00bcd4;
  margin-bottom: 15px;
`;

const TestimonialText = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #555;
  line-height: 1.7;
  font-style: italic;
  flex-grow: 1;
  margin-bottom: 20px;
`;

const AuthorInfo = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #333;
  margin-top: auto;
`;

const AuthorName = styled.strong`
  display: block;
  font-size: 1rem;
`;

const StarRating = styled.div`
  color: #ffc107;
  margin-bottom: 10px;
  font-size: 1rem;
`;

// --- Componente React com Swiper ---
export default function Testimonials({ id }: SectionProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => <FaStar key={i} />);
  };

  return (
    <SectionWrapper id={id}>
      <Container>
        <SectionTitle>Aprovado por quem mais importa</SectionTitle>
        <SwiperContainer>
          <Swiper
            // Módulos que vamos usar
            modules={[Pagination, Autoplay, A11y]}
            // Configurações
            spaceBetween={30} // Espaço entre os slides (muito mais fácil!)
            slidesPerView={1} // Slides visíveis no mobile
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            // Pontos de quebra para responsividade
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index} style={{ height: 'auto' }}>
                <TestimonialCard>
                  <StarRating>{renderStars(testimonial.rating)}</StarRating>
                  <QuoteIcon />
                  <TestimonialText>{`"${testimonial.quote}"`}</TestimonialText>
                  <AuthorInfo>
                    <AuthorName>{testimonial.author}</AuthorName>
                    <span>{testimonial.location}</span>
                  </AuthorInfo>
                </TestimonialCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </Container>
    </SectionWrapper>
  );
}