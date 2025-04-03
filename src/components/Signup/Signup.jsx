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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Register user
    const result = signUp(email, password);

    if (result.success) {
      // Redirect to how page
      navigate('/how');
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
                <button type="submit" className="signup-button">Sign up</button>
                <p className='signin'>Already have an account? <a href="/signin">Sign in</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup