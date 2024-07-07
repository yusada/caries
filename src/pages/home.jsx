import tooth from "../assets/images/media/tooth.svg";
import bg from "../assets/images/media/bg.svg";
import dentist from "../assets/images/media/dentist.svg";
import enamel from "../assets/images/media/Enamel.svg";
import dentin from "../assets/images/media/Dentin.svg";
import pulp from "../assets/images/media/Pulp.svg";
import mailIcon from "../assets/images/media/mail.svg";
import phoneIcon from "../assets/images/media/phone.svg";
import modelr from "../assets/images/media/modelr.svg";
import modelk from "../assets/images/media/modelk.svg";

export function HomePage() {
  return (
    <div>
      <header className="w-full flex justify-center absolute h-20 z-10">
        <nav className="flex justify-center items-center w-11/12 gap-8 relative">
          <div className="absolute">
            <img src={tooth} alt="tooth" />
          </div>
          <div className="text-white text-2xl font-bold">Caries Detection</div>
          <div className="flex justify-end items-center grow gap-4">
            <a className="text-white text-lg" href="#model">
              Model
            </a>
            <a className="text-white text-lg" href="#about">
              About
            </a>
          </div>
          <div>
            <a
              href="/detection"
              className="text-white border rounded-full py-2 px-7"
            >
              Detect
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="w-full flex justify-center relative overflow-visible min-h-screen">
          <img
            className="absolute w-full h-full object-cover"
            src={bg}
            alt="bg"
          />
          <div className="w-11/12 flex justify-center relative items-center gap-20">
            <div className="lg:w-1/2 lg:pl-24 w-full">
              <h1 className="text-white text-4xl font-bold">
                Welcome <br />
                to Caries Detection
              </h1>
              <p className="text-white text-lg mt-2">
                by using <span className="font-bold">Deep Learning</span>,
                dental caries
                <br />
                can be identified the type of caries you have
              </p>
              <button className="text-white text-sm border rounded-full py-2 px-7 mt-5">
                <a href="/detection">Get Started</a>
              </button>
            </div>
            <div className="w-1/2 lg:flex hidden justify-center">
              <img src={dentist} alt="dentist" />
            </div>
          </div>
        </section>

        <section className="w-full flex justify-center relative z-10 py-20 mt-32">
          <div className="w-11/12 text-center">
            <h2 className="font-bold text-2xl" id="about">
              About
            </h2>
            <p className="text-blue-400 mt-4 lg:w-2/3 w-full mx-auto">
              <span className="font-bold">Dental Caries</span>. Tooth decay,
              also known as dental caries, is a dental and oral health condition
              that can affect anyone. The symptoms include increased tooth
              sensitivity and pain when consuming sweet, cold, or hot foods.
            </p>
            <div className="flex lg:flex-row flex-col lg:gap-8 gap-0 mt-10 justify-center">
              <div className="flex justify-between items-center">
                <img src={enamel} alt="Enamel" />
              </div>
              <div className="flex justify-between items-center">
                <img src={dentin} alt="Dentin" />
              </div>
              <div className="flex justify-between items-center">
                <img src={pulp} alt="Pulp" />
              </div>
            </div>
          </div>
        </section>

        <section
          id="model"
          className="w-full flex justify-center relative z-10 py-20"
        >
          <div className="w-11/12 text-center">
            <h2 className="font-bold text-2xl">Model</h2>
            <p className="text-blue-400 mt-4 lg:w-2/3 w-full mx-auto">
              <span className="font-bold"></span>
              This is confusion matrix of the two SNN models and Classification
              that used to predict caries or non - caries
            </p>
            <div className="model-container">
              <img className="model-image" src={modelr} alt="modelr" />
              <img className="model-image" src={modelk} alt="modelk" />
            </div>
          </div>
        </section>

        <section className="w-11/12 flex justify-center py-20 bg-[#ECF8FF] mx-20">
          <div className="w-10/12 flex lg:flex-row flex-col gap-5">
            <div className="lg:w-1/3 w-full">
              <h2 className="font-bold text-2xl">Contact Us</h2>

              <div className="flex items-center mt-8 gap-4">
                <img src={mailIcon} alt="icon-email" />
                <div>
                  <h3 className="font-bold">Mail</h3>
                  <p>example@email.com</p>
                </div>
              </div>
              <div className="flex items-center mt-4 gap-4">
                <img src={phoneIcon} alt="icon-phone" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p>089547638123</p>
                </div>
              </div>

              <h2 className="font-bold text-2xl mt-12">Navigation</h2>
              <div className="flex flex-col mt-4 gap-3">
                <a className="text-blue-400" href="#model">
                  Model
                </a>
                <a className="text-blue-400" href="#about">
                  About
                </a>
              </div>
            </div>

            <div className="lg:w-2/3 w-full">
              <form>
                <div className="flex w-full gap-4">
                  <div className="w-full">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full border rounded-full py-2 px-4 mt-2"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full border rounded-full py-2 px-4 mt-2"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full border rounded-full py-2 px-4 mt-2"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full border rounded-lg py-2 px-4 mt-2"
                  ></textarea>
                </div>
                <div className="mt-4 w-full flex justify-end">
                  <button className="text-white bg-slate-900 border rounded-full py-2 px-7">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
