import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";

const HomePage = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <main className="flex-1">
        <Hero/>
        <Experience/>
        <Projects/>
      </main>
    </div>
  );
}
 
export default HomePage;
