import { Botao } from "../../components/Button";

export const SectionTwo = () => {
  return (
    <section className="bg-[#181b1f] ">
      <div className="container rounded-xl m-auto flex flex-col px-3 py-20 gap-10 items-center justify-center ">
        <h1 className="text-2xl text-center leading-[2.125rem] md:leading-[2.5rem] md:text-4xl 2xl:text-[2.5rem] 2xl:leading-[3.5rem] text-white w-full md:w-[80%]">
          SOMOS{" "}
          <strong className="text-[#99CC33]">ESPECIALISTAS EM AGRO</strong>{" "}
        </h1>
        <div className=" bg-[#99CC33] p-2 2x:p-5 rounded-2xl  2xl:w-[760px] 2xl:h-[455px]">
          <iframe
            src="https://www.youtube.com/embed/GFJB5aT9msM?si=mdrDPx3VdjX0epWv"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="rounded-md w-full h-full"
          ></iframe>
        </div>
        <div className="w-[100%] md:w-[50%]">
          <Botao />
        </div>
      </div>
      <hr />
    </section>
  );
};
