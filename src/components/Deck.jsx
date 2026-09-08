import { useCallback, useEffect, useRef, useState } from "react";
import { slides } from "../data/slides";
import SlideRenderer from "./SlideRenderer";
import Particles from "./Particles";

export default function Deck() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const stageRef = useRef(null);
  const total = slides.length;

  const goto = useCallback(
    (next) => {
      const clamped = Math.max(0, Math.min(total - 1, next));
      setDir(clamped >= index ? 1 : -1);
      setIndex(clamped);
    },
    [index, total]
  );

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goto(index + 1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); goto(index - 1); }
      else if (e.key.toLowerCase() === "f") { toggleFullscreen(); }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, goto]);

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  const progress = ((index + 1) / total) * 100;
  const slide = slides[index];

  return (
    <div className="deck">
      <Particles count={26} />
      <div className="deck-progress">
        <div className="deck-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <header className="deck-topbar">
        <div className="brand">
          <img alt="upGrad School of Technology" className="brand-logo" src="/upgrad-logo.png" />
        </div>
        <div className="deck-slide-label">{slide.label}</div>
        <button className="icon-btn" title="Fullscreen (F)" onClick={toggleFullscreen}>&#10530;</button>
      </header>

      <main className="deck-stage" ref={stageRef}>
        <div className={`slide-anim dir-${dir}`} key={index}>
            {slide.watermark && <div className="slide-watermark">{slide.watermark}</div>}
          <div className="slide">
            <SlideRenderer slide={slide} />
          </div>
        </div>
      </main>

      <nav className="deck-dots" aria-label="Slide navigation">
        {slides.map((s, i) => (
          <button
            key={i}
            className={`dot${i === index ? " active" : ""}`}
            title={s.label}
            onClick={() => goto(i)}
          />
        ))}
      </nav>

      <footer className="deck-footer">
        <button className="nav-arrow" onClick={() => goto(index - 1)} disabled={index === 0}>&larr; Prev</button>
        <span className="deck-count">{String(index + 1).padStart(2, "0")} / {total}</span>
        <button className="nav-arrow" onClick={() => goto(index + 1)} disabled={index === total - 1}>Next &rarr;</button>
      </footer>
    </div>
  );
}
