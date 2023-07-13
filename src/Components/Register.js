import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles.css';
const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    // Fetch countries from API
    axios.get('https://api.example.com/countries')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);

    // Fetch states/provinces for the selected country from API
    axios.get(`https://api.example.com/states?country=${selectedCountry}`)
      .then(response => {
        setStates(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    // Perform registration logic here
    const registrationData = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      addressLine1,
      addressLine2,
      city,
      postalCode,
      country,
      // Add other form fields as needed
    };

    // Send registration data to API
    axios.post('https://api.example.com/register', registrationData)
      .then(response => {
        console.log('Registration successful:', response.data);
        // Perform any success actions (e.g., redirect to a success page)
      })
      .catch(error => {
        console.log('Registration failed:', error);
        // Perform any error actions (e.g., display error message)
      });
  };

  return (
    <div className="container">
      <div className="text-center">
        <h2>Register</h2>
      </div>

      <form onSubmit={handleRegistration} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Re-type Password:</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            className="form-control"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Address Line 1:</label>
          <input
            type="text"
            className="form-control"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Address Line 2:</label>
          <input
            type="text"
            className="form-control"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            className="form-control"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Postal Code:</label>
          <input
            type="text"
            className="form-control"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Country:</label>
          <select
            className="form-control"
            value={country}
            onChange={handleCountryChange}
            required
          >
            <option value="">Select Country</option>
            {countries.map(country => (
              <option key={country.id} value={country.id}>{country.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>State/Province:</label>
          <select
            className="form-control"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="">Select State/Province</option>
            {states.map(state => (
              <option key={state.id} value={state.id}>{state.name}</option>
            ))}
          </select>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
