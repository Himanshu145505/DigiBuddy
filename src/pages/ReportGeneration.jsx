import React, { useState, useEffect } from "react";
import "../styles/ReportGeneration.css";

const ReportGeneration = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(false);
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const reportTypes = [
      "Time-Based Reports",
      "Platform-Based Reports",
      "Activity-Based Reports",
      "Productivity & Distraction Analysis",
      "AI-Powered Insights Report",
      "Sentiment Analysis Report",
    ];
    setFlashcards(reportTypes);
  }, []);

  const handleGenerateReport = () => {
    setIsGenerating(true);
    setReportGenerated(false);

    setTimeout(() => {
      setIsGenerating(false);
      setReportGenerated(true);
    }, 3000);
  };

  return (
    <div className="report-generationmain">
      {/* Header Section */}
      <div className="header">
        <h1>Generate Your Complete Report</h1>
        <p>
          Get insights and trends about your digital habits with a detailed
          analytical report.
        </p>
      </div>

      {/* Generate Report Button */}
      <div className="generate-section">
        {!isGenerating && !reportGenerated && (
          <button className="generate-button" onClick={handleGenerateReport}>
            Generate Report
          </button>
        )}
        {isGenerating && <div className="loading">Generating Report...</div>}
      </div>

      {/* Placeholder Report Section */}
      {reportGenerated && (
        <div className="report-section">
          <h2>Analytical Report</h2>
          <div className="report-card">
            <h3>Most Active Hours</h3>
            <p>12pm - 2pm</p>
          </div>
          <div className="report-card">
            <h3>Most Used App</h3>
            <p>Instagram</p>
          </div>
          <div className="report-card">
            <h3>Weekly Screen Time</h3>
            <p>32 hours</p>
          </div>
          <div className="report-card">
            <h3>Suggested Improvement</h3>
            <p>Reduce social media usage by 30% and try using focus tools.</p>
          </div>
        </div>
      )}

      {/* Flashcards Section */}
      <div className="report-flashcards">
        {flashcards.map((report, index) => (
          <div key={index} className="flashcard">
            {report}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportGeneration;
