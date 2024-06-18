import '../assets/stylesheets/About.css';
import profilePic from '../assets/images/ProfilePic.png';
import sneffelsPic from '../assets/images/sneffels.jpg'

const About = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${sneffelsPic})`, height: "400px"}}>
      </div>
      <section id="about" style={{backgroundColor: "#8AACD9", color: "white"}}>
        <div className="profile-container">
          <div className="profile-pic-container">
            <img className="profile-pic" src={profilePic} alt="Profile picture of Melissa Dunn" />
          </div>
          <div className="profile-info">
          <h2>About Me</h2>
            <div className="text-container">
              <p>Hi, I'm Melissa! I am a Full-Stack Software Engineer currently spending most of my time
              in Ruby on Rails. However, I have worked in many languages and am used to switching contexts
              and learning new syntax.</p>
            </div>
            <div className="text-container">
              <p>Outside the office I love to hike, backpack, paint, and create!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
