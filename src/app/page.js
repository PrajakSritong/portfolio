import Marquee from "react-fast-marquee";
export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/pink-moon.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
      className="relative w-full min-h-screen overflow-x-hidden"
    >
      {/* Navbar */}
      <nav className="bg-gray-700 text-white py-3 px-4 flex items-center justify-between fixed top-0 left-0 w-full z-10">
        <a className="font-bold text-xl tracking-tight md:px-40 text-pink-800">
          PJ.
        </a>
        <div className="flex items-center md:px-40">
          <a
            className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
            href="#"
          >
            Home
          </a>
          <a
            className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
            href="#about"
          >
            About
          </a>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between md:px-40 px-4 pt-32 gap-8 mb-20">
        <div className="flex-1">
          <p className="text-2xl text-white mb-2">Hello, Am</p>
          <h1 className="text-4xl md:text-6xl bg-gradient-to-r from-red-500 via-violet-500 to-pink-500 bg-clip-text text-transparent font-bold">
            Prajak Sritong
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 mt-3 mb-2">
            Web Developer, Software Engineering <br /> Student
          </h2>
          <h2 className="text-gray-400 mt-3 mb-2">
            Solving intricate problems with innovative and <br /> streamlined
            tech solutions.
          </h2>
        </div>

        {/* Terminal Card */}
        <div className="card flex-1 max-w-md w-full">
          <div className="wrap">
            <div className="terminal">
              <hgroup className="head flex items-center justify-between">
                <p className="title flex items-center gap-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16px"
                    width="16px"
                  >
                    <path d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" />
                  </svg>
                  Terminal
                </p>
                <button type="button" tabIndex={-1} className="copy_toggle">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16px"
                    width="16px"
                  >
                    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                    <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                  </svg>
                </button>
              </hgroup>
              <div className="body">
                <pre className="pre">
                  <code>-&nbsp;</code>
                  <code>npm&nbsp;</code>
                  <code data-cmd="npm run dev" className="cmd"></code>
                </pre>
                <pre className="pre">
                  <code>-&nbsp;</code>
                  <code>npx&nbsp;</code>
                  <code data-cmd="npx expo start" className="cmd"></code>
                </pre>
                <pre className="pre">
                  <code>-&nbsp;</code>
                  <code>const&nbsp;</code>
                  <code data-cmd="x=5" className="cmd"></code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Marquee Section */}
      <div className=" py-10 mx-30">
        <Marquee speed={200}>
          <div className="gap-40 flex items-center justify-center mx-10">
            <img className="w-24 h-24 rounded-sm" src="/Python.png" alt="Python" />
            <img className="w-24 h-24 rounded-sm" src="/HTML5.png" alt="HTML5" />
            <img className="w-24 h-24 rounded-sm" src="/Next.js.png" alt="Next.js" />
            <img className="w-24 h-24 rounded-sm" src="/PHP.png" alt="PHP" />
            <img className="w-24 h-24 rounded-sm" src="/Tailwind CSS.png" alt="Tailwind CSS" />
            <img className="w-24 h-24 rounded-sm" src="/JavaScript.png" alt="JavaScript" />
          </div>
        </Marquee>
      </div>
      {/* About Section */}
      <div
        id="about"
        className=" container mx-auto mt-35 p-4 rounded-lg shadow-lg pb-14"
      >
        <h1 className="text-6xl font-bold  text-white mb-4">About Me</h1>
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-file-text w-5 h-5 text-primary"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
            <path d="M10 9H8"></path>
            <path d="M16 13H8"></path>
            <path d="M16 17H8"></path>
          </svg>{" "}
          Bio
        </h3>
        <div className=" mb-10">
          <p className="text-gray-300">
            Im a passionate web developer with a love for creating beautiful
            and functional user experiences. My journey in tech started with a
            curiosity for how things work, and it has evolved into a
            full-fledged career where I get to solve problems and bring ideas to
            life.
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1 ring-2 ring-pink-500/50 shadow-xl px-4 inset-ring-2 ring-pink-500 shadow-pink-500/50 py-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-graduation-cap w-5 h-5 text-primary"
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                <path d="M22 10v6"></path>
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
              </svg>{" "}
              Education
            </h3>
            <p>Khon Kaen University</p>
            <p>Faculty of Interdisciplinary Studies</p>
            <p>Department of Computer Science and Information</p>
            <p>2022 ~ present</p>
          </div>
          <div className="flex flex-col gap-1 ring-2 ring-pink-500/50 shadow-xl px-4 inset-ring-2 ring-pink-500 shadow-pink-500/50 py-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-briefcase w-5 h-5 text-primary"
              >
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
              </svg>{" "}
              Coursework
            </h3>
            <p>Designed databases and wrote SQL queries</p>
            <p>Developed websites using HTML, CSS, and JavaScript</p>
            <p>Implemented server-side programming with database integration</p>
            <p>Developed mobile applications</p>
          </div>
        </div>
      </div>
    </div>
  );
}
