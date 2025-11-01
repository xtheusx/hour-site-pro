import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Instagram } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20serviços!", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/seuinstagram", "_blank");
  };

  return (
    <section id="contato" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para transformar sua ideia em realidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="glass-card group hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_hsl(45_100%_51%/0.3)]">
            <CardContent className="p-8 text-center">
              <div className="mx-auto mb-6 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">WhatsApp</h3>
              <p className="text-muted-foreground mb-6">
                Fale diretamente conosco e tire todas as suas dúvidas
              </p>
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={handleWhatsApp}
              >
                Abrir WhatsApp
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-card group hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_hsl(45_100%_51%/0.3)]">
            <CardContent className="p-8 text-center">
              <div className="mx-auto mb-6 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Instagram className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Instagram</h3>
              <p className="text-muted-foreground mb-6">
                Acompanhe nossos projetos e novidades
              </p>
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={handleInstagram}
              >
                Seguir no Instagram
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto glass-card border-primary/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Pronto para começar?
              </h3>
              <p className="text-muted-foreground mb-6">
                Seu site profissional está a apenas 1 hora de distância!
              </p>
              <Button 
                variant="hero" 
                size="xl"
                onClick={handleWhatsApp}
              >
                Agendar Meu Horário Agora
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
