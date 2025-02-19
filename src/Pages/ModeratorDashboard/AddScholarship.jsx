import { useContext, useState } from "react";
import { contextData } from "../../Contex";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMGE_JOSTING_KEY;
const image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddScholarship = () => {
  const navigate = useNavigate()

  const { userData } = useContext(contextData)



  const [university_location, setUniversity_location] = useState('');
  const [degree, setDegree] = useState('');
  const [university_name, setUniversity_name] = useState('');
  const [scholarship_category, setScholarship_category] = useState('');
  const [subject_name, setSubject_name] = useState('');
  const [scholarship_name, setScholarship_name] = useState('');
  const [photo, setPhoto] = useState('');
  const [world_rank, setWorld_rank] = useState('');
  const [stipend, setStipend] = useState('');
  const [application_fees, setApplication_fees] = useState('');
  const [service_charge, setService_charge] = useState('');
  const [application_deadline, setApplication_deadline] = useState('');
  const [submit, setSubmit] = useState('Add Application');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    const formattedDate = date.toISOString(); // Converts to '2025-01-23T19:35:26.057Z' format
    setApplication_deadline(formattedDate);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmit('Processing.....')

    // Handle the image upload first
    const imageFormData = new FormData();
    imageFormData.append('image', photo);

    try {
      const imageRes = await axios.post(image_hosting_API, imageFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const imageUrl = imageRes.data.data.url;




      const formData = {

        university_logo: imageUrl,
        university_location,
        degree,
        university_name,
        scholarship_category,
        subject_name,
        scholarship_name,
        world_rank,
        stipend,
        application_fees,
        service_charge,
        application_deadline,

        name: userData.displayName,
        email: userData.email,
        dateApplied: new Date(),
      };





      // Submit the complete form data to your API
      const response = await axios.post('https://assignment-12-server-ruddy-eight.vercel.app/add-scholarship', formData);

      if (response.status === 200) {
        Swal.fire('Application Submitted!', 'Your scholarship application has been submitted successfully.', 'success');
        navigate('/allscholarship')
      } else {
        Swal.fire('Error!', 'There was an error submitting your application. Please try again later.', 'error');
      }




    } catch (error) {
      console.error('Error uploading image or submitting application:', error);
      Swal.fire('Error!', 'There was an error with your application. Please try again later.', 'error');
    }
  };



  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Add Scholarship</h2>

      {/* Applicant phone number */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Scholarship Name</label>
        <input
          type="text"
          placeholder="Enter your phone number"
          value={scholarship_name}
          onChange={(e) => setScholarship_name(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5202] focus:border-transparent"
        />
      </div>



      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">University Name</label>
        <input
          type="text"
          placeholder="Enter your phone number"
          value={university_name}
          onChange={(e) => setUniversity_name(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5202] focus:border-transparent"
        />
      </div>



      {/* Applicant photo */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Upload Photo</label>
        <input
          type="file"
          onChange={(e) => setPhoto(e.target.files[0])}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg file:bg-[#ff5202] file:text-white file:border-none file:px-4 file:py-2 focus:outline-none focus:ring-2 focus:ring-[#ff5202] focus:border-transparent"
        />
      </div>


      {/* Applicant address */}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">University Country</label>
        <input
          type="text"
          placeholder="University Country"
          value={university_location.country}
          onChange={(e) => setUniversity_location({ ...university_location, country: e.target.value })}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5202] focus:border-transparent"
        />
      </div>



      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">University City</label>
        <input
          type="text"
          placeholder="City"
          value={university_location.city}
          onChange={(e) => setUniversity_location({ ...university_location, city: e.target.value })}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5202] focus:border-transparent"
        />
      </div>



      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">University World rank</label>
        <input
          type="number"
          placeholder="World rank"
          value={world_rank}
          onChange={(e) => setWorld_rank(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5202] focus:border-transparent"
        />
      </div>


      {/* Applying Degree dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Subject category</label>
        <select
          value={subject_name}
          onChange={(e) => setSubject_name(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5202] focus:border-transparent"
        >
          <option value="">Select Degree</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Engineering">Engineering</option>
          <option value="Doctor">Doctor</option>
        </select>
      </div>




      {/* Applying Degree dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Scholarship category</label>
        <select
          value={scholarship_category}
          onChange={(e) => setScholarship_category(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5202] focus:border-transparent"
        >
          <option value="">Select Degree</option>
          <option value="Full fund">Full fund</option>
          <option value="Partial">Partial</option>
          <option value="Self-fund">Self-fund</option>
        </select>
      </div>



      {/* Applying Degree dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Degree </label>
        <select
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5202] focus:border-transparent"
        >
          <option value="">Select Degree</option>
          <option value="Diploma">Diploma</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Masters">Masters</option>
        </select>
      </div>



      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Tuition Fees</label>
        <input
          type="number"
          placeholder="Tuition Fees"
          value={stipend}
          onChange={(e) => setStipend(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5202] focus:border-transparent"
        />
      </div>



      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Application Fees</label>
        <input
          type="number"
          placeholder="Tuition Fees"
          value={application_fees}
          onChange={(e) => setApplication_fees(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5202] focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Service Charge</label>
        <input
          type="number"
          placeholder="Tuition Fees"
          value={service_charge}
          onChange={(e) => setService_charge(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5202] focus:border-transparent"
        />
      </div>








      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Application Deadline</label>
        <input
          type="date"
          onChange={handleDateChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5202] focus:border-transparent"
        />
        {/* Show the formatted date */}
        <p>Formatted Deadline: {new Date(application_deadline).toLocaleDateString('en-US')}</p>

      </div>




      <button
        type="submit"
        className="w-full px-4 py-2 bg-[#ff5202] text-white font-semibold rounded-lg shadow-md hover:bg-[#ff5202] transition duration-300"
        disabled={isSubmitting} // Disable the button if submitting
      >
        {submit}
      </button>



    </form>






  );
};

export default AddScholarship;
