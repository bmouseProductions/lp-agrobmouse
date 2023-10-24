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
/* import Rato from "../../assets/image/agromouse.png"; */
import Animation from "../../assets/animation/Animation.json";
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
        <h1 className="text-2xl text-center leading-[2.125rem]  md:leading-[3rem]  md:text-4xl 2xl:text-[2.5rem] 2xl:leading-[3.5rem] text-white w-full md:w-[80%]">
          {" "}
          <strong className="text-[#99CC33]">Muitas campanhas </strong>
          produzidas e realizadas para clientes do{" "}
          <strong className="text-[#99CC33]">agronegócio </strong>
          no Brasil.
        </h1>
        <p className="text-white text-center text-base md:text-xl">
          Veja os benefícios que a BMouse oferece:
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-5">
          {/*  <img
            className="lg:w-[50%] xl:w-[45%] 2xl:w-[500px] mx-auto"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-anchor-placement="bottom-bottom"
            src={Rato}
            alt="Rato Bmouse"
          /> */}
          <div className="flex items-center justify-center ">
            <Player autoplay loop src={Animation} className="!w-[180%] " />
          </div>

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

        <div className="w-[100%] md:w-[50%] m-auto">
          <Botao />
        </div>
      </div>
      <hr />
    </section>
  );
};
