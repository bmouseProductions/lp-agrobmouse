import { Botao } from "../../components/Button";
import Investimento from "../../assets/image/audiovisual.webp";

export const SectionEight = () => {
  return (
    <section className="bg-[#181b1f] ">
      <div className="container px-3 m-auto flex flex-col lg:flex-row py-10 md:py-20  gap-10 items-center justify-between">
        <div className="flex flex-col gap-5  flex-1">
          <h1 className="text-2xl text-left leading-[2.125rem]  md:leading-[3rem] md:text-4xl md:text-left 2xl:text-[2.5rem] 2xl:leading-[3.5rem] text-white w-full ">
            {" "}
            Marketing, <strong className="text-[#99CC33]">não é custo</strong>
            <strong className="text-[#99CC33]"> é benefício.</strong>
          </h1>
          <p className="text-white text-lg text-left leading-8">
            Investir em marketing é mais do que uma escolha sábia, é uma
            necessidade no cenário atual. Em um mundo movido pela tecnologia e
            pela constante exposição online, a propaganda certa e a constante
            presença no meio digital é o que faz a diferença.
          </p>
          <p className="text-white text-lg text-left leading-8">
            No entanto, é necessário entender que o marketing vai além de
            somente postar nas redes sociais, é um conjunto de estratégias que
            podem levar a sua marca a patamares jamais vistos antes. É aí que
            entra a importância de contar com um time preparado e dedicado, como
            a BMouse.
          </p>
          <p className="text-white text-lg text-left leading-8">
            Estamos aqui para garantir que sua empresa esteja sempre atualizada,
            mantendo-a à frente da concorrência, conquistando a atenção do
            público e alcançando novos lugares. Afinal, colocar a sua confiança
            nas mãos de profissionais é o caminho certo para obter resultados
            positivos e impulsionar o sucesso do seu negócio.
          </p>
          <p className="text-white text-lg text-left leading-8">
            Junte-se a nós e experimente o poder do marketing bem planejado.
          </p>
          <div className="w-[80%] self-center lg:self-start md:w-[50%] lg:w-[80%]">
            <Botao />
          </div>
        </div>

        <div className="flex items-center justify-center max-w-[600px]  ">
          <img src={Investimento} alt="" className="w-[100%] rounded-xl" />
        </div>
      </div>
      <hr />
    </section>
  );
};
