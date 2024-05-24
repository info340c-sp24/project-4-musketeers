import React, { useState } from 'react';

function CommunityForm() {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [artistNames, setArtistNames] = useState(['']);  // Initialize with one empty string

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project Name:', projectName);
    console.log('Project Description:', projectDescription);
    console.log('Artist Names:', artistNames);
    // Optionally, reset the form state here if necessary
  };

  // Handler to add new artist name input
  const addArtistNameInput = () => {
    setArtistNames([...artistNames, '']);
  };

  // Handler to update specific artist name in the state
  const handleArtistNameChange = (index, value) => {
    const newArtistNames = [...artistNames];
    newArtistNames[index] = value;
    setArtistNames(newArtistNames);
  };

  // Handler to delete an artist name input
  const deleteArtistNameInput = (index) => {
    const newArtistNames = artistNames.filter((_, idx) => idx !== index);
    setArtistNames(newArtistNames);
  };

  const formContainerStyle = {
    textAlign: 'left',
    maxWidth: '600px',
    margin: '0 auto',
    paddingTop: '80px',
    paddingBottom: '80px'
  };

  const labelStyle = {
    marginBottom: '5px',
    display: 'block',
    fontWeight: 'bold'
  };

  const inputStyle = {
    width: 'calc(100% - 45px)',  // Adjust width to accommodate buttons
    padding: '8px',
    margin: '10px 5px 10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    display: 'inline-block'
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 12px',
    margin: '10px 0',
    backgroundColor: '#fbeaeb',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <div style={formContainerStyle}>
      <h1 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold' }}>Add a New Project</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={labelStyle}>Project Name:</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            style={{ ...inputStyle, width: '100%' }}
          />
        </div>
        <div>
          <label style={labelStyle}>Project Description:</label>
          <textarea
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            style={{ ...inputStyle, height: '100px', width: '100%' }}
          />
        </div>
        <div>
          <label style={labelStyle}>Artist Names:</label>
          {artistNames.map((name, index) => (
            <div key={index}>
              <input
                type="text"
                value={name}
                onChange={(e) => handleArtistNameChange(index, e.target.value)}
                style={inputStyle}
              />
              {index > 0 && (
                <button type="button" onClick={() => deleteArtistNameInput(index)} style={{ ...buttonStyle, backgroundColor: '#8aaae5', marginLeft: '5px' }}>X</button>
              )}
            </div>
          ))}
          <button type="button" onClick={addArtistNameInput} style={buttonStyle}>+ Add Artist</button>
        </div>
        <button type="submit" style={{ ...buttonStyle, width: '100%', marginTop: '20px' }}>Submit</button>
      </form>
    </div>
  );
}

export default CommunityForm;