import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="text-center space-y-4">
          <p className="text-2xl font-bold">
            Sites <span className="text-gradient">Express</span>
          </p>
          <p className="text-muted-foreground">
            Transformando ideias em sites profissionais desde 2024
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Feito com</span>
            <Heart className="w-4 h-4 fill-primary text-primary animate-pulse" />
            <span>para empreendedores</span>
          </div>
          <div className="pt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sites Express. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
