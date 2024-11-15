import { useState } from 'react';
import { Card } from "../components/ui/card";
import { User, Mail, Phone,} from 'lucide-react';

const PhdForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    consent: false,
    disclaimer: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-5xl p-8 bg-white shadow-xl rounded-xl flex">
        {/* Left Section */}
        <div className="w-1/2 flex flex-col items-center justify-center bg-gray-50 p-6 rounded-l-xl">
          <img
            src="https://phdsuccess.ae/wp-content/uploads/2024/05/logo.png" // Replace with your logo path
            alt="Website Logo"
            className="w-10 h-10 mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">PhD Success</h2>
          <p className="text-gray-600 text-center">
            Fill out the form to get downloadable contents
          </p>
        </div>

        {/* Right Section (Form) */}
        <div className="w-1/2 p-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Golden Rules Form</h2>
            <p className="text-gray-600">Sub Heading regarding the pdf</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-2.5 text-gray-400">
                    <User size={20} />
                  </div>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full pl-10 pr-4 py-2 border-2 rounded-lg border-gray-200"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-2.5 text-gray-400">
                    <User size={20} />
                  </div>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full pl-10 pr-4 py-2 border-2 rounded-lg border-gray-200"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <Mail size={20} />
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full pl-10 pr-4 py-2 border-2 rounded-lg border-gray-200"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <Phone size={20} />
                </div>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0501234567"
                  className="w-full pl-10 pr-4 py-2 border-2 rounded-lg border-gray-200"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-red-600 mt-1"
                />
                <label htmlFor="consent" className="text-sm text-gray-700">
                 Consent checkbox
                </label>
              </div>

             
            </div>

            <button
              type="submit"
              disabled={!formData.consent }
              className="w-full bg-red-500 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 
                disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-600 transition-colors"
            >
              <span>Submit Form</span>
            </button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default PhdForm;
