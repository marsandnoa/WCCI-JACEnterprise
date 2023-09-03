import AboutList from "../Lists/AboutList";

const About = () => {
  const STUDENT_DATA = [
    {
      id: "s1",
      name: "Noah Marsteller",
      biography:
        "I am a Cincinnati native, and I work at Amazon Air in Wilmington"
    }

  ];

  return (
    <section>
      <h1>Meet The Team</h1>
      <ul>
        <AboutList abouts={STUDENT_DATA} />
      </ul>
    </section>
  );
};

export default About;
