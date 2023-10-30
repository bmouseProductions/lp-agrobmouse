import { Botao } from "../../components/Button";
import Slider from "react-slick";
import WHG from "../../assets/image/Logos/whg.svg";
import Patense from "../../assets/image/Logos/patense.svg";
import NovaGeracao from "../../assets/image/Logos/novageracao.svg";
import NeoGenetics from "../../assets/image/Logos/neogenetics.svg";
import Agroecologia from "../../assets/image/Logos/agroecologia.svg";
import Pets from "../../assets/image/Logos/petsmellon.svg";
import Transtriangulo from "../../assets/image/Logos/transtriangulo.svg";
import { Player } from "@lottiefiles/react-lottie-player";
import Animation from "../../assets/animation/Seta.json";

export const SectionThree = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settingsMobile = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const info = [
    {
      logo: Patense,
      text: `Com mais de 50 anos de história, a Patense é uma marca consolidada no mercado, mas o marketing impulsionou sua trajetória de crescimento. A BMouse trabalha com um planejamento anual completo para todo o Grupo, desenvolvendo estratégias para redes sociais, impulsionamento e campanhas mensais. Além disso, fornecemos apresentações em português, inglês e espanhol, assessoria e cobertura de eventos.`,
      link: "https://www.bmouseproductions.com/view/post_type_case/patense/",
    },
    {
      logo: NeoGenetics,
      text: "No ramo da piscicultura, a BMouse tem uma parceria consolidada com a NeoGenetics, que se baseia em princípios sólidos de inovação e excelência. Através de estratégias de marketing personalizadas, criamos conteúdos que destacam a sua diferenciação e se alinham à sua visão de mercado.",
      link: "https://www.bmouseproductions.com/view/post_type_case/neo-genetics/",
    },
    {
      logo: WHG,
      text: "Em nossa trajetória com o agro, estabelecemos uma valiosa parceria com a WHG, uma instituição financeira de renome que oferece soluções personalizadas de investimento e seguros para o mercado. Unindo nossos esforços, desenvolvemos campanhas e apresentações estratégicas voltadas especificamente para o agro, destacando a expertise e o compromisso da WHG em servir este setor fundamental para o país.",
      link: "https://www.bmouseproductions.com/view/post_type_case/whg/",
    },
    {
      logo: Agroecologia,
      text: "Na jornada da Agroecologia, a mais recente marca do Grupo Patense, estamos completamente engajados em todos os aspectos desse empreendimento focado na produção de biofertilizantes. Desde sua concepção até o processo de lançamento, a BMouse está presente em todos os estágios, oferecendo nosso comprometimento total e expertise.",
      link: "https://www.bmouseproductions.com/view/post_type_case/agroecologia/",
    },
    {
      logo: NovaGeracao,
      text: "A marca Café Nova Geração e a BMouse compartilharam uma jornada de parceria em um dos setores mais emblemáticos do Brasil: o café. Nosso trabalho colaborativo teve como objetivo não apenas fortalecer a presença do Café Nova Geração no mercado, mas também elevar seu padrão de qualidade e destacá-lo em um setor altamente competitivo.",
      link: "https://www.bmouseproductions.com/view/post_type_case/pets-mellon/",
    },
    {
      logo: Pets,
      text: "Mais uma marca do renomado Grupo Patense, a Pets Mellon é uma copacker de produtos relacionados à alimentação animal no Brasil e no mundo, produzindo para diversas marcas do topo do mercado mundial.",
      link: "https://www.bmouseproductions.com/view/post_type_case/pets-mellon/",
    },
    {
      logo: Transtriangulo,
      text: "A Transtriângulo é uma transportadora de óleos e gorduras animais e vegetais que se tornou um exemplo de sucesso no setor. ",
      link: "https://www.bmouseproductions.com/view/post_type_case/transtriangulo/",
    },
  ];

  return (
    <section className="bg-[#181b1f]">
      <div className="container px-3 m-auto py-20 flex flex-col gap-5 items-center justify-center">
        <h1 className="text-2xl text-center  leading-[2.125rem]  md:leading-[3rem]  md:text-4xl 2xl:text-[2.5rem] 2xl:leading-[3.5rem] text-white  w-full md:w-[80%]">
          {" "}
          <strong className="text-[#99CC33]"> Quem sabe faz ao vivo !</strong>
          <br />
          veja diversas campanhas criadas para o{" "}
          <strong className="text-[#99CC33]"> Agronegócio no Brasil.</strong>
        </h1>
        <p className="text-white">
          Deslize para o lado e confira alguns de nossos trabalhos para o Agro.
        </p>

        <Player
          autoplay
          loop
          src={Animation}
          /*           className="w-[110%] md:!w-[900px] md:!h-[900px] lg:!w-[1050px] lg:!h-[1050px] xl:!w-[1000px] xl:!h-[1000px] 2xl:!w-[1200px] 2xl:!h-[1200px] " */
          className="w-full h-[50px]"
        />

        <Slider
          {...settings}
          className="hidden md:block md:w-[80%] 2xl:w-[50%]  h-full"
        >
          {info.map((item, index) => (
            <div key={index}>
              <div className="bg-black rounded-3xl p-3 flex flex-col gap-4 items-center justify-center h-[420px]">
                <img src={item.logo} alt="" className="w-[130px]" />
                <p className="text-center text-white">{item.text}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#99CC33] p-4 rounded-md w-[30%] flex items-center justify-center "
                >
                  Saiba mais
                </a>
              </div>
            </div>
          ))}
        </Slider>

        <Slider {...settingsMobile} className="block md:hidden w-[90%] h-full ">
          {info.map((item, index) => (
            <div key={index}>
              <div className="bg-black rounded-3xl p-3 flex flex-col gap-4 items-center justify-center h-[560px]">
                <img src={item.logo} alt="" className="w-[130px]" />
                <p className="text-center text-white">{item.text}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#99CC33] p-4 rounded-md w-full flex items-center justify-center "
                >
                  Saiba mais
                </a>
              </div>
            </div>
          ))}
        </Slider>

        <div className="w-[100%] md:w-[50%]">
          <Botao />
        </div>
      </div>
      <hr />
    </section>
  );
};
