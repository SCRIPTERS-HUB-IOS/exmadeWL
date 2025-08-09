import Link from 'next/link';
import Particles from "tsparticles-react";

export default function Home() {
  const handleBrightness = (e) => {
    const value = e.target.value;
    localStorage.setItem('brightness', value);
    document.body.style.filter = `brightness(${value}%)`;
  };

  return (
    <div>
      <Particles
        options={{
          background: { color: "#0d0d0d" },
          particles: {
            color: { value: ["#ff0000", "#aa0000", "#ff4444"] },
            links: { enable: true, color: "#ff0000" },
            move: { enable: true, speed: 1 },
            number: { value: 50 },
            size: { value: 3 },
          }
        }}
      />
      <h1 style={{ textAlign: 'center', marginTop: '50px', color: 'red' }}>exmadeW</h1>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <Link href="/methods">
          <button>Methods</button>
        </Link>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a href="https://discord.gg/skDSzwCScu" target="_blank">
          <button className="discord-btn">Our Discord</button>
        </a>
      </div>
      <input className="brightness-slider" type="range" min="50" max="150" defaultValue="100" onChange={handleBrightness} />
    </div>
  );
}
