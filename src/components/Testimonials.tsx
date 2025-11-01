import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "João Silva",
    role: "Empreendedor",
    text: "Meu site ficou pronto em menos de 1 hora, incrível!",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao"
  },
  {
    name: "Maria Santos",
    role: "Designer",
    text: "Design top e atendimento muito rápido.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
  },
  {
    name: "Pedro Costa",
    role: "Lojista",
    text: "Serviço excelente, recomendo demais!",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Dizem Nossos <span className="text-gradient">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Histórias reais de quem transformou ideias em sites profissionais
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="glass-card border-primary/20">
                    <CardContent className="pt-12 pb-8">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full border-2 border-primary"
                        />
                        
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                          ))}
                        </div>

                        <p className="text-xl italic text-foreground">
                          "{testimonial.text}"
                        </p>

                        <div>
                          <p className="font-bold text-lg">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted'
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
