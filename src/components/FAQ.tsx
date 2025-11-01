import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Quanto tempo demora para entregar o site?",
    answer: "Até 1 hora após o início do atendimento. Trabalhamos com eficiência para entregar seu site rapidamente sem comprometer a qualidade."
  },
  {
    question: "Preciso pagar antes?",
    answer: "Sim, o pagamento confirma sua reserva e garante seu horário agendado. Aceitamos diversas formas de pagamento."
  },
  {
    question: "O site é meu para sempre?",
    answer: "Sim! O domínio e todos os arquivos são seus. Você terá total controle sobre seu site após a entrega."
  },
  {
    question: "Vocês fazem manutenção depois?",
    answer: "Sim, oferecemos serviços de manutenção e atualizações sob demanda com valor adicional. Entre em contato para mais informações."
  },
  {
    question: "O site é responsivo (funciona em celular)?",
    answer: "Com certeza! Todos os nossos sites são 100% responsivos e funcionam perfeitamente em celulares, tablets e desktops."
  },
  {
    question: "Posso escolher o design do site?",
    answer: "Sim! Durante o atendimento, discutimos suas preferências de cores, layout e estilo para criar um site que reflita sua marca."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <HelpCircle className="inline-block w-10 h-10 mr-2 text-primary" />
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card px-6 border-primary/20 rounded-lg"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
