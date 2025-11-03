import { Heart } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Site 1h Logo" className="w-32 h-32 object-contain" />
          </div>
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
