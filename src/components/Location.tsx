import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const Location = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <MapPin className="inline-block w-10 h-10 mr-2 text-primary" />
            Nossa <span className="text-gradient">Localização</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Atendimento online e em todo o Brasil — fale comigo e comece agora!
          </p>
        </div>

        <Card className="max-w-4xl mx-auto glass-card overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0977545502785!2d-46.65388248502207!3d-23.561684984682925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização"
                className="w-full h-full"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Location;
