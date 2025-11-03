import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá!%20Quero%20criar%20meu%20site%20profissional%20em%201%20hora!", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in space-y-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Sites Profissionais Feitos em Até{" "}
            <span className="text-gradient">1 Hora</span>{" "}
            <Rocket className="inline-block w-12 h-12 md:w-16 md:h-16 text-primary animate-glow" />
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
            Transforme sua ideia em um site pronto, bonito e funcional — sem complicação.
          </p>

          <div className="pt-4">
            <Button 
              variant="hero" 
              size="xl"
              onClick={handleWhatsApp}
              className="animate-slide-in"
            >
              Agendar Agora
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Entrega em 1 hora</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>100% Profissional</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Suporte Incluso</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
