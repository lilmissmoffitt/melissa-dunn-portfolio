import '../assets/stylesheets/Projects.css';
import movieNightProject from '../assets/images/movieNight.png'
import betterTimesProject from '../assets/images/betterTimes.png'
import munchiesMelonsProject from '../assets/images/munchiesMelons.png'

const Projects = () => {
  return (
    <section id="projects" style={{backgroundColor: "#AFA8AB", color: "white"}}>
        <h2>Projects</h2>
        <p>Please reach out directly to see my personal coding projects.</p>
        <hr/>
      <div>
        <h3>Figma Designs</h3>
        <a
        href="https://www.figma.com/file/Belt9Pz8iwHO4R6bm8sRIU/G2-MovieNight-Project?type=design&node-id=33%3A21&mode=design&t=U4VkFWILLfbmpZXS-1"
        target="_blank"
        rel="noopener noreferrer"
        >
          <img
          className="thumbnail"
          src={movieNightProject}
          alt="Movie Night Figma Project Thumbnail"
          />
        </a>

        <a
        href="https://www.figma.com/design/q3XElx0qutstcXbv8KSfmL/Practice?node-id=0-1&t=XbYZwTz2sIdACUwm-1"
        target="_blank"
        rel="noopener noreferrer"
        >
          <img
          className="thumbnail"
          src={betterTimesProject}
          alt="BetterTimes Figma Project Thumbnail"
          />
        </a>

        <a
        href="https://www.figma.com/design/iLeRvaIY1ytWXhrZY4RFvZ/MuNCHIESMeLONS?node-id=0-1&t=vXKatjN2g0kKiMTe-1"
        target="_blank"
        rel="noopener noreferrer"
        >
          <img
          className="thumbnail"
          src={munchiesMelonsProject}
          alt="MunchiesMelons Figma Project Thumbnail"
          />
        </a>
      </div>
        {/* <div>
          <h3>Ruby</h3>
          <div className="project-list">
            <div className="project">
            </div>
          </div>
        </div>
        <div>
          <h3>React</h3>
          <div className="project-list">
            <div className="project">
            </div>
          </div>
        </div>
        <div>
          <h3>Python</h3>
          <div className="project-list">
            <div className="project">
            </div>
          </div>
        </div>
        <div>
          <h3>Java</h3>
          <div className="project-list">
            <div className="project">
            </div>
          </div>
        </div>
        <div>
          <h3>HTML/CSS</h3>
          <div className="project-list">
            <div className="project">
            </div>
          </div>
        </div> */}
    </section>
  );
};

export default Projects;
