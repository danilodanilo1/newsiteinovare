// src/components/Footer.tsx
'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
// Ícones que vamos usar
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

// --- Styled Components ---
const FooterWrapper = styled.footer`
  background-color: #0d2c54; /* Nosso azul marinho, a base do site */
  color: #a9b3c1; /* Um cinza claro para o texto, fácil de ler */
  padding: 50px 20px 20px;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr; /* 1 coluna no mobile */
  gap: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* 3 colunas em desktop */
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  img{
    align-self: center;
  }
`;

const ColumnTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-family: 'Roboto', sans-serif;
  line-height: 1.7;
  margin-top: 15px;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  a {
    color: #a9b3c1;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: color 0.3s ease;

    &:hover {
      color: #ffffff;
    }
  }

  svg {
    margin-right: 10px;
    font-size: 1rem;
    color: #00bcd4; /* Azul principal nos ícones */
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  color: #ffffff;
  font-size: 1.8rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #00bcd4;
    transform: translateY(-3px);
  }
`;

const BottomBar = styled.div`
  text-align: center;
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
`;

// --- Componente React ---
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Container>
        <Column>
          <Image
            src="/images/logo-inovare.svg" // Use seu logo com fundo transparente
            alt="INOVARE Redes de Proteção"
            width={120}
            height={48}
          />
          <AboutText>
            Oferecendo segurança e tranquilidade para famílias no em toda São Paulo através de instalações de alta qualidade.
          </AboutText>
        </Column>

        <Column>
          <ColumnTitle>Entre em Contato</ColumnTitle>
          <ContactList>
            <ContactItem>
              <a href="https://wa.me/5511954971933" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> (11) 95497-1933
              </a>
            </ContactItem>
            <ContactItem>
              <FaMapMarkerAlt /> Rua Domingos vieira n.50 - Vila Granada, SP
            </ContactItem>
          </ContactList>
        </Column>

        <Column>
          <ColumnTitle>Siga-nos</ColumnTitle>
          <SocialLinks>
            <SocialIcon href="https://instagram.com/inovareredesdeprotecao" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </SocialIcon>
            {/* Adicione outros ícones de redes sociais aqui se precisar */}
          </SocialLinks>
        </Column>
      </Container>

      <BottomBar>
        <p>&copy; {currentYear} INOVARE Redes de Proteção. Todos os direitos reservados.</p>
      </BottomBar>
    </FooterWrapper>
  );
}