import "./App.css";
import profileImage from "./assets/profile.jpg";
import resumeFile from "./assets/resume/Janani_Kumaresan_Resume.docx";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { profile, skills, projects, experience } from "./data";
import { cssVariables } from "./theme";

function App() {
  const profileWithResume = {
    ...profile,
    resume: {
      href: resumeFile,
      fileName: "Janani_Kumaresan_Resume.docx",
    },
  };

  return (
    <div className="App" style={cssVariables}>
      <Header name={profileWithResume.name} />

      <main id="top" className="Main">
        <Hero profile={profileWithResume} profileImage={profileImage} />
        <About profile={profileWithResume} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Contact phone={profileWithResume.phone} email={profileWithResume.email} />
      </main>
    </div>
  );
}

export default App;
