import { Botao } from "../../components/Button";
import Slider from "react-slick";
import WHG from "../../assets/image/Logos/whg.svg";
import Patense from "../../assets/image/Logos/patense.svg";
import NovaGeracao from "../../assets/image/Logos/novageracao.svg";
import NeoGenetics from "../../assets/image/Logos/neogenetics.svg";
import Agroecologia from "../../assets/image/Logos/agroecologia.svg";

export const SectionThree = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settingsMobile = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-[#181b1f]">
      <div className="container px-3 m-auto py-20 flex flex-col gap-10 items-center justify-center">
        <h1 className="text-2xl text-center  leading-[2.125rem]  md:leading-[3rem]  md:text-4xl 2xl:text-[2.5rem] 2xl:leading-[3.5rem] text-white  w-full md:w-[80%]">
          {" "}
          <strong className="text-[#99CC33]"> Quem sabe faz ao vivo !</strong>
          <br />
          veja diversas campanhas criadas para o{" "}
          <strong className="text-[#99CC33]"> Agronegócio no Brasil.</strong>
        </h1>

        <Slider {...settings} className="hidden md:block w-full h-full ">
          <div className="flex gap-10 text-white bg-black p-10 rounded-2xl items-center justify-center ">
            <img src={Patense} alt="" className="w-[200px] mb-5 mx-auto " />
            <p className="mb-2">
              Com mais de 50 anos de história, a Patense é uma marca consolidada
              no mercado, mas o marketing impulsionou sua trajetória de
              crescimento.
            </p>
            <p className="mb-2">
              A BMouse trabalha com um planejamento anual completo para todo o
              Grupo, desenvolvendo estratégias para redes sociais,
              impulsionamento e campanhas mensais. Além disso, fornecemos
              apresentações em português, inglês e espanhol, assessoria e
              cobertura de eventos.
            </p>
            <p className="mb-2">
              Criamos também conteúdos audiovisuais, como vídeos institucionais,
              pílulas para divulgação de produtos e VR, que possibilita pessoas
              de qualquer lugar se “deslocarem” para dentro da indústria da
              Patense.
            </p>
            <p>
              Outro ponto forte é o planejamento de endomarketing. Alinhado aos
              valores da empresa, ele permite uma aproximação entre todo o time
              e participação contínua de todos os colaboradores, criação de PLR
              para motivar toda equipe a alcançar as metas.
            </p>
          </div>
          <div className="flex flex-col !items-center !justify-center text-white bg-black p-10 rounded-2xl  ">
            <img src={NeoGenetics} alt="" className="w-[200px] mb-5 mx-auto" />
            <p className="mb-2">
              No ramo da piscicultura, a BMouse tem uma parceria consolidada com
              a NeoGenetics, que se baseia em princípios sólidos de inovação e
              excelência. Através de estratégias de marketing personalizadas,
              criamos conteúdos que destacam a sua diferenciação e se alinham à
              sua visão de mercado.
            </p>
            <p className="mb-2">
              Destacamos a pesquisa, os avanços tecnológicos e a qualidade dos
              produtos NeoGenetics, que são essenciais para o desenvolvimento da
              piscicultura. Estamos comprometidos em apoiar a empresa em sua
              jornada para moldar o futuro do setor, permitindo que ela alcance
              um público mais amplo e demonstre seu papel vital na
              sustentabilidade e no crescimento do mercado.
            </p>
          </div>
          <div className="flex gap-10 text-white bg-black p-10 rounded-2xl items-center justify-center ">
            <img src={WHG} alt="" className="w-[150px] mb-5 mx-auto" />
            <p className="mb-2">
              Em nossa trajetória com o agro, estabelecemos uma valiosa parceria
              com a WHG, uma instituição financeira de renome que oferece
              soluções personalizadas de investimento e seguros para o mercado.
              Unindo nossos esforços, desenvolvemos campanhas e apresentações
              estratégicas voltadas especificamente para o agro, destacando a
              expertise e o compromisso da WHG em servir este setor fundamental
              para o país.
            </p>
            <p className="mb-2">
              Criamos conteúdos exclusivos direcionados ao agro, com vídeos
              informativos e envolventes, focados nas necessidades específicas
              do setor, proporcionando informações relevantes e promovendo a
              colaboração entre o WHG e a comunidade agropecuária. Nossa
              parceria com a WHG é um reflexo de nosso compromisso em fortalecer
              o setor.
            </p>
          </div>
          <div className="flex gap-10 text-white bg-black p-10 rounded-2xl items-center justify-center ">
            <img src={Agroecologia} alt="" className="w-[200px] mb-5 mx-auto" />
            <p className="mb-2">
              Na jornada da Agroecologia, a mais recente marca do Grupo Patense,
              estamos completamente engajados em todos os aspectos desse
              empreendimento focado na produção de biofertilizantes. Desde sua
              concepção até o processo de lançamento, a BMouse está presente em
              todos os estágios, oferecendo nosso comprometimento total e
              expertise.
            </p>
            <p className="mb-2">
              Nossa parceria abrange uma série de elementos, abordando desde a
              criação de estratégias de marketing e conteúdos direcionados até a
              concepção de apresentações de impacto, design de embalagens para
              os produtos e muito mais. Estamos alinhados com o Grupo Patense
              para promover a Agroecologia de maneira eficaz, destacando seu
              papel no agro e seu crescimento nacional e internacional.
            </p>
          </div>
          <div className="flex gap-10 text-white bg-black p-10 rounded-2xl items-center justify-center ">
            <img src={NovaGeracao} alt="" className="w-[100px] mb-5 mx-auto" />
            <p className="mb-2">
              A marca Café Nova Geração e a BMouse compartilharam uma jornada de
              parceria em um dos setores mais emblemáticos do Brasil: o café.
              Nosso trabalho colaborativo teve como objetivo não apenas
              fortalecer a presença do Café Nova Geração no mercado, mas também
              elevar seu padrão de qualidade e destacá-lo em um setor altamente
              competitivo.
            </p>
            <p className="mb-2">
              Nossa parceria abrange uma série de elementos, abordando desde a
              criação de estratégias de marketing e conteúdos direcionados até a
              concepção de apresentações de impacto, design de embalagens para
              os produtos e muito mais. Estamos alinhados com o Grupo Patense
              para promover a Agroecologia de maneira eficaz, destacando seu
              papel no agro e seu crescimento nacional e internacional.
            </p>
          </div>
        </Slider>

        <Slider {...settingsMobile} className="block md:hidden w-full h-full">
          <div className="flex gap-10 text-white bg-black p-5 rounded-2xl items-center justify-center ">
            <img src={Patense} alt="" className="w-[200px] mb-5 mx-auto" />
            <p className="mb-2">
              Com mais de 50 anos de história, a Patense é uma marca consolidada
              no mercado, mas o marketing impulsionou sua trajetória de
              crescimento.
            </p>
            <p className="mb-2">
              A BMouse trabalha com um planejamento anual completo para todo o
              Grupo, desenvolvendo estratégias para redes sociais,
              impulsionamento e campanhas mensais. Além disso, fornecemos
              apresentações em português, inglês e espanhol, assessoria e
              cobertura de eventos.
            </p>
            <p className="mb-2">
              Criamos também conteúdos audiovisuais, como vídeos institucionais,
              pílulas para divulgação de produtos e VR, que possibilita pessoas
              de qualquer lugar se “deslocarem” para dentro da indústria da
              Patense.
            </p>
            <p>
              Outro ponto forte é o planejamento de endomarketing. Alinhado aos
              valores da empresa, ele permite uma aproximação entre todo o time
              e participação contínua de todos os colaboradores, criação de PLR
              para motivar toda equipe a alcançar as metas.
            </p>
          </div>
          <div className="flex flex-col !items-center !justify-center text-white bg-black p-5 rounded-2xl ">
            <img src={NeoGenetics} alt="" className="w-[200px] mb-5 mx-auto" />
            <p className="mb-2">
              No ramo da piscicultura, a BMouse tem uma parceria consolidada com
              a NeoGenetics, que se baseia em princípios sólidos de inovação e
              excelência. Através de estratégias de marketing personalizadas,
              criamos conteúdos que destacam a sua diferenciação e se alinham à
              sua visão de mercado.
            </p>
            <p className="mb-2">
              Destacamos a pesquisa, os avanços tecnológicos e a qualidade dos
              produtos NeoGenetics, que são essenciais para o desenvolvimento da
              piscicultura. Estamos comprometidos em apoiar a empresa em sua
              jornada para moldar o futuro do setor, permitindo que ela alcance
              um público mais amplo e demonstre seu papel vital na
              sustentabilidade e no crescimento do mercado.
            </p>
          </div>
          <div className="flex gap-10 text-white bg-black p-5 rounded-2xl items-center justify-center ">
            <img src={WHG} alt="" className="w-[150px] mb-5 mx-auto" />
            <p className="mb-2">
              Em nossa trajetória com o agro, estabelecemos uma valiosa parceria
              com a WHG, uma instituição financeira de renome que oferece
              soluções personalizadas de investimento e seguros para o mercado.
              Unindo nossos esforços, desenvolvemos campanhas e apresentações
              estratégicas voltadas especificamente para o agro, destacando a
              expertise e o compromisso da WHG em servir este setor fundamental
              para o país.
            </p>
            <p className="mb-2">
              Criamos conteúdos exclusivos direcionados ao agro, com vídeos
              informativos e envolventes, focados nas necessidades específicas
              do setor, proporcionando informações relevantes e promovendo a
              colaboração entre o WHG e a comunidade agropecuária. Nossa
              parceria com a WHG é um reflexo de nosso compromisso em fortalecer
              o setor.
            </p>
          </div>
          <div className="flex gap-10 text-white bg-black p-5 rounded-2xl items-center justify-center ">
            <img src={Agroecologia} alt="" className="w-[200px] mb-5 mx-auto" />
            <p className="mb-2">
              Na jornada da Agroecologia, a mais recente marca do Grupo Patense,
              estamos completamente engajados em todos os aspectos desse
              empreendimento focado na produção de biofertilizantes. Desde sua
              concepção até o processo de lançamento, a BMouse está presente em
              todos os estágios, oferecendo nosso comprometimento total e
              expertise.
            </p>
            <p className="mb-2">
              Nossa parceria abrange uma série de elementos, abordando desde a
              criação de estratégias de marketing e conteúdos direcionados até a
              concepção de apresentações de impacto, design de embalagens para
              os produtos e muito mais. Estamos alinhados com o Grupo Patense
              para promover a Agroecologia de maneira eficaz, destacando seu
              papel no agro e seu crescimento nacional e internacional.
            </p>
          </div>
          <div className="flex gap-10 text-white bg-black  p-5 rounded-2xl items-center justify-center">
            <img src={NovaGeracao} alt="" className="w-[100px] mb-5 mx-auto" />
            <p className="mb-2">
              A marca Café Nova Geração e a BMouse compartilharam uma jornada de
              parceria em um dos setores mais emblemáticos do Brasil: o café.
              Nosso trabalho colaborativo teve como objetivo não apenas
              fortalecer a presença do Café Nova Geração no mercado, mas também
              elevar seu padrão de qualidade e destacá-lo em um setor altamente
              competitivo.
            </p>
            <p className="mb-2">
              Nossa parceria abrange uma série de elementos, abordando desde a
              criação de estratégias de marketing e conteúdos direcionados até a
              concepção de apresentações de impacto, design de embalagens para
              os produtos e muito mais. Estamos alinhados com o Grupo Patense
              para promover a Agroecologia de maneira eficaz, destacando seu
              papel no agro e seu crescimento nacional e internacional.
            </p>
          </div>
        </Slider>

        <div className="w-[100%] md:w-[50%]">
          <Botao />
        </div>
      </div>
      <hr />
    </section>
  );
};
