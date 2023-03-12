import "./index.css";
import photo from "../images/photoMain.jpg";
import projectPhoto from "../images/todolist.png";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
} from "react-icons/ai";

const experience = [
  {
    id: "1",
    date: "09/2021 - Present",
    role: "Procurement specialist",
    location: "Saran, Kazakhstan",
    company: "KCEP LLP",
    sector: "Optic Cable Manufacturer",
    description: [
      "Cooperating with other departments, I worked to keep the technical condition of locomotives, made a schedule of repairs.",
    ],
  },
  {
    id: "2",
    date: "06/2018 - 09/2021",
    role: "Engineer Technologist",
    location: "Karagandy, Kazakhstan",
    company: "Tranco Nura LLP",
    sector: "RAilway Transportation",
    description: [
      "Delivery of high-quality raw materials on time at an affordable price to ensure production with materials",
    ],
  },
];

export default function Main(ref) {
  return (
    <div>
      <div className="section1">
        <div className="section1-Text">
          <p className="section1-Header">
            Hi, I’m Kuanysh, <br /> I build things for the web.
          </p>
          <p className="texts-all">
            I’m software developer and this is my portfolio.
          </p>
        </div>
        <button
          onClick={(event) =>
            window.open(
              "https://docs.google.com/document/d/1VJCEuUUIRgsL5avlmxEKw4PMhWTSrZN3gDYlFD2HQdo/edit?usp=sharing",
              "_blank"
            )
          }
        >
          Check out my CV
        </button>
      </div>

      <div id="sectiton-about" className="section2">
        <div className="section2-About">
          <p className="section1-Header">About me</p>
        </div>
        <div className="section2-Part1">
          <div className="section2-Part2">
            <p className="texts-all">
            I am on the way to achieve big goals in the IT industry.
              <br /> Currently nFactorial student <br></br>What nFactorial taught me:
            </p>

            <div className="About-details">
              <ul className="listLeft">
                <li className="texts-all">Basic Java</li>
                <li className="texts-all">HTML, CSS, Javascript</li>
              </ul>
              <ul className="listRight">
                <li className="texts-all">React JS</li>
                <li className="texts-all">
                  Frameworks: Bootstrap, Material UI
                </li>
              </ul>
            </div>
          </div>
          <div className="image">
            <img
              src={photo}
              alt="MyPhoto"
              style={{ width: 350, height: 360 }}
            />
          </div>
        </div>
      </div>

      <div id="sectiton-experience" className="section3">
        <p className="section1-Header">Experience</p>
        {experience.map((item, index) => (
          <div className="experience-table" key={index}>
            <p className="texts-date">{item.date}</p>
            <div className="Experience-table-right">
              <p className="texts-Role">{item.role}</p>
              <p className="texts-Company">{item.company}</p>
              <p className="texts-location">{item.location}</p>
              <p className="texts-sector">{item.sector}</p>
              <p className="texts-resp">
                {item.description.map((item, ind) => (
                  <span key={ind}>
                    - {item} <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div id="sectiton-projects" className="section4">
        <p className="section1-Header">Projects I've Worked On</p>
        <div className="section4-all">
          <div className="image">
            <img
              src={projectPhoto}
              alt="MyPhoto"
              style={{ width: " 85%", height: 360 }}
            />
          </div>
          <div className="section4-2">
            <p className="section1-Header">To Do List</p>
            <p className="texts-all">
              This project was a part of study program at nFactorial School.
            </p>
            <p className="texts-all">Stack: ReactJS</p>
          </div>
        </div>
      </div>

      <div id="sectiton-contact" className="section5">
        <div className="section1-Text">
          <p className="section1-Header">Say Hello!</p>
          <p className="texts-all">Feel free to reach me via:</p>
        </div>
        <div className="section5-buttons">
          <button
            onClick={() =>
              window.open("mailto:kuka.amenov@gmail.com", "_blank")
            }
          >
            <AiOutlineMail size={56} />
          </button>
          <span>or </span>
          <button
            onClick={(event) => window.open("//wa.me/+77085652414", "_blank")}
          >
            <AiOutlineWhatsApp size={56} />
          </button>
          <span>or </span>
          <button
            onClick={(event) =>
              window.open(
                "https://www.tinder.com/",
                "_blank"
              )
            }
          >
            <AiOutlineLinkedin size={56} />
          </button>
        </div>
      </div>
    </div>
  );
}