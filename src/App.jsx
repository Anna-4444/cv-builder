import { useRef, useState } from 'react'
import './styles/App.css'
import './styles/resume-builder.css'
import './styles/resume-render.css'
import { CSSTransition } from 'react-transition-group'
import { PersonalInfo } from './components/personal-info.jsx';
import { EducationInfo } from './components/education-info.jsx'
import { WorkInfo } from './components/work-info.jsx'
import { Button } from './components/helpers.jsx'
import { ResumePersonalInfo, ResumeProfilePic, ResumeWorkInfo, ResumeEducationInfo } from './components/resume-render.jsx'


function App() {

  const [person, setPerson] = useState({
    firstName: "Mary-Jane",
    lastName: "Smith",
    email: "example@example.com",
    phone: "123-456-5555",
    location: "City, State",
    occupation: "Web Developer",
    linkedIn: "linkedin.com/name",
    portfolio: "github.com/username",
    objective: "A statement about your career goals and how your skills and education can help you achieve them. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    open: false,
  });

  const [profilePic, setProfilePic] = useState('/profile.png');

  const [work, setWork] = useState([
    {
      jobTitle: "Front End Web Dev",
      company: "Startup",
      location: "City, State",
      startDate: "May, 2022",
      endDate: "present",
      responsibilities: "Used HTML, CSS and Javascript to build responsive, user-friendly interfaces.  Collaborated with designers to bring wireframes and mockups to life, with optimized site performance.",
      open: false,
    },
    {
      jobTitle: "Internship",
      company: "Big Company",
      location: "City, State",
      startDate: "May, 2021",
      endDate: "August 2021",
      responsibilities: "Used HTML, CSS and Javascript to build responsive, user-friendly interfaces.  Collaborated with designers to bring wireframes and mockups to life, with optimized site performance.",
      open: false,
    }
  ]);

  const [education, setEducation] = useState([
    {
      degree: "BS Computer Science",
      institution: "University of State",
      location: "City, State",
      startDate: "August, 2018",
      endDate: "May, 2022",
      misc: "GPA 3.8",
      open: false,
    }
  ]);

  const [viewResume, setViewResume] = useState(false)

  function handleViewResume() {
    setViewResume(!viewResume);
  }
  const nodeRef = useRef(null);
  
  return (
    <>
    <CSSTransition nodeRef={nodeRef} in={!viewResume} timeout={500} classNames='fade' unmountOnExit>
    <div ref={nodeRef} className='resumeBuilder'>
      <header>
        <h1>Resume Builder</h1>
        <Button className={'viewResume'} handleClick={handleViewResume} text={'View Resume'} />
      </header>
      <PersonalInfo person={person} setPerson={setPerson} setProfilePic={setProfilePic}/>
      <EducationInfo education={education} setEducation={setEducation} />
      <WorkInfo work={work} setWork={setWork} />
    </div>
    </CSSTransition>
    <CSSTransition nodeRef={nodeRef} in={viewResume} timeout={500} classNames='fade' unmountOnExit>
    <div ref={nodeRef} className='resumeRender'>
      <header>
        <h1>Resume Render</h1>
        <Button className={'editResume'} handleClick={handleViewResume} text={'Edit Resume'}/>
      </header>
      <div className='resumePage'>
        <div className="top">
          <ResumeProfilePic profilePic={profilePic} />
          <ResumePersonalInfo person={person} />
        </div>
        <div className="bottom">
          <div className="skillProject"></div>
          <div className="expEdu">
            <ResumeWorkInfo work={work}/>
            <ResumeEducationInfo education={education} />
          </div>
        </div>
        
      </div>
    </div>
    </CSSTransition>
    </>
  );
}

export default App
