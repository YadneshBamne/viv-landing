import CircularGallery from "../bits/CircularGallery";
import BlurText from '../bits/BlurText';

const About = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className="bg-dark text-white">
      {/* Hero Section with BlurText */}
      <div
        className="d-flex align-items-center justify-content-center text-center"
        style={{ height: '20vh', width: '100%', padding: '0 1rem',  background: '#1a1a1a' }}
      >
        <div style={{ width: '100%' }}>
          <BlurText
            text="AI for people of India!"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="fs-1 fw-bold w-100"
          />
        </div>
      </div>

      {/* Circular Gallery Section */}
      <div
        style={{
          height: '600px',
          position: 'relative',
          background: '#1a1a1a',
        }}
        className="text-white"
      >
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
    </div>
  );
};

export default About;
