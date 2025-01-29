import { useState } from 'react'
import './App.css'
import { PersonalInfo, ResumePersonalInfo } from './components.jsx'

function App() {
  const [person, setPerson] = useState({
    firstName: "Jane",
    lastName: "Doe",
  });

  return (
    <>
    <div className="resumeBuilder">
      <h1>Personal Information</h1>
      <PersonalInfo person={person} setter={setPerson} />
    </div>
    <div className="resumeRender">
      <ResumePersonalInfo person={person} />
    </div>
    </>
  );
}

export default App
