import { useState, useEffect, useRef } from 'react';
import { contactData } from '../data/contact';
import { MapPin } from 'lucide-react';

const LocationMap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { rootMargin: '200px' } // Start loading 200px before it enters viewport
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-full w-full rounded-xl overflow-hidden shadow-sm border border-slate-200 z-0 relative bg-slate-50 min-h-[300px]"
    >
      {/* Placeholder shown until map is in view */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#F8FAFC] text-[#64748B]">
          <div className="p-3 bg-[#EEF2FF] rounded-full">
            <MapPin size={28} className="text-[#4F46E5]" />
          </div>
          <p className="text-sm font-medium">{contactData.location}</p>
          {!isVisible && (
            <p className="text-xs text-[#94a3b8]">Scroll to view map</p>
          )}
          {isVisible && (
            <p className="text-xs text-[#94a3b8] animate-pulse">Loading map…</p>
          )}
        </div>
      )}

      {/* Only inject iframe src once the section is in viewport */}
      {isVisible && (
        <iframe
          src={contactData.mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map — Sivakasi, Tamil Nadu"
          onLoad={() => setIsLoaded(true)}
          className={`absolute inset-0 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  );
};

export default LocationMap;
