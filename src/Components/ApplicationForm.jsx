import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const ApplicationForm = ({ scholarship, user }) => {
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState(null);
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [applyingDegree, setApplyingDegree] = useState('');
  const [sscResult, setSscResult] = useState('');
  const [hscResult, setHscResult] = useState('');
  const [studyGap, setStudyGap] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('phone', phone);
    formData.append('photo', photo);
    formData.append('address', address);
    formData.append('gender', gender);
    formData.append('applyingDegree', applyingDegree);
    formData.append('sscResult', sscResult);
    formData.append('hscResult', hscResult);
    formData.append('studyGap', studyGap);
    formData.append('universityName', scholarship.universityName);
    formData.append('scholarshipCategory', scholarship.scholarshipCategory);
    formData.append('subjectCategory', scholarship.subjectCategory);
    formData.append('userName', user.name);
    formData.append('userEmail', user.email);
    formData.append('userId', user.id);
    formData.append('scholarshipId', scholarship.id);
    formData.append('appliedDate', new Date());

    try {
      const res = await axios.post('/your-server-api/apply-scholarship', formData);
      if (res.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Applied Successfully!',
          text: 'Your scholarship application has been submitted.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Application Error',
        text: 'There was an error submitting your application.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <input type="file" onChange={(e) => setPhoto(e.target.files[0])} required />
      <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
      <select value={gender} onChange={(e) => setGender(e.target.value)} required>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <select value={applyingDegree} onChange={(e) => setApplyingDegree(e.target.value)} required>
        <option value="">Select Degree</option>
        <option value="Diploma">Diploma</option>
        <option value="Bachelor">Bachelor</option>
        <option value="Masters">Masters</option>
      </select>
      <input type="text" placeholder="SSC Result" value={sscResult} onChange={(e) => setSscResult(e.target.value)} required />
      <input type="text" placeholder="HSC Result" value={hscResult} onChange={(e) => setHscResult(e.target.value)} required />
      <select value={studyGap} onChange={(e) => setStudyGap(e.target.value)}>
        <option value="">Select Study Gap</option>
        <option value="none">No Gap</option>
        <option value="1 year">1 Year</option>
        <option value="2 years">2 Years</option>
      </select>
      <input type="text" value={scholarship.universityName} readOnly />
      <input type="text" value={scholarship.scholarshipCategory} readOnly />
      <input type="text" value={scholarship.subjectCategory} readOnly />
      <button type="submit">Submit/Apply</button>
    </form>
  );
};

export default ApplicationForm;
