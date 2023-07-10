import Header from "./Header";
const Hero = () => {
  return (
    <div>
      <Header />
      <div
        className="d-flex flex-column justify-content-center text-center  bg-info rounded text-base-100 m-10 p-5 w-1/3 mx-auto
    "
      >
        <p className="ml-5 font-semibold mr-5">
          This is a boilerplate for MERN authentication that stores a JWT in an
          HTTP-Only cookie. It also uses Redux Toolkit and the React Bootstrap
          library
        </p>
        <div className="mt-5 flex">
          <button className="w-1/3 mx-auto bg-gray-800 text-base-content rounded btn">
            Sign In
          </button>
          <button className="w-1/3 mx-auto bg-gray-800 text-base-content rounded btn">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
