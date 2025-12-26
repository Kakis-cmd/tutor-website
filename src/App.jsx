
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Hero from './components/Hero/Hero.jsx';  
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div style={{ 
        padding: '60px 20px',
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2>✅ Website Structure Working!</h2>
        <div style={{
          background: '#f8fafc',
          padding: '30px',
          borderRadius: '10px',
          marginTop: '30px',
          textAlign: 'left'
        }}>
          <h3>Current Components:</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>✅ <strong>Navbar</strong> - Horizontal layout with logo left, links right</li>
            <li>✅ <strong>Hero Section</strong> - Banner with call-to-action buttons</li>
            <li>✅ <strong>Responsive Design</strong> - Works on mobile & desktop</li>
            <li>✅ <strong>Professional Styling</strong> - Modern colors and spacing</li>
          </ul>
          
          <h3 style={{ marginTop: '30px' }}>Next Steps:</h3>
          <ol>
            <li>Services Section (What you offer)</li>
            <li>About Section (Your qualifications)</li>
            <li>Contact Form</li>
            <li>Payment System</li>
            <li>Footer</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;