
export function PersonalInfo ({ person, setter }) {

    return (
        <div>
            <h2>Personal Information</h2>
            <form>
                <label>
                    First Name:
                    <input type="text" value={person.firstName} />
                </label>
                <label>
                    Last Name:
                    <input type="text" value={person.lastName} />
                </label>
            </form>
        </div>
    )
}

export function ResumePersonalInfo ({ person }) {
    return (
        <div>
            <h1>{person.firstName} {person.lastName}</h1>
            <p>test from resume</p>
        </div>
    )
}

// onChange={(e) => setPerson({...person, firstName: e.target.value})}
// onChange={(e) => setPerson({...person, lastName: e.target.value})}