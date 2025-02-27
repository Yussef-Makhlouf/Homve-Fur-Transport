'use client';

import React from 'react';

interface TrackingPhoneButtonProps {
  phoneNumber: string;
  children?: React.ReactNode;
  className?: string;
}

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

const TrackingPhoneButton = ({ phoneNumber, children, className }: TrackingPhoneButtonProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Call Google Ads conversion tracking
    if (window.gtag_report_conversion) {
      window.gtag_report_conversion(`tel:${phoneNumber}`);
    }
    
    // Initiate phone call
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button 
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
};

export default TrackingPhoneButton;