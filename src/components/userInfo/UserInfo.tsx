import userImage from "../../assets/userImage.jpeg";

export default function UserInfo() {
  return (
    <div className="flex justify-center mt-7 mb-7">
      <div className="mr-9">
        <img
          src={userImage}
          alt="Imagem do usuário"
          className="w-48 h-48 rounded-full"
        />
      </div>
      <div className="w-1/3 text-left text-white">
        <p className="mb-3 font-bold text-3xl">Luis Eduardo</p>
        <p>
          Olá! Sou desenvolvedor de software com formação em ciências da
          computação. Gosto de aprender e compartilhar conhecimentos em diversas
          áreas, especialmente quando se trata de programação
        </p>
      </div>
    </div>
  );
}
