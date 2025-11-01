import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Briefcase, ShoppingBag } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Landing Page Express",
    price: "R$ 199",
    description: "Site de uma página moderna e otimizada para vendas.",
    features: ["Design Responsivo", "SEO Básico", "Formulário de Contato", "Entrega em 1h"],
    whatsappText: "Olá!%20Quero%20contratar%20a%20Landing%20Page%20Express%20por%20R$199"
  },
  {
    icon: Briefcase,
    title: "Site Profissional",
    price: "R$ 299",
    description: "Site completo com até 5 seções e links de contato.",
    features: ["Até 5 Páginas", "Menu Navegável", "Galeria de Imagens", "Integração WhatsApp"],
    whatsappText: "Olá!%20Quero%20contratar%20o%20Site%20Profissional%20por%20R$299",
    featured: true
  },
  {
    icon: ShoppingBag,
    title: "Loja Simples",
    price: "R$ 399",
    description: "E-commerce funcional com carrinho básico e integração com WhatsApp.",
    features: ["Catálogo de Produtos", "Carrinho de Compras", "Checkout via WhatsApp", "Painel Admin"],
    whatsappText: "Olá!%20Quero%20contratar%20a%20Loja%20Simples%20por%20R$399"
  }
];

const Services = () => {
  const handleWhatsApp = (text: string) => {
    window.open(`https://wa.me/5511999999999?text=${text}`, "_blank");
  };

  return (
    <section id="servicos" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Escolha Seu <span className="text-gradient">Plano</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções rápidas e profissionais para qualquer necessidade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className={`relative group hover:scale-105 transition-all duration-300 ${
                  service.featured 
                    ? 'border-primary shadow-[0_0_30px_hsl(45_100%_51%/0.2)] animate-glow' 
                    : 'glass-card'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base pt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="text-center">
                    <span className="text-5xl font-black text-gradient">{service.price}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button 
                    variant={service.featured ? "hero" : "default"}
                    className="w-full"
                    onClick={() => handleWhatsApp(service.whatsappText)}
                  >
                    Agendar
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
