import { useState } from 'react';

// COMPOSANT PAS UTILISE DANS L'APPLICATION
const validateFirstName = (firstName) => {
  if (!firstName) return "First name is required";
  if (firstName.length < 2) return "First name must be at least 2 characters";
  if (firstName.length > 30) return "First name must be at most 30 characters";
  return "";
};

const validateLastName = (lastName) => {
  if (!lastName) return "Last name is required";
  if (lastName.length < 2) return "Last name must be at least 2 characters";
  if (lastName.length > 30) return "Last name must be at most 30 characters";
  return "";
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Email is required";
  if (!emailRegex.test(email)) return "Invalid email format";
  return "";
};

const validatePassword = (password) => {
  if (!password) return "Password is required";
  if (password.length < 8) return "Password must be at least 8 characters";
  return "";
};

const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) return "Confirm password is required";
  if (password !== confirmPassword) return "Passwords must match";
  return "";
};

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      firstName: validateFirstName(formData.firstName),
      lastName: validateLastName(formData.lastName),
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
      confirmPassword: validateConfirmPassword(formData.password, formData.confirmPassword)
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every(error => !error)) {
      console.log('Form data:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>
      
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>
      
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} />
        {errors.password && <span>{errors.password}</span>}
      </div>
      
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
      </div>
      
      <button type="submit">Sign Up</button>
    </form>
  );
}