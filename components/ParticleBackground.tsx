"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
};

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const particles: Particle[] = [];

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = window.devicePixelRatio || 1;

      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = Math.min(
        110,
        Math.max(60, Math.floor((width * height) / 18)),
      );
      particles.length = 0;

      for (let index = 0; index < count; index += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 2.4 + 0.8,
          alpha: Math.random() * 0.7 + 0.2,
        });
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];

        particle.x += particle.vx + (pointerX - width / 2) * 0.00025;
        particle.y += particle.vy + (pointerY - height / 2) * 0.0002;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        particle.x = Math.min(Math.max(particle.x, 0), width);
        particle.y = Math.min(Math.max(particle.y, 0), height);

        context.beginPath();
        context.fillStyle = `rgba(168, 85, 247, ${particle.alpha})`;
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();

        for (let next = index + 1; next < particles.length; next += 1) {
          const sibling = particles[next];
          const dx = particle.x - sibling.x;
          const dy = particle.y - sibling.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            context.beginPath();
            context.strokeStyle = `rgba(148, 163, 184, ${0.14 - distance / 1000})`;
            context.lineWidth = 1;
            context.moveTo(particle.x, particle.y);
            context.lineTo(sibling.x, sibling.y);
            context.stroke();
          }
        }
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
    };

    resizeCanvas();
    draw();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="particle-layer" aria-hidden="true" />
  );
}
