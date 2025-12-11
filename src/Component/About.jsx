import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          “Designed and executed manual test cases for internal platforms and tools.
Performed functional, regression, and UI testing to maintain platform reliability.
Reported and tracked bugs using Excel and Jira, ensuring timely resolutions.
Conducted cross-browser and responsive testing to ensure compatibility across devices.</p>

        <br />
        {/* <p className="text-xl ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie
          lorem at dui commodo lacinia. Integer accumsan, dolor non luctus
          porta, nisi magna finibus ex, ornare scelerisque dui ex eu libero.
          Cras varius, sem lacinia fringilla posuere, est tellus imperdiet dui,
          aliquam egestas per nceptos himenaeos. Aliquam ipsum purus, molestie
          sit amet convallis ut, varius eget metus. Integer lacus nunc, pulvinar
          vitae nisi lacinia, fermentum dictum lacus. Praesent accumsan lobortis
          nisl luctus varius. Curabitur laoreet nulla at elementum placerat.
        </p> */}
      </div>
    </div>
  );
};

export default About;
