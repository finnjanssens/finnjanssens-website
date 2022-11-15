import Image from "next/image";
import finn from "../public/img/finn-1.png";

export default function HomePage() {
  return (
    <div className="home">
      <div className="fullscreen__container">
        <div id="home__hero">
          <svg
            viewBox="0 0 300 300"
            width="300"
            height="300"
            style={{ transform: "rotate(-138deg)" }}
          >
            <defs>
              <path
                id="circle"
                d="
        M 0, 140
        m 10, 10
        a 140,140 0 1,1 280,0
        a 140,140 0 1,1 -280,0"
              />
            </defs>
            <text font-size="17">
              <textPath
                xlinkHref="#circle"
                style={{ fill: "white", fontSize: "0.8em" }}
              >
                Portfolio • Portfolio • Portfolio • Portfolio • Portfolio •
                Portfolio • Portfolio
              </textPath>
            </text>
          </svg>
          <h1>
            {/* <span className="light">PORTFOLIO</span> */}
            FI<span className="stretch">N</span>N
            <br />
            JANSS<span className="stretch">E</span>NS
          </h1>
        </div>
      </div>
    </div>
  );
}
