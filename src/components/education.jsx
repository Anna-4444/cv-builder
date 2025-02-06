export function EducationInfo( { education, setEducation}) {
    function handleAddButton() {
        setEducation([...education, {
                            degree: "",
                            institution: "",
                            location: "",
                            startDate: "",
                            endDate: "", 
                            misc: "",
                            open: true,
                        }])
    }
    function handleChange(index, e) {
        const { name, value } = e.target;
        const updatedEducation = education.map((edu, i) => i === index ? { ...edu, [name]: value } : edu);
        setEducation(updatedEducation);
    }
    function handleDeleteButton(index) {
        const updatedEducation = education.filter((edu, i) => i !== index);
        setEducation(updatedEducation);
    }
    function handleSaveButton(index) {
        const updatedEducation = education.map((edu, i) => i === index ? { ...edu, open: false } : edu);
        setEducation(updatedEducation);
    }
    function handleEditButton(index) {
        const updatedEducation = education.map((edu, i) => i === index ? { ...edu, open: true } : edu);
        setEducation(updatedEducation);
    }
    const educationItems = education.map((edu, index) => edu.open ? (
        <div key={index}>
            <form>
                <label>
                    Degree:
                    <input type="text" id="degree" name="degree" value={edu.degree} 
                    onChange={(e) => handleChange(index, e)} />
                </label>
                <label>
                    Institution:
                    <input type="text" id="institution" name="institution" value={edu.institution} 
                    onChange={(e) => handleChange(index, e)} />
                </label>
                <label>
                    Location:
                    <input type="text" id="location" name="location" value={edu.location} 
                    onChange={(e) => handleChange(index, e)} />
                </label>
                <label>
                    Start Date:
                    <input type="text" id="startDate" name="startDate" value={edu.startDate} 
                    onChange={(e) => handleChange(index, e)} />
                </label>
                <label>
                    End Date:
                    <input type="text" id="endDate" name="endDate" value={edu.endDate} 
                    onChange={(e) => handleChange(index, e)} />
                </label>
                <label>
                    Honors or Achievements:
                    <input type="text" id="misc" name="misc" value={edu.misc} 
                    onChange={(e) => handleChange(index, e)} />
                </label>
                <button onClick={() => handleDeleteButton(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    Delete
                </button>
                <button onClick={() => handleSaveButton(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                    Save
                </button>
            </form>
        </div>
    ) : (
        <div key={index}>
            <div>{edu.degree}</div>
            <div>{edu.institution}</div>
            <button onClick={() => handleEditButton(index)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                Edit
            </button>
        </div>
    ));
    return (
        <div>
            <h2>Education</h2>
            {educationItems}
            <button onClick={handleAddButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                Add Work Experience
            </button>
        </div>
    )
}

export function ResumeEducationInfo({ education }) {
    const resumeEducationItems = education.map((edu, index) => (
        <div key={index}>
            <div>{edu.degree}</div>
            <div>{edu.institution}</div>
            <div>{edu.location}</div>
            <div>{edu.startDate}</div>
            <div>{edu.endDate}</div>
            <div>{edu.misc}</div>
        </div>
    ))
    return (
        <div>
            <h2>Education</h2>
            {resumeEducationItems}
        </div>
        
    )
}