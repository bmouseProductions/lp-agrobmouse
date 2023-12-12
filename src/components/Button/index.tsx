import { Button } from "@material-tailwind/react";

interface BotaoProps {
  estilo?: "principal" | "secundario";
}

export const Botao: React.FC<BotaoProps> = ({ estilo = "principal" }) => {
  function redirecionar() {
    window.open("https://bmouseproductions.com/view/atendimento/", "_blank");
  }

  return (
    <Button
      onClick={redirecionar}
      size="lg"
      className={`${
        estilo === "principal"
          ? "bg-[#99CC33] text-[#181b1f]"
          : "bg-[#32592E] text-white "
      } w-full font-bold rounded-md wpp`}
      id="botao-contato"
    >
      Entre em contato conosco
    </Button>
  );
};
