"use client";

import { useState } from "react";

interface PriceChartProps {
  ticker: string;
  points: [string, number][];
  entry: number;
}

const W = 280;
const H = 80;
const PAD = 4;

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${m}/${d}/${y.slice(2)}`;
}

export function PriceChart({ ticker, points, entry }: PriceChartProps) {
  const [hover, setHover] = useState<number | null>(null);

  const values = points.map(([, c]) => c).concat(entry);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const x = (i: number) => (points.length === 1 ? W / 2 : (i / (points.length - 1)) * W);
  const y = (v: number) => PAD + (1 - (v - min) / range) * (H - PAD * 2);

  const path = points.map(([, c], i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(c).toFixed(1)}`).join("");
  const active = hover ?? points.length - 1;
  const [activeDate, activeClose] = points[active];

  function onMove(e: React.PointerEvent<SVGSVGElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    setHover(Math.round(ratio * (points.length - 1)));
  }

  return (
    <div className="w-full">
      <div className="flex items-baseline justify-between text-xs text-stone-500 mb-1 tabular-nums">
        <span>{formatDate(activeDate)}</span>
        <span className="text-stone-900 font-medium">${activeClose.toFixed(2)}</span>
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        className="w-full h-20 overflow-visible touch-none"
        role="img"
        aria-label={`${ticker} daily closing price since pitch, from $${points[0][1].toFixed(2)} to $${points[points.length - 1][1].toFixed(2)}`}
        onPointerMove={onMove}
        onPointerLeave={() => setHover(null)}
      >
        <line x1={0} x2={W} y1={y(entry)} y2={y(entry)} stroke="#d6d3d1" strokeWidth={1} strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
        <path d={path} fill="none" stroke="#1c1917" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        {hover !== null && (
          <line x1={x(active)} x2={x(active)} y1={0} y2={H} stroke="#a8a29e" strokeWidth={1} vectorEffect="non-scaling-stroke" />
        )}
      </svg>
      <div className="flex justify-between text-xs text-stone-400 mt-1">
        <span>Pitched {formatDate(points[0][0])}</span>
        <span className="flex items-center gap-1">
          <svg width="14" height="2" aria-hidden="true"><line x1="0" x2="14" y1="1" y2="1" stroke="#a8a29e" strokeDasharray="3 2" /></svg>
          Entry ${entry.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
