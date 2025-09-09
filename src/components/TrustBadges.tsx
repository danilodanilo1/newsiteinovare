// src/components/TrustBadges.tsx
'use client';
import styled from 'styled-components';
// Para os ícones, vamos instalar uma biblioteca popular: npm install react-icons
import { FaShieldAlt, FaAward, FaUsers } from 'react-icons/fa';

// --- Styled Components ---
const BadgesWrapper = styled.section`
  background-color: #0d2c54; /* Nosso Azul Marinho */
  color: white;
  padding: 20px 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

const BadgeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  max-width: 100px;
`;

const IconWrapper = styled.div`
  font-size: 2rem; /* Tamanho do ícone */
  margin-bottom: 5px;
`;


// --- Componente React ---
const badgesData = [
  {
    icon: <FaShieldAlt />,
    text: "Garantia de 5 Anos"
  },
  {
    icon: <FaAward />,
    text: "Seguimos Normas ABNT"
  },
  {
    icon: <FaUsers />,
    text: "Equipe Qualificada"
  }
];

export default function TrustBadges() {
  return (
    <BadgesWrapper>
      {badgesData.map((badge, index) => (
        <BadgeItem key={index}>
          <IconWrapper>{badge.icon}</IconWrapper>
          <span>{badge.text}</span>
        </BadgeItem>
      ))}
    </BadgesWrapper>
  );
}