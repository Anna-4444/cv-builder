import { useState } from 'react'
import './styles/App.css'
import { PersonalInfo, ResumePersonalInfo, ResumeProfilePic } from './components/personal-info.jsx';
import { EducationInfo, ResumeEducationInfo } from './components/education.jsx'
import { WorkInfo, ResumeWorkInfo } from './components/work.jsx'
import { Button } from './components/helpers.jsx'


function App() {

  const [person, setPerson] = useState({
    firstName: "Jane",
    lastName: "Doe",
    email: "example@example.com",
    phone: "123-456-5555",
    location: "City, State",
    occupation: "Web Developer",
    linkedIn: "https://linkedin.com/username",
    portfolio: "https://github.com/username",
    objective: "A statement about your career goals and how your skills and education can help you achieve them.",
    open: false,
  });

  const [profilePic, setProfilePic] = useState('/profile.png');

  const [work, setWork] = useState([
    {
      jobTitle: "Front End Web Dev",
      company: "Startup",
      location: "City, State",
      startDate: "2010-01-01",
      endDate: "2025-02-04",
      responsibilities: "Used HTML, CSS and Javascript to build responsive, user-friendly interfaces.  Collaborated with designers to bring wireframes and mockups to life, with optimized site performance.",
      open: false,
    },
    {
      jobTitle: "Internship",
      company: "Big Company",
      location: "City, State",
      startDate: "2010-01-01",
      endDate: "2010-01-01",
      responsibilities: "Used HTML, CSS and Javascript to build responsive, user-friendly interfaces.  Collaborated with designers to bring wireframes and mockups to life, with optimized site performance.",
      open: false,
    }
  ]);

  const [education, setEducation] = useState([
    {
      degree: "BS Computer Science",
      institution: "University of State",
      location: "City, State",
      startDate: "2025-02-04",
      endDate: "2025-08-05",
      misc: "GPA 3.8",
      open: false,
    },
    {
      degree: "BS Computer Science",
      institution: "University of State",
      location: "City, State",
      startDate: "2025-02-04",
      endDate: "2025-02-04",
      misc: "GPA 3.8",
      open: false,
    }
  ]);

  const [viewResume, setViewResume] = useState(false)

  function handleViewResume() {
    setViewResume(true)
  }
  function handleEditResume() {
    setViewResume(false)
  }
  
  return (
    <>
    <div className={viewResume ? 'resumeBuilder inactive' : 'resumeBuilder'}>
      <h1>Resume Builder</h1>
      <PersonalInfo person={person} setPerson={setPerson} setProfilePic={setProfilePic}/>
      <EducationInfo education={education} setEducation={setEducation} />
      <WorkInfo work={work} setWork={setWork} />
      <Button handleClick={handleViewResume} text={'View Resume'}/>
    </div>
    <div className={viewResume ? 'resumeRender active' : 'resumeRender'}>
      <ResumeProfilePic profilePic={profilePic} />
      <ResumePersonalInfo person={person} />
      <ResumeWorkInfo work={work}/>
      <ResumeEducationInfo education={education} />
      <Button handleClick={handleEditResume} text={'Edit Resume'}/>
    </div>
    </>
  );
}

export default App
