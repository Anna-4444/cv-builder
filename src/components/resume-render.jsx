export function ResumePersonalInfo({ person }) {
    return (
        <div>
            <h1>{person.firstName} {person.lastName}</h1>
            <h2>{person.occupation}</h2>
            <div>{person.objective}</div>
            <div>{person.email}</div>
            <div>{person.phone}</div>
            <div>{person.location}</div>
            <div>{person.linkedIn}</div>
            <div>{person.portfolio}</div>
        </div>
    )
}

export function ResumeProfilePic({ profilePic }) {
    return (
        <img src={profilePic} 
             alt="why wont this picture load"  
             style={{
                height: '140px',
                width: '140px',
                borderRadius: '50%',
                margin: '35px auto',
                objectFit: 'cover',
             }} />
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