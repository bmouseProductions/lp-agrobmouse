import { Botao } from "../../components/Button";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  /*   Button, */
} from "@material-tailwind/react";
/* import Rato from "../../assets/image/rato.webp"; */
import Rato from "../../assets/image/agromouse.png";
import Animation from "../../assets/animation/AgroMouse.json";
import { Player } from "@lottiefiles/react-lottie-player";

const info = [
  {
    title: " Especialistas em endomarketing corporativo",
    text: "Visando aprimorar a cultura do grupo entre os seus colaboradores, mais satisfação e menos rotatividade, motivação constante dos colaboradores, palestras e treinamentos, campanhas com foco em segurança, criação de PLR e muito mais;",
  },
  {
    title: "Valorização e posicionamento de marca",
    text: "Planejamento estratégico anual, rebranding completo, criação de campanha comercial, consultoria de compra de mídia, performance e impulsionamento, dentre muitos outros;",
  },
  {
    title: "Análise de dados e pesquisa de mercado",
    text: "Análise de concorrência, pesquisa de expansão de mercado, planejamento para lançamentos de produtos ou serviços, dentre muitos outros;",
  },
  {
    title: "Produção de conteúdos cinemáticos",
    text: "Conteúdos institucionais, pílulas comerciais, longa metragem, documentários, filmagens aéreas, fotografias corporativas, realidade virtual;",
  },
  {
    title: "Programação de plataformas",
    text: "E-commerce, sites institucionais, landing pages, e-mail marketing, blogs especializados e muito mais.",
  },
];

export const SectionFour = () => {
  return (
    <section className="bg-[#181b1f] ">
      <div className="container px-3 m-auto py-20 flex flex-col gap-5 items-center justify-center">
        <div className="relative !z-[1000] ">
          <h1 className="text-2xl text-center leading-[2.125rem]  md:leading-[3rem]  md:text-4xl 2xl:text-[2.5rem] 2xl:leading-[3.5rem] text-white w-full md:w-[100%]">
            {" "}
            <strong className="text-[#99CC33]">Veja os benefícios </strong>
            que a BMouse oferece:
          </h1>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-5 pt-20 lg:pt-10">
          <div className="w-full h-full relative flex items-end justify-center ">
            <div className="relative !z-[1000] pt-14 ">
              <img
                className="w-full md:max-w-xl lg:max-w-2xl xl:w-full mx-auto "
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-anchor-placement="bottom-bottom"
                src={Rato}
                alt="Rato Bmouse"
              />
            </div>

            <div className="flex items-center justify-center !z-[101] absolute top-[-50px] left-[-50px] md:top-[-250px] md:left-[-120px] lg:top-[-250px] lg:left-[0px] xl:top-[-100px] xl:left-[-230px]  2xl:top-[-200px] 2xl:left-[-300px] ">
              <Player
                autoplay
                loop
                src={Animation}
                className="w-[110%] md:!w-[900px] md:!h-[900px] lg:!w-[1050px] lg:!h-[1050px] xl:!w-[1000px] xl:!h-[1000px] 2xl:!w-[1200px] 2xl:!h-[1200px] "
              />
            </div>
          </div>
          <div className="relative z-[1000] ">
            <Timeline className="lg:w-[100%] mt-10">
              {info.map((item, index) => {
                return (
                  <TimelineItem
                    key={index}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="3000"
                  >
                    <TimelineConnector />
                    <TimelineHeader className="h-3">
                      <TimelineIcon className=" bg-[#99CC33] " />
                      <Typography
                        variant="h5"
                        className="leading-none  text-[#fff]"
                      >
                        {item.title}
                      </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8 ">
                      <Typography
                        variant="paragraph"
                        className="text-lg leading-7  text-[#adadadc2] mt-5  lg:mt-4  "
                      >
                        {item.text}
                      </Typography>
                    </TimelineBody>
                  </TimelineItem>
                );
              })}
            </Timeline>
          </div>
        </div>

        <div className="w-[100%] md:w-[50%] m-auto">
          <Botao />
        </div>
        {/*    </div> */}
      </div>
      <hr />
    </section>
  );
};
