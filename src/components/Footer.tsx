import { Link } from "react-router-dom";
import { MountainIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted p-6 md:py-12 w-full">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold">Empresa</h3>
          <Link to="#">Sobre Nós</Link>
          <Link to="#">Carreiras</Link>
          <Link to="/contact">Contato</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Soluções</h3>
          <Link to="#">Outsourcing de Notebooks</Link>
          <Link to="#">Outsourcing de Celulares</Link>
          <Link to="#">Suporte de TI</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Recursos</h3>
          <Link to="#">Blog</Link>
          <Link to="#">Estudos de Caso</Link>
          <Link to="#">FAQ</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Legal</h3>
          <Link to="#">Termos de Serviço</Link>
          <Link to="#">Política de Privacidade</Link>
        </div>
        <div className="flex flex-col items-start gap-4">
          <Link to="/" className="flex items-center">
            <MountainIcon className="h-6 w-6" />
            <span className="font-bold ml-2">BRO'S Rental</span>
          </Link>
          <p className="text-muted-foreground">
            © 2024 BRO'S Rental. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};