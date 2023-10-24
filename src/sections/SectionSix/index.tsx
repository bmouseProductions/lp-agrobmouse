import { Botao } from "../../components/Button";
import TomBeta from "../../assets/image/Sobre/TomBeta-6156df0e.webp";

export const SectionSix = () => {
  return (
    <section className="bg-[#181b1f]">
      <div className="container px-3 m-auto  py-20 flex flex-col-reverse lg:flex-row-reverse  gap-10 items-center justify-between">
        <div className="flex-1 flex items-center justify-start ">
          <img src={TomBeta} alt="" className="" />
        </div>
        <div className="flex flex-col justify-end gap-5 flex-1">
          <h1 className="text-2xl text-center md:text-start leading-[2.125rem]  md:leading-[3rem]  md:text-4xl 2xl:text-[2.5rem] 2xl:leading-[3.5rem] text-white  w-full md:w-[80%]">
            {" "}
            <strong className="text-[#99CC33]">Quem Somos?</strong>
          </h1>
          <p className="text-white text-lg text-left  leading-8">
            A BMouse é muito mais do que uma agência de marketing. Somos uma
            agência de criatividade com um compromisso inabalável em levar a sua
            marca a novos patamares. Contamos com uma equipe de profissionais
            altamente capacitados e dedicados, cuja paixão pela criatividade é
            evidente em tudo o que fazemos.
          </p>
          <p className="text-white text-lg text-left  leading-8">
            O nosso diferencial? Possuímos o Studio BMouse, um espaço equipado
            com tecnologia de ponta, garantindo que cada conteúdo audiovisual
            produzido atenda aos mais altos padrões de qualidade. Com
            equipamentos de última geração, criamos imagens que parecem sair
            diretamente das telas de cinema.
          </p>
          <p className="text-white text-lg text-left  leading-8">
            Estamos prontos para desafiar o convencional, ultrapassar limites e
            levar o seu negócio a todos os cantos do mundo. Empenhados em
            destacar o potencial do agro, oferecemos soluções criativas que
            tornam a sua marca inesquecível. Conte com a BMouse para fazer a
            diferença no mercado e alcançar novos públicos.
          </p>
          <div className="w-[100%] self-center md:w-[50%] lg:w-[80%] lg:self-start">
            <Botao />
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};
