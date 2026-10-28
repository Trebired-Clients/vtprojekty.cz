import { useId } from "react";

type Shard = { box: [number, number, number, number]; focus: string; id: string; points: string; src: string };

const VIEW = "0 0 45.2934 21.6323";

const SHARDS: Shard[] = [
  {
    box: [0, 0.2222, 19.774, 21.4075],
    focus: "xMidYMid",
    id: "v",
    points: "0,0.2222 13.2726,21.6297 19.774,11.7156 12.6478,0.2222",
    src: "/photos/restaurace-stul.jpg",
  },
  {
    box: [17.956, 0, 9.5167, 7.2435],
    focus: "xMidYMid",
    id: "notch",
    points: "17.956,0 22.7061,7.2435 27.4727,0",
    src: "/photos/restaurace-interier.jpg",
  },
  {
    box: [23.7686, 0, 21.5248, 7.2497],
    focus: "xMidYMid",
    id: "bar",
    points: "28.5228,0 23.7686,7.2497 40.5226,7.2497 45.2934,0",
    src: "/photos/koupaliste-panorama.jpg",
  },
  {
    box: [27.9998, 8.1499, 7.2502, 13.4824],
    focus: "xMidYMid",
    id: "stem",
    points: "27.9998,8.1499 27.9998,21.6323 35.25,21.6323 35.25,8.1499",
    src: "/photos/restaurace-bar.jpg",
  },
];

export function PhotoMark({ label }: { label: string }) {
  const base = useId().replace(/:/gu, "");

  return (
    <svg aria-label={label} className="tbfm-hero__mark" role="img" viewBox={VIEW}>
    <defs>
    {SHARDS.map((shard) => (
          <clipPath id={`${base}${shard.id}`} key={shard.id}>
          <polygon points={shard.points} />
          </clipPath>
    ))}
    </defs>
    {SHARDS.map((shard) => {
          const [x, y, width, height] = shard.box;
          return (
            <g className="tbfm-hero__shard" clipPath={`url(#${base}${shard.id})`} key={shard.id}>
            <polygon className="tbfm-hero__ground" points={shard.points} />
            <image height={height} href={shard.src} preserveAspectRatio={`${shard.focus} slice`} width={width} x={x} y={y} />
            </g>
          );
    })}
    </svg>
  );
}
