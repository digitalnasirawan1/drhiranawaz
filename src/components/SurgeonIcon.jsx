export default function SurgeonIcon({ className = "w-6 h-6", color = "currentColor" }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke={color}
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Surgical Scalpel Blade with subtle highlight */}
      <path 
        d="M14 4.5l5.5 5.5c1-1 2.5-3.5 2.5-6.5-3 0-5.5 1.5-6.5 2.5l-1.5 1.5z" 
        fill={color} 
        fillOpacity="0.25" 
      />
      <path d="M14 4.5l5.5 5.5c1-1 2.5-3.5 2.5-6.5-3 0-5.5 1.5-6.5 2.5l-1.5 1.5z" />
      
      {/* Scalpel Ergonomic Handle */}
      <path d="M14 4.5L5.5 13l-2.5 7.5 7.5-2.5 8.5-8.5" />
      
      {/* Surgical Instrument Grip Markings */}
      <path d="M7.5 14l2 2" strokeWidth="1.8" />
      <path d="M9.5 12l2 2" strokeWidth="1.8" />
      
      {/* Surgical / Medical Cross Accent */}
      <path d="M3.5 4.5h4" strokeWidth="2" />
      <path d="M5.5 2.5v4" strokeWidth="2" />
    </svg>
  );
}
