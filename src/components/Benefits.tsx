import {
  DollarSign,
  TrendingUp,
  ShieldCheck,
  Briefcase,
  RefreshCw,
  Users,
} from "lucide-react";

export const Benefits = () => {
  return (
    <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Vantagens do Outsourcing de TI
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Descubra por que terceirizar a gestão de equipamentos é a melhor
            decisão para sua empresa.
          </p>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1 text-center">
            <DollarSign className="h-10 w-10 mx-auto mb-2 text-primary" />
            <h3 className="text-lg font-bold">Redução de Custos</h3>
            <p className="text-sm text-muted-foreground">
              Elimine altos investimentos iniciais e custos de manutenção.
            </p>
          </div>
          <div className="grid gap-1 text-center">
            <TrendingUp className="h-10 w-10 mx-auto mb-2 text-primary" />
            <h3 className="text-lg font-bold">Aumento da Produtividade</h3>
            <p className="text-sm text-muted-foreground">
              Equipamentos modernos e suporte rápido garantem um time mais
              eficiente.
            </p>
          </div>
          <div className="grid gap-1 text-center">
            <ShieldCheck className="h-10 w-10 mx-auto mb-2 text-primary" />
            <h3 className="text-lg font-bold">Segurança da Informação</h3>
            <p className="text-sm text-muted-foreground">
              Garantimos a segurança dos seus dados com as melhores práticas do
              mercado.
            </p>
          </div>
          <div className="grid gap-1 text-center">
            <Briefcase className="h-10 w-10 mx-auto mb-2 text-primary" />
            <h3 className="text-lg font-bold">Foco no seu Core Business</h3>
            <p className="text-sm text-muted-foreground">
              Deixe a TI conosco e concentre-se no que sua empresa faz de
              melhor.
            </p>
          </div>
          <div className="grid gap-1 text-center">
            <RefreshCw className="h-10 w-10 mx-auto mb-2 text-primary" />
            <h3 className="text-lg font-bold">Equipamentos Atualizados</h3>
            <p className="text-sm text-muted-foreground">
              Sua equipe sempre terá acesso às tecnologias mais recentes do
              mercado.
            </p>
          </div>
          <div className="grid gap-1 text-center">
            <Users className="h-10 w-10 mx-auto mb-2 text-primary" />
            <h3 className="text-lg font-bold">Suporte Especializado</h3>
            <p className="text-sm text-muted-foreground">
              Acesso a uma equipe de especialistas para resolver qualquer
              problema.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};