const clients = [
  {
    category: "Tech Brand",
    duration: "Working for 6 years",
    service: "360° Marketing",
    logo: <ArtistagtyLogo />,
    logoLabel: "TechFlow",
  },
  {
    category: "Beauty Brand",
    duration: "Working for 1 year",
    service: "Web Design",
    logo: <BeautyLogo />,
    logoLabel: "Bloom Beauty",
  },
  {
    category: "Coffee Brand",
    duration: "Working for 8 years",
    service: "360° Marketing",
    logo: <CoffeeLogo />,
    logoLabel: "Coffee Bloom",
  },
  {
    category: "Furniture Brand",
    duration: "Working for 3 years",
    service: "Web Optimization",
    logo: <MinimalLogo />,
    logoLabel: "Minimal Studio",
  },
];

export default function Collaborations() {
  return (
    <section
      id="collaborations"
      className="bg-white py-24 md:py-32"
      aria-labelledby="collab-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section label */}
        <p className="section-label mb-5">Collaborations</p>

        {/* Heading */}
        <h2
          id="collab-heading"
          className="text-[52px] md:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-[#0A0A0A] mb-16"
        >
          Trusted across industries.
        </h2>

        {/* Client cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clients.map((client) => (
            <div
              key={client.logoLabel}
              className="bg-[#F2F2F2] rounded-[24px] p-6 flex flex-col gap-4 card-hover"
            >
              {/* Top info */}
              <div>
                <p className="text-[15px] font-semibold text-[#0A0A0A] leading-tight">
                  {client.category}
                </p>
                <p className="text-[13px] text-[#6B6B6B] mt-0.5">
                  {client.duration}
                </p>
              </div>

              {/* Service tag */}
              <div>
                <span className="tag-pill">{client.service}</span>
              </div>

              {/* Spacer */}
              <div className="flex-1 min-h-[40px]" />

              {/* Logo container */}
              <div className="logo-container h-[88px]" aria-label={client.logoLabel}>
                {client.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SVG Logos — styled to match the Marketra design */
function ArtistagtyLogo() {
  return (
    <svg viewBox="0 0 160 50" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Two overlapping circles — like ARTISTAGTY */}
      <circle cx="55" cy="25" r="20" fill="none" stroke="#0A0A0A" strokeWidth="2.5" />
      <circle cx="75" cy="25" r="20" fill="none" stroke="#0A0A0A" strokeWidth="2.5" />
      <text x="105" y="30" textAnchor="start" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#0A0A0A" letterSpacing="1">
        TECHFLOW
      </text>
    </svg>
  );
}

function BeautyLogo() {
  return (
    <svg viewBox="0 0 160 50" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Floral/bloom icon */}
      <g transform="translate(65, 25)">
        <circle cx="0" cy="-12" r="5" fill="#0A0A0A" />
        <circle cx="0" cy="12" r="5" fill="#0A0A0A" />
        <circle cx="-12" cy="0" r="5" fill="#0A0A0A" />
        <circle cx="12" cy="0" r="5" fill="#0A0A0A" />
        <circle cx="0" cy="0" r="6" fill="#0A0A0A" />
      </g>
      <text x="90" y="30" textAnchor="start" fontFamily="sans-serif" fontSize="10" fontWeight="600" fill="#0A0A0A" letterSpacing="0.5">
        BLOOM BEAUTY
      </text>
    </svg>
  );
}

function CoffeeLogo() {
  return (
    <svg viewBox="0 0 160 50" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Leaf & coffee bean icon */}
      <g transform="translate(45, 10)">
        <ellipse cx="12" cy="20" rx="10" ry="18" fill="none" stroke="#0A0A0A" strokeWidth="2" transform="rotate(-20, 12, 20)" />
        <ellipse cx="25" cy="20" rx="10" ry="18" fill="none" stroke="#0A0A0A" strokeWidth="2" transform="rotate(20, 25, 20)" />
        <circle cx="18" cy="30" r="4" fill="#0A0A0A" />
      </g>
      <text x="87" y="20" textAnchor="start" fontFamily="sans-serif" fontSize="13" fontWeight="700" fill="#0A0A0A">
        coffee
      </text>
      <text x="87" y="36" textAnchor="start" fontFamily="sans-serif" fontSize="13" fontWeight="400" fill="#0A0A0A">
        bloom
      </text>
    </svg>
  );
}

function MinimalLogo() {
  return (
    <svg viewBox="0 0 160 50" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Dotted minimal wordmark */}
      <text x="80" y="22" textAnchor="middle" fontFamily="serif" fontSize="16" fontWeight="700" fill="#0A0A0A" letterSpacing="6">
        MINIMAL
      </text>
      <text x="80" y="38" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fontWeight="400" fill="#0A0A0A" letterSpacing="4">
        STUDIO
      </text>
      {/* Dots above text */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <circle key={i} cx={44 + i * 9} cy={8} r={1.2} fill="#0A0A0A" />
      ))}
    </svg>
  );
}
