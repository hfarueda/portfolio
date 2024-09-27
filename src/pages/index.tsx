import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Container from "@/components/Container";
import IntroSection from "@/components/IntroSection";
import EducationSection from "@/components/EducationSection";
import ResearchSection from "@/components/ResearchSection";
import TeachingSection from "@/components/TeachingSection";
import PublicationsSection from "@/components/PublicationsSection";
import MemoriesSection from "@/components/MemoriesSection";

const Home: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const router = useRouter();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Este useEffect maneja el desplazamiento cuando el hash está presente después de navegar
  useEffect(() => {
    if (router.asPath.includes("#")) {
      const hash = router.asPath.split("#")[1];
  
      if (hash) {  // Verifica que hash no sea undefined
        const section = document.getElementById(hash);
  
        if (section) {
          setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth" });
          }, 300); // Ajusta el tiempo si es necesario
        }
      }
    }
  }, [router.asPath]);
  

  return (
    <Container>
      <IntroSection isScrolled={isScrolled} />
      <EducationSection />
      <ResearchSection />
      <TeachingSection />
      <PublicationsSection />
      <MemoriesSection />
    </Container>
  );
};

export default Home;
