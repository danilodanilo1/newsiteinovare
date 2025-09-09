// src/app/page.tsx
import TrustBadges from "@/components/TrustBadges";
import ServicesSection from "@/components/ServicesSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import OurProcess from "@/components/OurProcess";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
// import { createGlobalStyle } from "styled-components";

// O ideal é criar um arquivo de estilos globais, mas para começar, pode ser aqui.
// Lembre-se de adicionar as fontes no <head> do seu layout.tsx
// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: 'Roboto', sans-serif;
//   }
// `;

export default function Home() {
  return (
    <main>
      {/* <GlobalStyle /> // Styled-components v6 não suporta mais createGlobalStyle no App Router assim. A melhor prática é colocar no layout.tsx com o registry. */}
      <Header />
      <HeroSection id="inicio" />
      <TrustBadges />
      <ServicesSection id="servicos" />
      <WhyChooseUs id="diferenciais" />
      <Testimonials id="depoimentos" />
      <OurProcess id="processo" />
      <FinalCTA id="contato" />
      <Footer />
    </main>
  );
}