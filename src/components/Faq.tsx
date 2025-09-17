import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = () => {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Perguntas Frequentes
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Tire suas dúvidas sobre nossos serviços de outsourcing de TI.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>O que é outsourcing de TI?</AccordionTrigger>
              <AccordionContent>
                Outsourcing de TI é a prática de terceirizar a gestão e o
                suporte dos equipamentos de tecnologia da sua empresa. Em vez
                de comprar, você aluga os dispositivos e recebe todo o suporte
                necessário.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Quais equipamentos estão inclusos?
              </AccordionTrigger>
              <AccordionContent>
                Oferecemos uma vasta gama de equipamentos, incluindo notebooks,
                desktops, smartphones, tablets e outros periféricos, de acordo
                com a necessidade da sua empresa.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Como funciona o suporte técnico?
              </AccordionTrigger>
              <AccordionContent>
                Nosso suporte técnico está disponível através de múltiplos
                canais (telefone, e-mail, chat) para resolver problemas de
                hardware e software rapidamente, minimizando o tempo de
                inatividade da sua equipe.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Qual o prazo de contrato?</AccordionTrigger>
              <AccordionContent>
                Trabalhamos com contratos flexíveis que se adaptam à realidade
                da sua empresa, geralmente com prazos a partir de 12 meses,
                podendo ser ajustados conforme o projeto.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};