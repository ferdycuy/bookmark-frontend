import { useEffect, useState } from 'react';

function Orbit() {
  const [avatars, setAvatars] = useState([]);

  const avatarImages = [
    '/assets/avatars/avatar5.svg',
    '/assets/avatars/avatar2.svg',
    '/assets/avatars/avatar3.svg',
    '/assets/avatars/avatar4.svg',
    '/assets/avatars/avatar6.svg',
    '/assets/avatars/avatar1.svg',
    '/assets/avatars/avatar7.svg',
    '/assets/avatars/avatar8.svg',
  ];

  useEffect(() => {
    const newAvatars = [];

    const circles = [
      { radius: 170, count: 2 },
      { radius: 120, count: 2 },
      { radius: 70, count: 2 },
      { radius: 200, count: 2 },
    ];

    let avatarIndex = 0;
    circles.forEach(({ radius, count }) => {
      const step = 360 / count;
      for (let i = 0; i < count; i++) {
        const angle = Math.floor(Math.random() * step) + step * i;
        const img = avatarImages[avatarIndex % avatarImages.length];
        newAvatars.push({ src: img, angle, radius });
        avatarIndex++;
      }
    });

    setAvatars(newAvatars);
  }, []);

  return (
    <div className="relative w-[400px] h-[400px] mx-auto">
    <div className="absolute w-full h-full flex items-center justify-center">
    <div className="w-full h-full rounded-full p-[1px] bg-gradient-to-br from-white via-blue-400 to-blue-900">
        <div className="w-full h-full rounded-full bg-white" />
    </div>
    </div>

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[280px] h-[280px]">
    <div className="w-full h-full rounded-full p-[1px] bg-gradient-to-tr from-blue-900 via-cyan-200 to-white">
        <div className="w-full h-full rounded-full bg-white" />
    </div>
    </div>

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[160px] h-[160px]">
    <div className="w-full h-full rounded-full p-[1px] bg-gradient-to-bl from-cyan-600 via-blue-200 to-white">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-50 via-white to-purple-50" />
    </div>
    </div>
      <div className="absolute w-full h-full animate-slow-spin origin-center">
        {avatars.map((p, i) => {
          const rad = (p.angle * Math.PI) / 180;
          const x = Math.cos(rad) * p.radius;
          const y = Math.sin(rad) * p.radius;

          return (
            <img
              key={i}
              src={p.src}
              alt={`avatar-${i}`}
              className="absolute w-12 h-12 rounded-full shadow-lg border-2 border-white bg-white"
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          );
        })}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-600 text-center z-10">
        <div className="text-3xl font-bold">20k+</div>
        <div className="text-sm">People</div>
      </div>
    </div>
  );
}

export default Orbit;
