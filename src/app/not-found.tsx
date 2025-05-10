'use client';

import Link from 'next/link';

import { type PointerEvent } from 'react';

const NotFound = () => {
  const fromCenter = ({ x, y }: { x: number; y: number }) =>
    Math.min(
      Math.max(
        0,
        Math.sqrt((y - 0.5) * (y - 0.5) + (x - 0.5) * (x - 0.5)) / 0.5,
      ),
      1,
    );

  const hover3D = (event: PointerEvent<HTMLElement>) => {
    const x = event.clientX;
    const y = event.clientY;

    const box = event.currentTarget.getBoundingClientRect();

    const point = { x: x - box!.x, y: y - box!.y };
    const ratio = { x: point.x / box!.width, y: point.y / box!.height };

    const center = fromCenter(ratio);

    event.currentTarget.style.setProperty('--ratio-x', String(ratio.x));
    event.currentTarget.style.setProperty('--ratio-y', String(ratio.y));

    event.currentTarget.style.setProperty('--from-center', String(center));
  };

  return (
    <main
      className="not-found min-h-dvh"
      onPointerMove={event => hover3D(event)}
    >
      <header>
        <svg viewBox="-50 0 100 20">
          <text x="0" y="15">
            404
          </text>
        </svg>

        <Link href="/" className="p-3 font-bold">
          Voltar para Home
        </Link>
      </header>
    </main>
  );
};

export default NotFound;
