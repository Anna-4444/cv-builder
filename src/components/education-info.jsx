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
        <div className="eduForm" key={index}>
            <form>
                <label>Degree:</label>
                    <input type="text" id="degree" name="degree" value={edu.degree} 
                    onChange={(e) => handleChange(index, e)} />
                <label>Institution:</label>
                    <input type="text" id="institution" name="institution" value={edu.institution} 
                    onChange={(e) => handleChange(index, e)} />
                <label>Location:</label>
                    <input type="text" id="location" name="location" value={edu.location} 
                    onChange={(e) => handleChange(index, e)} />
                <label>Start Date:</label>
                    <input type="text" id="startDate" name="startDate" value={edu.startDate} 
                    onChange={(e) => handleChange(index, e)} />            
                <label>End Date:</label>
                    <input type="text" id="endDate" name="endDate" value={edu.endDate} 
                    onChange={(e) => handleChange(index, e)} />
                <label>Honors or Achievements:</label>
                    <textarea id="misc" name="misc" value={edu.misc} 
                    onChange={(e) => handleChange(index, e)}></textarea>
                    {/* <input type="text" id="misc" name="misc" value={edu.misc} 
                    onChange={(e) => handleChange(index, e)} /> */}
                <div className="buttonDiv">
                    <button className="delete" onClick={() => handleDeleteButton(index)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        Delete
                    </button>
                    <button className="save" onClick={() => handleSaveButton(index)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                        Save
                    </button>
                </div> 
            </form>
        </div>
    ) : (
        <div className="eduCard" key={index}>
            <div>
                <div>{edu.degree}</div>
                <div>{edu.institution}</div>
            </div>
            <button className="edit" onClick={() => handleEditButton(index)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                Edit
            </button>
        </div>
    ));
    return (
        <div>
            <h2>Education</h2>
            {educationItems}
            <button className="add" onClick={handleAddButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                Add Education
            </button>
        </div>
    )
}

