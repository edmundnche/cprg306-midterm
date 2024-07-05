"use client";
import React, { useState } from "react";

const APICallExam = () => {
  const [secretCode, setSecretCode] = useState(null);

  const handleAPICall = async () => {
    const url = "https://webdev2-class-demo.vercel.app/api/sampleReqs/ehen2rfow";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setSecretCode(data.secretCode);
    } catch (error) {
      console.error("Error fetching the secret code:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          onClick={handleAPICall}
          className="bg-red-100 p-2 rounded-md border border-red-500"
        >
          Submit
        </button>
      </div>
      {secretCode && (
        <div className="mt-4 text-center">
          <p>Secret Code: {secretCode}</p>
        </div>
      )}
    </div>
  );
};

export default APICallExam;
