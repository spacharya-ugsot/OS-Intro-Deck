export default function Particles({ count = 24 }) {
  const items = Array.from({ length: count }, (_, i) => {
    const left = Math.random() * 100;
    const size = 2 + Math.random() * 3;
    const duration = 14 + Math.random() * 16;
    const delay = Math.random() * -30;
    const drift = (Math.random() - 0.5) * 80;
    return (
      <span
        key={i}
        className="particle"
        style={{
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          "--drift": `${drift}px`,
        }}
      />
    );
  });
  return <div className="particles">{items}</div>;
}