import { Botao } from "../../components/Button";
import Audiovisual from "../../assets/image/icons/adiovisual-e332747f.svg";
import Marketing from "../../assets/image/icons/mktoff-d75729ca.svg";
/* import Publico from "../../assets/image/icons/performance-43a49860.svg"; */
import Criacao from "../../assets/image/icons/produtosdigitais-691a283a.svg";
/* import Assessoria from "../../assets/image/icons/assessoria-67a09c85.svg"; */
import MakertingDigital from "../../assets/image/icons/mktdigital-13767259.svg";
import Programacao from "../../assets/image/icons/dev-25bd6d6a.svg";
import Elaboracao from "../../assets/image/icons/estrategica-a0abaa8f.svg";
/* import Garantia from "../../assets/image/Garantia/garantia.png"; */

const info = [
  {
    text: "Vídeos de alta qualidade que contam a história da sua empresa de forma criativa e envolvente;",
    img: Audiovisual,
  },
  {
    text: "Presença digital profissional e constante, com designs incríveis que atraem e mantém sua audiência;",
    img: Criacao,
  },
  {
    text: "Identidade visual exclusiva para fortalecer a sua marca e destacar a sua posição no mercado;",
    img: MakertingDigital,
  },
  {
    text: "Endomarketing assertivo que motiva e aproxima os colaboradores, gerando menos rotatividade no time;",
    img: Elaboracao,
  },
  {
    text: "Criação de sites e LPs que destacam sua empresa, produtos e serviços, proporcionando maior visibilidade no mundo digital;",
    img: Programacao,
  },
  {
    text: "Assessoria em eventos, com criação de todo material necessário para destacar a sua presença, como modelo de stand, papelaria, banners, dentre outros.",
    img: Marketing,
  },
];

export const SectionSeven = () => {
  return (
    <section className="bg-[#181b1f] ">
      <div className="container px-3 m-auto  py-20 flex flex-col gap-5  items-center justify-center">
        <h1 className="text-2xl text-center leading-[2.125rem]  md:leading-[3rem]  md:text-4xl 2xl:text-[2.5rem] 2xl:leading-[3.5rem] text-white  w-full md:w-[80%]">
          {" "}
          <strong className="text-[#99CC33]">
            Nossa garantia é o sucesso.
          </strong>{" "}
        </h1>
        <p className="text-base 2xl:text-xl text-center text-white 2xl:w-[70%]">
          Na BMouse, trabalhamos incansavelmente para oferecer soluções de
          marketing que transformam sua presença online e impulsionam sua marca.
        </p>

        <ul className="grid grid-col-1 lg:grid-cols-2 gap-4 mt-10">
          {info.map((item, index) => {
            return (
              <li
                key={index}
                className="px-5 bg-gradient-black rounded-2xl min-h-[160px] md:min-h-[130px] w-full  flex gap-3 justify-center items-center text-white text-sm"
              >
                <img src={item.img} alt="" className="w-[40px]" />
                <p className="text-base">{item.text}</p>
              </li>
            );
          })}
        </ul>
        {/* 
          <img src={Garantia} alt="" className="garantia w-[70%] 2xl:w-full " /> */}

        <p className="text-center text-white w-full 2xl:w-[70%]">
          Na BMouse, nossa missão é elevar a sua marca, e garantimos que cada
          projeto que tocamos seja conduzido com excelência e dedicação
          inabalável. Sua satisfação é a nossa prioridade.
        </p>
        <p className="text-center text-[#ffffff]">
          Confie em nós para levar sua empresa ao próximo nível.
        </p>
        <div className="w-[80%] md:w-[50%]">
          <Botao />
        </div>
      </div>
      <hr />
    </section>
  );
};
