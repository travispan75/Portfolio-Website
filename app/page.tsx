import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <Hero />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}

 
export default HomePage;
