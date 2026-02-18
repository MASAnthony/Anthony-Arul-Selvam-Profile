import { portfolioData } from '../data/portfolio';

const LocationMap = () => {
  return (
    <div className="h-full w-full rounded-xl overflow-hidden shadow-sm border border-slate-200 z-0 relative bg-slate-50">
      <iframe 
        src={portfolioData.contact.mapUrl} 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
        className="transition-all duration-500 opacity-90 hover:opacity-100"
      ></iframe>
    </div>
  );
};

export default LocationMap;
