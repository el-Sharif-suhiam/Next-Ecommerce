import React from "react";
export const metadata = {
  httpEquiv: "Content-Security-Policy",
  content:
    "default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://www.google.com",
};

function layout({ children }) {
  return (
    <div className="bg-slate-100 h-[80vh] py-20 p-5 relative">{children}</div>
  );
}

export default layout;
