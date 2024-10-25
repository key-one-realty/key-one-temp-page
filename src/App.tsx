import "./App.css";
import bgVideo from "./assets/bg_video.mp4";
import keyOneLogo from "./assets/key_one_logo.png";
import Services from "./components/Services";

function App() {
  return (
    <>
      <main className="max-w-screen w-full max-h-screen h-full">
        <header className="main-header flex justify-center items-center w-full h-full pt-16 lg:pt-24">
          <video autoPlay muted loop id="bgVideo">
            <source src={bgVideo} type="video/mp4" />
          </video>
          <div className="overlay bg-white absolute top-0 left-0 w-screen h-screen z-20"></div>
          <div className="main-content z-30 w-full h-full">
            <div className="navbar w-full flex flex-col justify-center items-center gap-3 lg:gap-7">
              <img
                src={keyOneLogo}
                alt="key one logo"
                className="object-cover w-[117px] h-[20px] lg:w-[191px] lg:h-[32px]"
              />
              <p className="text-base font-light text-black">let’s property</p>
            </div>
            <div className="main-services-container flex justify-center items-center w-full h-[80svh] lg:h-[75svh] px-9">
              <Services />
            </div>
          </div>
        </header>
      </main>
    </>
  );
}

export default App;
