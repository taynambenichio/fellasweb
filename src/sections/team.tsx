import { texts } from "@/utils/langs";
import { Members } from "@/utils/team";
import { useEffect, useState } from "react";

export function Team() {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const userLang = navigator.language.split('-')[0];
    setLang(texts[userLang] ? userLang : 'en');
  }, []);

  const content = texts[lang];

  return (
    <div className="bg-neutral-900 w-full">
      <div className="flex flex-col justify-center items-center mt-2 mb-5">
        <h1 className="font-Hilborn text-2xl text-red-600 text-shadow-black">{content.teamtitle}</h1>
        <div className="w-14 h-0.5 bg-red-600"></div>
        <p className="text-white text-lg mt-2">{content.team}</p>
        <p className="text-white">Saiba quem somos</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {/* Team Member */}
          {Members.map((member) => (
            <div
              key={member.id}
              onMouseEnter={() => setIsHovered(member.id)}
              onMouseLeave={() => setIsHovered(null)}
              className="relative flex flex-col items-center justify-center hover:scale-105 transition-transform"
            >
              <div className="relative">
                <img
                  src={member.imageurl}
                  alt={`Team Member ${member.name}`}
                  className="w-80 h-auto rounded-sm"
                />
                <a href={`${member.local === 'Alameda' ? 'https://sites.appbarber.com.br/fellasbarbersho-auei' : 'https://sites.appbarber.com.br/fellasbarberpre-81lr'}`} target="_blank" rel="noreferrer"
                  className={`cursor-pointer absolute bottom-0 left-0 right-0 bg-red-600 bg-opacity-70 text-white text-center p-2 transition-opacity duration-300 rounded-b-md ${isHovered === member.id ? "opacity-100" : "opacity-0"}`}
                >
                  {content.bookwith}<br />
                  {member.name}
                </a>
              </div>
              <h1 className="text-white text-lg mt-2 font-Hilborn">{member.name}</h1>
              <p className="text-white text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
