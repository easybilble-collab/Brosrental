import { ScanSearch, Laptop, Wrench, Recycle } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Como funciona o Outsourcing de TI?
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Nosso processo é simples, rápido e transparente, pensado para não
            atrapalhar sua rotina.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-4 lg:gap-12">
          <Card className="text-center">
            <CardHeader>
              <ScanSearch className="h-10 w-10 mx-auto mb-4 text-primary" />
              <CardTitle>1. Diagnóstico</CardTitle>
              <CardDescription>
                Analisamos suas necessidades e recomendamos os melhores
                equipamentos para sua equipe.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Laptop className="h-10 w-10 mx-auto mb-4 text-primary" />
              <CardTitle>2. Implantação</CardTitle>
              <CardDescription>
                Entregamos e configuramos tudo para sua equipe começar a usar
                imediatamente.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Wrench className="h-10 w-10 mx-auto mb-4 text-primary" />
              <CardTitle>3. Suporte</CardTitle>
              <CardDescription>
                Suporte técnico ágil e especializado para resolver qualquer
                problema rapidamente.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Recycle className="h-10 w-10 mx-auto mb-4 text-primary" />
              <CardTitle>4. Gestão</CardTitle>
              <CardDescription>
                Gerenciamos todo o ciclo de vida dos equipamentos, da compra ao
                descarte seguro.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};