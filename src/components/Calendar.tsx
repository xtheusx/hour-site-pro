import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const DAYS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
const HOURS = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

const bookingSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Email inválido." }),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const Calendar = () => {
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<{ day: string; hour: string } | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data: appointments, error } = await supabase
          .from("appointments")
          .select("day, hour");

        if (error) throw error;

        const slots = appointments?.map((appt) => `${appt.day}-${appt.hour}`) || [];
        setBookedSlots(slots);
      } catch (error) {
        console.error("Failed to fetch appointments:", error);
        toast.error("Falha ao carregar agendamentos.");
      }
    };
    fetchAppointments();
  }, []);

  const handleSlotClick = (day: string, hour: string) => {
    const slotId = `${day}-${hour}`;
    if (bookedSlots.includes(slotId)) {
      toast.info("Este horário já está reservado!");
      return;
    }
    setSelectedSlot({ day, hour });
    setIsDialogOpen(true);
  };

  const onSubmit = async (data: BookingFormValues) => {
    if (!selectedSlot) return;

    try {
      const { data: newAppointment, error } = await supabase
        .from("appointments")
        .insert([
          {
            day: selectedSlot.day,
            hour: selectedSlot.hour,
            name: data.name,
            email: data.email,
          },
        ])
        .select()
        .single();

      if (error) {
        if (error.code === "23505") {
          toast.error("Este horário já foi reservado por outra pessoa!");
        } else {
          throw error;
        }
        return;
      }

      setBookedSlots([...bookedSlots, `${newAppointment.day}-${newAppointment.hour}`]);
      setIsDialogOpen(false);
      reset();
      toast.success("Horário reservado com sucesso!", {
        description: `${selectedSlot.day} às ${selectedSlot.hour}`,
      });
    } catch (error) {
      console.error("Failed to book appointment:", error);
      toast.error("Falha ao agendar horário. Tente novamente.");
    }
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
                <div className="grid grid-cols-6 gap-2 mb-4">
                  <div className="font-semibold text-sm text-muted-foreground">Horário</div>
                  {DAYS.map((day) => (
                    <div key={day} className="font-semibold text-sm text-center text-primary">
                      {day}
                    </div>
                  ))}
                </div>

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
                              ? "opacity-50 cursor-not-allowed"
                              : "hover:bg-primary hover:text-primary-foreground"
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
                <span className="text-primary font-semibold">Atenção:</span> Após reservar, um email de confirmação será enviado.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Agendar Horário</DialogTitle>
          </DialogHeader>
          {selectedSlot && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <p>
                Você está agendando para <span className="font-semibold">{selectedSlot.day}</span> às{" "}
                <span className="font-semibold">{selectedSlot.hour}</span>.
              </p>
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input id="name" {...register("name")} />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" {...register("email")} />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <Button type="submit">Confirmar Agendamento</Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Calendar;
