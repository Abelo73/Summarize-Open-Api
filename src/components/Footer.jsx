import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
  FaUser,
  FaCode,
  FaJava,
  FaLaptopCode,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row md:justify-between lg:justify-between lg:items-center md:items-center w-full p-4 sm:p-10 justify-between ">
      <div className="mb-4 sm:mb-0 sm:mr-4">
        <h2 className="orange_gradient text-lg font-bold">About</h2>
        <p className="flex items-center text-gray-700 font-satoshi">
          <FaUser className="mr-2" /> Abel Adisu
        </p>
        <p className="flex items-center text-gray-700 font-satoshi">
          <FaPhone className="mr-2" /> +251-934-777-843
        </p>
        <p className="flex items-center text-gray-700 font-satoshi">
          <FaMapMarkerAlt className="mr-2" /> Addis Abeba
        </p>
      </div>
      <div className="mb-4 sm:mb-0 sm:mr-4">
        <h2 className="text-lg font-bold orange_gradient">Social Media</h2>
        <div className="flex flex-col text-gray-700 font-inter text-sm">
          <a
            target="_blank"
            href="https://github.com/Abelo73"
            className="flex items-center mb-2 hover:text-blue-600"
          >
            <FaGithub className="mr-2 " /> Github
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/abeladisu/"
            className="flex items-center mb-2  hover:text-blue-600"
          >
            <FaLinkedin className="mr-2 text-blue-700" /> LinkedIn
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/abelo_73/"
            className="flex items-center  hover:text-blue-600"
          >
            <FaInstagram className="mr-2 text-pink-700 hover:text-blue-600" />{" "}
            Instagram
          </a>
        </div>
      </div>
      <div className="mb-4 sm:mb-0">
        <h2 className="text-lg font-bold orange_gradient">Skills</h2>
        <p className="flex items-center text-gray-700 font-satoshi">
          <FaCode className="mr-2 text-green-600" /> Frontend | React | Next.js
        </p>
        <p className="flex items-center text-gray-700 font-satoshi">
          <FaJava className="mr-2 text-yellow-900" /> Backend | Java | Spring
          Boot
        </p>
        <p className="flex items-center text-gray-700 font-satoshi">
          <FaLaptopCode className="mr-2 text-red-700" /> FullStack | Atlas
          Computer Technology
        </p>
      </div>
    </footer>
  );
};

export default Footer;
