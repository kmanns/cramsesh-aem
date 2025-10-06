import React from 'react';

const StudyGuide = () => {
  return (
    <div className="space-y-8 text-center">
      <img src="/seshlogo.png" alt="Cram Sesh Logo" className="mx-auto" />
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome to CramSesh!</h2>
        <p className="text-slate-600">Your study guide for the AEM Business Practitioner certification</p>
      </div>
    </div>
  );
};

export default StudyGuide;