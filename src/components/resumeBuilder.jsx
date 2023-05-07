import React, { useState } from 'react';
import jsPDF from 'jspdf';

import '../components/resume.css';

const ResumeBuilder = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [address, setAddress] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [selectedFont, setSelectedFont] = useState('helvetica');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleJobTitleChange = (e) => {
    setJobTitle(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };

  const handleEducationChange = (e) => {
    setEducation(e.target.value);
  };

  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  };

  const handleSave = () => {
    // Create a new PDF document
    const doc = new jsPDF();

    // Set the font based on the selected font option
    doc.setFont(selectedFont);

    // Add content to the PDF
    doc.setFontSize(18);
    doc.text(`${name}`, 20, 20);

    doc.setFontSize(12);
    doc.text(`${email}`, 20, 30);
    doc.text(`${phone}`, 20, 35);
    doc.text(`${jobTitle}`, 20, 40);
    doc.text(`${address}`, 20, 45);

    doc.setFontSize(16);
    doc.text('Experience', 20, 60);
    doc.setFontSize(12);
    doc.text(`${experience}`, 20, 70);

    doc.setFontSize(16);
    doc.text('Education', 20, 90);
    doc.setFontSize(12);
    doc.text(`${education}`, 20, 100);

    // Save the PDF file
    doc.save('resume.pdf');
  };

  return (
    <div>
        <h1 className='top'>All In One Resume Builder</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} />

        <label htmlFor="jobTitle">Job Title:</label>
        <input type="text" id="jobTitle" value={jobTitle} onChange={handleJobTitleChange} />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" value={address} onChange={handleAddressChange} />

        <label htmlFor="experience">Experience:</label>
        <textarea id="experience" value={experience} onChange={handleExperienceChange}></textarea>

        <label htmlFor="education">Education:</label>
        <textarea id value={education} onChange={handleEducationChange}></textarea>

        <label htmlFor="font">Font:</label>
        <select id="font" value={selectedFont} onChange={handleFontChange}>
          <option value="helvetica">Helvetica</option>
          <option value="times">Times</option>
          <option value="courier">Courier</option>
        </select>
      </form>

      <button onClick={handleSave}>Save PDF</button>
    </div>
  );
};

export default ResumeBuilder;

