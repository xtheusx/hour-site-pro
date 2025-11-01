import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { toast } from "sonner";

const DAYS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
const HOURS = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

const Calendar = () => {
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("bookedSlots");
    if (saved) {
      setBookedSlots(JSON.parse(saved));
    }
  }, []);

  const handleSlotClick = (day: string, hour: string) => {
    const slotId = `${day}-${hour}`;
    
    if (bookedSlots.includes(slotId)) {
      toast.info("Este horário já está reservado!");
      return;
    }

    const newBookedSlots = [...bookedSlots, slotId];
    setBookedSlots(newBookedSlots);
    localStorage.setItem("bookedSlots", JSON.stringify(newBookedSlots));
    
    toast.success("Horário reservado! Entre em contato para confirmar.", {
      description: `${day} às ${hour}`,
      action: {
        label: "WhatsApp",
        onClick: () => window.open(`https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20confirmar%20o%20horário:%20${day}%20às%20${hour}`, "_blank")
      }
    });
  };

  const isBooked = (day: string, hour: string) => {
    return bookedSlots.includes(`${day}-${hour}`);
  };

  return (
    <section id="agendamento" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <CalendarIcon className="inline-block w-10 h-10 mr-2 text-primary" />
            Agende Seu <span className="text-gradient">Horário</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o melhor horário para começar seu projeto
          </p>
        </div>

        <Card className="max-w-6xl mx-auto glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Clock className="w-6 h-6 text-primary" />
              Horários Disponíveis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                {/* Header */}
                <div className="grid grid-cols-6 gap-2 mb-4">
                  <div className="font-semibold text-sm text-muted-foreground">Horário</div>
                  {DAYS.map((day) => (
                    <div key={day} className="font-semibold text-sm text-center text-primary">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Time Slots */}
                <div className="space-y-2">
                  {HOURS.map((hour) => (
                    <div key={hour} className="grid grid-cols-6 gap-2">
                      <div className="flex items-center text-sm font-medium">
                        {hour}
                      </div>
                      {DAYS.map((day) => (
                        <Button
                          key={`${day}-${hour}`}
                          variant={isBooked(day, hour) ? "secondary" : "outline"}
                          size="sm"
                          onClick={() => handleSlotClick(day, hour)}
                          disabled={isBooked(day, hour)}
                          className={`h-10 ${
                            isBooked(day, hour) 
                              ? 'opacity-50 cursor-not-allowed' 
                              : 'hover:bg-primary hover:text-primary-foreground'
                          }`}
                        >
                          {isBooked(day, hour) ? "Reservado" : "Livre"}
                        </Button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
              <p className="text-sm text-center text-muted-foreground">
                <span className="text-primary font-semibold">Atenção:</span> Após reservar, entre em contato via WhatsApp para confirmar e efetuar o pagamento.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Calendar;
