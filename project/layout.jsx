import React from "react";
import "./globals.css"; // make sure this file exists in src/

export default function RootLayout({ children }) {
  return (
    <div className="root-layout">
      {children}
    </div>
  );
}
