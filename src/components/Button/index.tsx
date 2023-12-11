import { Button } from "@material-tailwind/react";

interface BotaoProps {
  estilo?: "principal" | "secundario";
}

export const Botao: React.FC<BotaoProps> = ({ estilo = "principal" }) => {
  function redirecionar() {
    window.open("https://www.bmouseproductions.com/view/contato", "_blank");
  }

  return (
    <Button
      onClick={redirecionar}
      size="lg"
      className={`${
        estilo === "principal"
          ? "bg-[#99CC33] text-[#181b1f]"
          : "bg-[#32592E] text-white "
      } w-full font-bold rounded-md`}
    >
      Entre em contato conosco
    </Button>
  );
};
