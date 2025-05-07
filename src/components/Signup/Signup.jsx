import React, { useRef, useEffect, useState } from 'react';
import "./Signup.scss"
import Vido from "../../assets/inandout_48fps.mp4"
import Hide from "../../assets/hide.png"
import Show from "../../assets/show.png"
import { signUp } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const videoRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const roles = [
    { value: '', label: 'Select a role', disabled: true },
    { value: '1', label: 'Student' },
    { value: '2', label: 'Employee' },
    { value: '3', label: 'Entrepreneur' },
    { value: '4', label: 'Parent' }
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
      });
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Check if role is selected
    if (!role) {
      setError('Please select a role.');
      return;
    }

    // Register user
    const result = await signUp(name, email, password, role);

    if (result.success) {
      setSuccess(true);
      // Redirect to how page after a short delay
      setTimeout(() => {
        navigate('/how');
      }, 2000);
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="signup">
      <div className="video-container">
        <video
          className='video-main'
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          src={Vido}
        />
        <div className="content">
          <div className="conflex1">
            <span className='flex1title'>stressbreak</span>
          </div>
          <div className="conflex2">
            <div className="flex2">
              <p className='flex2title'>Access to <br />your <span>mind</span></p>
              <form className="form" onSubmit={handleSubmit}>
                {error && <p className="error-message">{error}</p>}
                <input 
                  type="text" 
                  placeholder='Name' 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
                <input 
                  type="email" 
                  placeholder='Email' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <div className="password-container">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder='Password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                  <button 
                    type="button" 
                    className="toggle-password"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <><img src={Hide} alt="" /></> : <><img src={Show} alt="" /></>}
                  </button>
                </div>
                <div className="password-container">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder='Confirm Password' 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required 
                  />
                  <button 
                    type="button" 
                    className="toggle-password"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <><img src={Hide} alt="" /></> : <><img src={Show} alt="" /></>}
                  </button>
                </div>
                <select 
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="role-select"
                  required
                >
                  {roles.map((role) => (
                    <option 
                      key={role.value} 
                      value={role.value}
                      disabled={role.disabled}
                    >
                      {role.label}
                    </option>
                  ))}
                </select>
                <button type="submit" className="signup-button">Sign up</button>
                <p className='signin'>Already have an account? <a href="/signin">Sign in</a></p>
                {success && (
                  <p className="welcome-message">Hey {name}, Welcome to Stressbreak!</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup