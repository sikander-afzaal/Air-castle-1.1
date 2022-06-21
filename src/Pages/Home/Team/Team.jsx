import React from "react";
import TeamBox from "../../../Components/TeamBox/TeamBox";
import "./Team.css";
import team2 from "../../../Assets/TeamImgs/team2.jpg";
import team3 from "../../../Assets/TeamImgs/team3.jpg";
import team4 from "../../../Assets/TeamImgs/team4.jpg";
import team5 from "../../../Assets/TeamImgs/team5.jpg";
import team6 from "../../../Assets/TeamImgs/team6.jpg";
function Team() {
  const teamData = [
    {
      img: team2,
      url: "https://www.linkedin.com/in/rudolfvanee/",
      name: "Rudolf van Ee",
      expertise: "People, Strategy and Partnerships",
    },

    {
      img: team3,
      url: "https://www.linkedin.com/in/remcomercey/",
      name: "Remco Mercey",
      expertise: "Business Strategist Media & Entertainment",
    },
    {
      img: team4,
      url: "https://www.linkedin.com/in/vikpande/",
      name: "Vikas Pandey",
      expertise: "Web3 Tech",
    },
    {
      img: team5,
      url: "https://www.linkedin.com/in/sjoerd-de-ridder-957874238/",
      name: "Sjoerd De Ridder",
      expertise:
        "Allround creative specialized in Brand Design, UI and motion ",
    },
    {
      img: team6,
      url: "https://www.linkedin.com/in/lien-nguyen-436a7129/",
      name: "Lieng Nguyen",
      expertise: "Creative director",
    },
  ];
  return (
    <>
      <div className="team">
        <h2 className="top-sub gest">the team</h2>

        <div className="bottom-team">
          <div className="left-team">
            <p className="main-head">
              Our team consists of proven experts that have been in the Web3
              space for over 5 years, and in the entertainment industry for over
              20 years , including topnotch strategists, blockchain engineers,
              designers, creatives, marketers and community builders.
              Additionally, we have selected partners and an advisory containing
              industry leaders.
            </p>
          </div>
          <div className="right-team">
            {teamData.map((item, key) => {
              return (
                <TeamBox
                  key={"team" + key}
                  img={item.img}
                  url={item.url}
                  name={item.name}
                  expertise={item.expertise}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-bot">
        <h2 className="top-sub gest">manifesto</h2>
        <div className="row">
          <h1 className="main-head">
            Making the web more accessible and inclusive is what drives us
          </h1>
          <p className="desc">
            We do this by bringing Web3 educators, builders, entrepreneurs and
            innovators together. The Aircastle community brings equality, online
            ownership. new economies & governance models. It helps to freely
            engage (in a compliant, trusted, and privacy-preserving manner) in
            the peer-to-peer exchange of value. We believe in a future where
            culture creators are directly supported and funded by their
            participating community members: who help each other to grow &
            generate success. Aircastle is all about democratising the internet
            whilst creating brand and artist autonomy
          </p>
        </div>
      </div>
    </>
  );
}

export default Team;
