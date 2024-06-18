import railsPic from '../assets/images/rails.png'
import reactPic from '../assets/images/react.png'
import psqlPic from '../assets/images/psql.png'
import jsPic from '../assets/images/js.png'
import awsPic from '../assets/images/aws.png'
import '../assets/stylesheets/Skills.css'

const Skills = () => {
  return (
    <section id="skills" style={{backgroundColor: "white"}}>
      <div className="container">
      <h2>Skills</h2>
      Ruby | Rails | RSpec | JavaScript | StimulusJS | Node | React | Redis |  RESTful APIs | TypeScript | SQL | PSQL | Python | Java | HTML | CSS | Bootstrap | Kafka | MATLAB | Git | MacOS | G-Suite | Microsoft Products | AWS | CI/CD | Jenkins | Kubernetes | Postman | Figma
      <div>
        <img
          className="icon"
          src={railsPic}
          alt="Rails Thumbnail"
        />
        <img
          className="icon"
          src={reactPic}
          alt="React Thumbnail"
        />
        <img
          className="icon"
          src={psqlPic}
          alt="PSQL Thumbnail"
        />
        <img
          className="icon"
          src={jsPic}
          alt="JS Thumbnail"
        />
        <img
          className="icon"
          src={awsPic}
          alt="AWS Thumbnail"
        />
      </div>
      </div>
    </section>
  );
};

export default Skills;
