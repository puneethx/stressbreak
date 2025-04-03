import React, { useRef, useEffect, useState } from 'react';
import "./Signin.scss"
import Vido from "../../assets/inandout_48fps.mp4"
import Hide from "../../assets/hide.png"
import Show from "../../assets/show.png"
import { signIn } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const videoRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    
    const result = signIn(email, password);
    
    if (result.success) {
      // Redirect to how page
      navigate('/how');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="signin">
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
                <button type="submit" className="signin-button">Sign in</button>
                <p className='signup'>Don't have an account? <a href="/signup">Sign up</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin