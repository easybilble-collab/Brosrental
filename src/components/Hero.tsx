import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-left">
              Outsourcing de TI para empresas: A solução completa para seus
              equipamentos.
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl text-left">
              Notebooks, desktops, smartphones e tablets para sua equipe, com
              suporte técnico incluso.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link to="/contact">
              <Button size="lg">Solicite um orçamento</Button>
            </Link>
          </div>
        </div>
        <img
          src="/placeholder.svg"
          width="550"
          height="550"
          alt="Hero"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
        />
      </div>
    </section>
  );
};