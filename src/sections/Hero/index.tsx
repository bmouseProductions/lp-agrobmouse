import Planta from "../../assets/image/Hero/agro.webp";
import Drone from "../../assets/image/Hero/drone.png";
import Logo from "../../assets/image/Logos/logo.svg";
import { Botao } from "../../components/Button";

export const Hero = () => {
  return (
    <section className="bg-[#181b1f]">
      <div className=" flex flex-col lg:flex-row gap-5  lg:gap-10  items-center justify-between">
        <div className="flex flex-col flex-1 items-center justify-center gap-8 pb-20 px-5 pt-10 2xl:pt-0 2xl:px-0  2xl:ps-72">
          <img
            src={Logo}
            alt="Agro Bmouse"
            className="w-[10rem] md:w-[18rem]"
          />
          <h1 className="text-4xl  lg:text-4xl 2xl:text-[3.5rem] 2xl:leading-[4rem] text-center text-white leading-[3.125rem]">
            {" "}
            O <strong className="text-[#99CC33]">mundo evolui</strong> na
            velocidade da luz, e o{" "}
            <strong className="text-[#99CC33]">Agro precisa evoluir</strong>{" "}
            também!{" "}
          </h1>
          <p className="text-white text-base 2xl:text-xl text-center">
            Investir em marketing é investir nas novas gerações que irão
            trabalhar no seu negócio.
          </p>
          <div className="w-[80%] 2xl:w-[60%]">
            <Botao />
          </div>
        </div>

        <div className="flex-1 w-full h-full hidden xl:block !shadow-2xlxl !shadow-[#99CC33]">
          <img src={Planta} alt="Planta" className="h-[700px]  img-hero" />
        </div>
        <div className="absolute top-1 right-[20%] z-40 w-[500px] hidden xl:block">
          <img src={Drone} alt="drone" className="drone " />
        </div>

        <div className="flex-1 w-full h-full img-hero hidden lg:block xl:hidden  !shadow-2xlxl !shadow-[#99CC33]">
          <img
            src={Planta}
            alt="Planta"
            className="h-[500px]  img-hero !bg-cover"
          />
        </div>
        <div className="absolute top-12 right-[20%] z-40 w-[350px] hidden lg:block xl:hidden ">
          <img src={Drone} alt="drone" className="drone !w-[250px]" />
        </div>

        <div className="flex-1 w-full h-full block lg:hidden !shadow-2xlxl !shadow-[#99CC33]">
          <img src={Planta} alt="Planta" className="h-[300px] sm:h-full" />
        </div>
        <div className="absolute top-[7%] block lg:hidden z-40 w-full ">
          <img src={Drone} alt="drone" className="drone-mobile w-[43%] " />
        </div>
      </div>
      <hr />
    </section>
  );
};
