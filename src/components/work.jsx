export function WorkInfo({ work, setWork }) {
    function handleAddButton() {
        setWork([...work, {jobTitle: "",
                            company: "",
                            location: "",
                            startDate: "",
                            endDate: "", 
                            responsibilities: "",
                            open: true,
                        }])
    }
    function handleChange(e, index) {
        const { name, value } = e.target;
        const updatedWork = work.map((job, i) => i === index ? { ...job, [name]: value } : job);
        setWork(updatedWork);
    }
    function handleDeleteButton(index) {
        const updatedWork = work.filter((job, i) => i !== index);
        setWork(updatedWork);
    }
    function handleSaveButton(index) {
        const updatedWork = work.map((job, i) => i === index ? { ...job, open: false } : job);
        setWork(updatedWork);
    }
    function handleEditButton(index) {
        const updatedWork = work.map((job, i) => i === index ? { ...job, open: true } : job);
        setWork(updatedWork);
    }
    const workItems = work.map((job, index) => job.open ? (
        <div key={index}>
            <form onSubmit={e => e.preventDefault()}>
                <label>
                    Job Title:
                    <input type="text" id="jobTitle" name="jobTitle" value={job.jobTitle}
                    onChange={(e) => handleChange(e, index)} />
                </label>
                <label>
                    Company:
                    <input type="text" id="company" name="company" value={job.company}
                    onChange={(e) => handleChange(e, index)}  />
                </label>
                <label>
                    Location:
                    <input type="text" id="location" name="location" value={job.location} 
                    onChange={(e) => handleChange(e, index)} />
                </label>
                <label>
                    Start Date:
                    <input type="date" id="startDate" name="startDate" value={job.startDate} 
                    onChange={(e) => handleChange(e, index)} />
                </label>
                <label>
                    End Date:
                    <input type="date" id="endDate" name="endDate" value={job.endDate} 
                    onChange={(e) => handleChange(e, index)} />
                </label>
                <label>
                    Responsibilities:
                    <input type="text" id="misc" name="misc" value={job.responsibilities} 
                    onChange={(e) => handleChange(e, index)} />
                </label>
                <button onClick={() => handleDeleteButton(index)}>
                    Delete
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
                <button onClick={() => handleSaveButton(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                    Save
                </button>
            </form>
        </div>
    ) : (
        <div key={index}>
            <div>{job.jobTitle}</div>
            <div>{job.company}</div>
            <button onClick={() => handleEditButton(index)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                Edit
            </button>
        </div>
    ));
    return (
        <div>
            <h2>Work Experience</h2>
            {workItems}
            <button onClick={handleAddButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                Add Work Experience
            </button>
        </div>
    )
}

export function ResumeWorkInfo({ work }) {
    const resumeWorkItems = work.map((job, index) => (
        <div key={index}>
            <div>{job.jobTitle}</div>
            <div>{job.company}</div>
            <div>{job.location}</div>
            <div>{job.startDate}</div>
            <div>{job.endDate}</div>
            <div>{job.responsibilities}</div>
        </div>
    ))
    return (
        <div>
            <h2>Work Experience</h2>
            {resumeWorkItems}
        </div>
    )
}

