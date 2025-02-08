export function PersonalInfo({ person, setPerson, setProfilePic }) {
    function handleProfilePicChange(e, setProfilePic) {
        if (e.target.files.length !== 0) {
          setProfilePic(URL.createObjectURL(e.target.files[0]));
        }
    }
    function handleSaveButton() {
        setPerson({ ...person, open: false })
    }
    function handleEditButton() {
        setPerson({ ...person, open: true })
    }
    return (
        <div>
            <h2>Personal Information</h2>
            {person.open ? (
            <form>
                <label>First Name:</label>
                    <input type="text" id="firstName" name="firstName" value={person.firstName} 
                    onChange={(e) => setPerson({...person, firstName: e.target.value})}/>
                <label>Last Name:</label>
                    <input type="text" id="lastName" name="lastName" value={person.lastName} 
                    onChange={(e) => setPerson({...person, lastName: e.target.value})} />
                <label>E-mail Address:</label>
                    <input type="email" id="email" name="email" value={person.email} 
                    onChange={(e) => setPerson({...person, email: e.target.value})} />
                <label>Phone Number:</label>
                    <input type="tel" id="phone" name="phone" value={person.phone} 
                    onChange={(e) => setPerson({...person, phone: e.target.value})} />
                <label>Location:</label>
                    <input type="text" id="location" name="location" value={person.location} 
                    onChange={(e) => setPerson({...person, location: e.target.value})} />
                <label>Occupation:</label>
                    <input type="text" id="occupation" name="occupation" value={person.occupation} 
                    onChange={(e) => setPerson({...person, occupation: e.target.value})} />
                <label>LinkedIn:</label>
                    <input type="text" id="linkedIn" name="linkedIn" value={person.linkedIn} 
                    onChange={(e) => setPerson({...person, linkedIn: e.target.value})} />
                <label>Portfolio:</label>
                    <input type="text" id="portfolio" name="portfolio" value={person.portfolio} 
                    onChange={(e) => setPerson({...person, portfolio: e.target.value})} />
                <label>Objective Statement:</label>
                    <textarea id="objective" name="objective" value={person.objective}
                    onChange={(e) => setPerson({...person, objective: e.target.value})}></textarea>
                    {/* <input type="textarea" id="objective" name="objective" value={person.objective} 
                    onChange={(e) => setPerson({...person, objective: e.target.value})} /> */}
                <label>Profile Picture:</label>
                    <input type="file" id="profilePic" name="profilePic" accept="image/*" onChange={(e) => handleProfilePicChange(e, setProfilePic)} />
                <div className="buttonDiv">
                    <div></div>
                    <button className="save" onClick={handleSaveButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                        Save
                    </button>
                </div>
            </form>
            ) : (
            <div className="perCard">
                <div>{person.firstName} {person.lastName}</div>
                <button className="edit" onClick={handleEditButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                Edit
                </button>
            </div>
            )}
        </div>
    )
}

