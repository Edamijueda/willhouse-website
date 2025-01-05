/* eslint-disable no-multi-str */
import React from 'react';
import './CoachingProgram.css';
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
} from "react-icons/fa";

const CoachingProgram = () => {
  const [header] = React.useState({
    mainHeader: "Coaching Program ",
    subHeading: "My Services",
    text:
      "Empowering hearts and minds with truth, love, and wisdom. W. E. Smith is a dynamic author, playwright, speaker, and spiritual thinker, dedicated to dispelling myths, inspiring healing, and sharing transformative stories..",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Customize Spiritual Coaching",
      text:
        "Through unique lens, Offers tailored seminars to help individuals explore spiritual truths.",
    },
    {
      id: 2,
      icon: <FaCamera className="commonIcons" />,
      heading: "Authors Workshop ",
      text:
        "Guides aspiring writers to craft impactful stories & uncover their creative voice." ,
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Public Speaker/Counselor",
      text:
        "Talks that foster understanding on topics like relationships, and personal healing.",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachingProgram;
