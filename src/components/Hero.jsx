import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <nav className="flex justify-between items-center w-full pt-3 mb-10">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <button
          className=" bg-black w-[120px] h-[40px] text-white rounded-md"
          type="button"
          onClick={() => window.open("https://github.com/Abelo73/")}
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summurize Articles With <br className="max-md:hidden" />{" "}
        <span className="orange_gradient">Open AI GPT-4</span>
      </h1>
      <h2 className="desc">Simplify your reading with Sumarize, an open-sourse articles summarizer that transform lengthy articles into clear and concise summrise.</h2>
    </header>
  );
};

export default Hero;
