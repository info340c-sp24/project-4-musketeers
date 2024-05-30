// CommunityForm.js
import React, { useState } from 'react';

function CommunityForm() {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [artistNames, setArtistNames] = useState(['']);
  const [imageFile, setImageFile] = useState(null);
  const [errors, setErrors] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    if (!projectName) {
      formErrors.projectName = 'Project Name is required';
    }

    if (!projectDescription) {
      formErrors.projectDescription = 'Project Description is required';
    }

    if (!imageFile) {
      formErrors.imageFile = 'Project Image is required';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});

    const newProject = {
      id: new Date().getTime(),
      projectName,
      projectDescription,
      artistNames,
      imageUrl: URL.createObjectURL(imageFile)
    };

    const existingProjects = JSON.parse(localStorage.getItem('projects')) || [];
    existingProjects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(existingProjects));

    alert('Project added successfully!');

    setProjectName('');
    setProjectDescription('');
    setArtistNames(['']);
    setImageFile(null);
  };

  const handleArtistNameChange = (index, value) => {
    const newArtistNames = [...artistNames];
    newArtistNames[index] = value;
    setArtistNames(newArtistNames);
  };

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
    width: 'calc(100% - 45px)',
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

  const errorStyle = {
    color: 'red',
    fontSize: '12px',
    marginTop: '5px'
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
          {errors.projectName && <p style={errorStyle}>{errors.projectName}</p>}
        </div>
        <div>
          <label style={labelStyle}>Project Description:</label>
          <textarea
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            style={{ ...inputStyle, height: '100px', width: '100%' }}
          />
          {errors.projectDescription && <p style={errorStyle}>{errors.projectDescription}</p>}
        </div>
        <div>
          <label style={labelStyle}>Collaborators:</label>
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
          {/* <button type="button" onClick={addArtistNameInput} style={buttonStyle}>+ Add Artist</button> */}
        </div>
        <div>
          <label style={labelStyle}>Project Image:</label>
          <input
            type="file"
            onChange={(e) => setImageFile(e.target.files[0])}
            style={{ margin: '10px 0' }}
          />
          {errors.imageFile && <p style={errorStyle}>{errors.imageFile}</p>}
        </div>
        <button type="submit" style={{ ...buttonStyle, width: '100%', marginTop: '20px' }}>Submit</button>
      </form>
    </div>
  );
}

export default CommunityForm;
