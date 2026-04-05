const clients = [
  {
    category: "Man Lifestyle Brand",
    duration: "Working for 6 years",
    service: "360° marketing",
    logo: <ArtistagtyLogo />,
    logoLabel: "Artistagty",
  },
  {
    category: "Beauty Brand",
    duration: "Working for 1 years",
    service: "Web Design",
    logo: <BeautyLogo />,
    logoLabel: "Bloom Beauty",
  },
  {
    category: "Coffee Brand",
    duration: "Working for 8 years",
    service: "360° marketing",
    logo: <CoffeeLogo />,
    logoLabel: "Coffee Bloom",
  },
  {
    category: "Furniture Brand",
    duration: "Working for 3 years",
    service: "Web Optimization",
    logo: <MinimalLogo />,
    logoLabel: "Minimal Restaurant",
  },
];

export default function Collaborations() {
  return (
    <section
      id="collaborations"
      className="bg-white py-24 md:py-32 font-sans"
      aria-labelledby="collab-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Centered Header Section */}
        <div className="flex flex-col items-center mb-16 md:mb-20">
          <p className="flex items-center text-[15px] font-medium text-black mb-4">
            <span className="text-[#1400FF] text-xl leading-none mr-2">•</span>
            Collaborations
          </p>
          <h2
            id="collab-heading"
            className="text-[44px] md:text-[56px] lg:text-[64px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0A0A0A] text-center"
          >
            Trusted across industries.
          </h2>
        </div>

        {/* Client cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {clients.map((client) => (
            <div
              key={client.logoLabel}
              className="bg-[#F3F3F3] rounded-[16px] p-6 flex flex-col"
            >
              {/* Top info */}
              <div className="mb-4">
                <p className="text-[16px] font-medium text-[#0A0A0A] leading-tight mb-1">
                  {client.category}
                </p>
                <p className="text-[14px] text-[#555555]">
                  {client.duration}
                </p>
              </div>

              {/* Service tag (White Pill) */}
              <div>
                <span className="bg-white px-4 py-1.5 rounded-full text-[13px] text-[#0A0A0A]">
                  {client.service}
                </span>
              </div>

              {/* Spacer to push logo to bottom */}
              <div className="flex-1 min-h-[60px]" />

              {/* Logo container (White Pill) */}
              <div 
                className="bg-white rounded-[30px] w-full h-[72px] flex items-center justify-center px-6 mt-auto" 
                aria-label={client.logoLabel}
              >
                {client.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SVG Logos — styled to closely match the uploaded design */
function ArtistagtyLogo() {
  return (
    <svg viewBox="0 0 160 50" className="w-[120px] h-auto" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(80, 20)">
        {/* Line through circles */}
        <line x1="-30" y1="0" x2="30" y2="0" stroke="#0A0A0A" strokeWidth="1" />
        {/* Two intersecting shapes */}
        <circle cx="-6" cy="0" r="12" fill="none" stroke="#0A0A0A" strokeWidth="1.5" />
        <path d="M 6 12 A 12 12 0 0 0 6 -12 Z" fill="#0A0A0A" />
      </g>
      <text x="80" y="42" textAnchor="middle" fontFamily="serif" fontSize="10" fontWeight="400" fill="#0A0A0A" letterSpacing="1">
        ARTISTAGTY
      </text>
    </svg>
  );
}

function BeautyLogo() {
  return (
    <svg viewBox="0 0 160 50" className="w-[60px] h-auto" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(80, 25)" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-10,-10 Q0,-2 10,-10 Q2,0 10,10 Q0,2 -10,10 Q-2,0 -10,-10 Z" />
        <circle cx="0" cy="-14" r="1.5" fill="#0A0A0A" stroke="none"/>
        <circle cx="0" cy="14" r="1.5" fill="#0A0A0A" stroke="none"/>
        <circle cx="-14" cy="0" r="1.5" fill="#0A0A0A" stroke="none"/>
        <circle cx="14" cy="0" r="1.5" fill="#0A0A0A" stroke="none"/>
        <circle cx="0" cy="0" r="1.5" fill="#0A0A0A" stroke="none"/>
      </g>
    </svg>
  );
}

function CoffeeLogo() {
  return (
    <svg viewBox="0 0 160 50" className="w-[120px] h-auto" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(45, 12)">
        {/* Leaves */}
        <path d="M0,20 Q-15,15 -10,0 Q5,5 0,20 Z" fill="none" stroke="#0A0A0A" strokeWidth="2" />
        <path d="M0,20 Q15,15 15,5 Q5,-5 0,20 Z" fill="none" stroke="#0A0A0A" strokeWidth="2" />
        <line x1="0" y1="20" x2="0" y2="28" stroke="#0A0A0A" strokeWidth="2" />
        <circle cx="18" cy="-2" r="2.5" fill="#0A0A0A" />
      </g>
      <text x="75" y="24" textAnchor="start" fontFamily="sans-serif" fontSize="16" fontWeight="700" fill="#0A0A0A">
        coffee
      </text>
      <text x="75" y="40" textAnchor="start" fontFamily="sans-serif" fontSize="16" fontWeight="700" fill="#0A0A0A">
        bloom
      </text>
    </svg>
  );
}

function MinimalLogo() {
  return (
    <svg viewBox="0 0 160 50" className="w-[100px] h-auto" xmlns="http://www.w3.org/2000/svg">
      <text x="80" y="28" textAnchor="middle" fontFamily="sans-serif" fontStyle="italic" fontSize="18" fontWeight="800" fill="#0A0A0A" letterSpacing="2">
        MINIMAL
      </text>
      <text x="80" y="42" textAnchor="middle" fontFamily="sans-serif" fontSize="6" fontWeight="600" fill="#0A0A0A" letterSpacing="4">
        RESTAURANT
      </text>
      {/* Stars/Dots above text */}
      <g transform="translate(80, 12)">
        {[-16, -8, 0, 8, 16].map((x, i) => (
          <path key={i} d={`M${x},0 L${x+2},2 L${x+1},5 L${x-1},5 L${x-2},2 Z`} fill="#0A0A0A" />
        ))}
      </g>
      {/* Underline */}
      <path d="M20,32 Q80,30 140,32" fill="none" stroke="#0A0A0A" strokeWidth="1" />
    </svg>
  );
}