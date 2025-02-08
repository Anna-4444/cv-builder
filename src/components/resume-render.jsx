export function ResumePersonalInfo({ person }) {
    return (
        <>
            <div className="nameTitle">
                <h1>{person.firstName} {person.lastName}</h1>
                <h3>{person.occupation}</h3>
            </div>
            <div className="contact">
                <h2>Contact</h2>
                <div className="contactInfo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <div>{person.email}</div>
                </div>
                <div className="contactInfo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <div>{person.phone}</div>
                </div>
                <div className="contactInfo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <div>{person.location}</div>
                </div>
                <div className="contactInfo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    <div>{person.linkedIn}</div>
                </div>
                <div className="contactInfo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <div>{person.portfolio}</div>
                </div>
            </div>  
            <div className="objective">
                <h2>About Me</h2>
                <div>{person.objective}</div>
            </div> 
        </>
    )
}

export function ResumeProfilePic({ profilePic }) {
    return (
        <div className="profilePic">
            <img src={profilePic} 
                alt="profile picture"  
                style={{
                height: '200px',
                width: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
            }} />
        </div>  
    )
}

export function ResumeWorkInfo({ work }) {
    const resumeWorkItems = work.map((job, index) => (
        <div className="job" key={index}>
            <div className="titleDate">
                <h3>{job.jobTitle}</h3>
                <div>{job.startDate} - {job.endDate}</div>
            </div>
            <div className="coLoc">
                <div>{job.company}</div>
                <div>{job.location}</div>
            </div>
            <div className="respons">{job.responsibilities}</div>
        </div>
    ))
    return (
        <div className="experience">
            <h2>Experience</h2>
            {resumeWorkItems}
        </div>
    )
}

export function ResumeEducationInfo({ education }) {
    const resumeEducationItems = education.map((edu, index) => (
        <div className="edu" key={index}>
            <div className="degreeDate">
                <h3>{edu.degree}</h3>
                <div>{edu.startDate} - {edu.endDate}</div>
            </div>
            <div className="insLo">
                <div>{edu.institution}</div>
                <div>{edu.location}</div>
            </div>   
            <div className="misc">{edu.misc}</div>
        </div>
    ))
    return (
        <div className="education">
            <h2>Education</h2>
            {resumeEducationItems}
        </div>
        
    )
}