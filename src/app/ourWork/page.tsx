'use client'

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function OurWork() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <div className="container p-4 max-w-md mx-auto">
                <h2 className="text-center font-bold mb-4 ">Our Work</h2>

                {/* First Accordion */}
                <div className="border rounded-md mb-2">
                    <div className="w-full p-3 font-semibold bg-gray-200 d-flex justify-content-between   items-center"
                        onClick={() => toggleAccordion(0)}
                    >
                        <h5 className="ml-2 mb-0">AI-Powered Job Recommendation System</h5>
                        <p className="mr-2 mb-0  align-items-center">{openIndex === 0 ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}</p>
                    </div>
                    <div className={`accordion-content ${openIndex === 0 ? "open" : "closed"}`}>
                        <div className=" row bg-white border-top align-items-center scrollable-content">
                            <div className="col-md-6 col-12  p-3 ">
                                <h4> Overview:</h4>
                                <p> AI-driven job search platform that scrapes job postings from multiple websites and ranks them based on candidate profiles.
                                    It assigns a match score to each job based on skills, experience, and job description relevance.</p>

                            </div>
                            <div className="col-md-6 col-12 mt-4">
                                <h4>Key Features:</h4>
                                <ul className="text">
                                    <li><strong>Web Scraping</strong> – Fetches job listings from LinkedIn, Indeed, etc.</li>
                                    <li> <strong>AI-Powered Match Score</strong> – Uses NLP to analyze job descriptions & resumes</li>
                                    <li><strong>Real-time Alerts</strong> – Sends new job matches via email/WhatsApp</li>
                                    <li><strong>Custom Filters</strong> – Sort by location, salary, experience, remote vs on-site</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>

                {/* Second Accordion */}
                <div className="border rounded-md mb-2">
                    <div className="w-full p-3 font-semibold bg-gray-200 d-flex justify-content-between   items-center"
                        onClick={() => toggleAccordion(1)}
                    >
                       <h5 className="ml-2 mb-0">InsightX – Business Analytics Dashboard</h5>
                        <p className="mr-2 mb-0">{openIndex === 1 ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}</p>
                    </div>
                    <div className={`accordion-content ${openIndex === 1 ? "open" : "closed"}`}>
                        <div className=" row bg-white border-top align-items-center scrollable-content">
                            <div className="col-md-6 p-3 ">
                                <h4> Overview:</h4>
                                <p>InsightX is a dynamic analytics dashboard that allows users to build, customize, and automate reports for inventory,
                                    stocks, and financial transactions. It pulls data from multiple sources and sends automated reports to email.
                                </p>

                            </div>
                            <div className="col-md-6 mt-4">
                                <h4> Key Features:</h4>
                                <ul className="text">
                                    <li> <strong>Drag & Drop Custom Charts</strong> –Users can build real-time dashboards</li>
                                    <li> <strong>Automated Reports</strong> –Sends daily/weekly business insights to email/WhatsApp </li>
                                    <li> <strong> Predictive Analytics</strong> – Uses AI to forecast sales & stock trends </li>
                                    <li> <strong> Multi-Source Data Integration</strong> –  Fetches data from APIs, databases, Excel, Google Sheets</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Third Accordion */}
                <div className="border rounded-md mb-2">
                    <div className="w-full p-3 font-semibold bg-gray-200 d-flex justify-content-between align-items-center items-center"
                        onClick={() => toggleAccordion(2)}
                    >
                       <h5 className="ml-2 mb-0">Tours & Travel</h5>
                        <p className="mr-2 mb-0">{openIndex === 2 ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}</p>
                    </div>
                    <div className={`accordion-content ${openIndex === 2 ? "open" : "closed"}`}>
                        <div className=" row bg-white border-top align-items-center scrollable-content">
                            <div className="col-md-6 p-3 ">
                                <h4> Overview:</h4>
                                <p>TravelEase is a smart travel booking platform that helps users find, plan, and book trips effortlessly.
                                    It provides personalized travel suggestions based on user preferences, weather, and trending destinations.
                                </p>

                            </div>
                            <div className="col-md-6 mt-4">
                                <h4> Key Features:</h4>
                                <ul className="text">
                                    <li> <strong>AI-PoweAI-Powered Trip Planner</strong> –  Suggests best flights, hotels, and attractions</li>
                                    <li> <strong> Dynamic Price Trackinge</strong> –  Alerts users when prices drop for flights & hotels </li>
                                    <li> <strong>Multi-Destination Itinerary Builder</strong> –Auto-generates optimized travel plans</li>
                                    <li> <strong>Real-Time Weather & Local Insights</strong> –Helps in better trip planning </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Fourth Accordion */}
                <div className="border rounded-md mb-2">
                    <div className="w-full p-3 font-semibold bg-gray-200 d-flex justify-content-between  items-center"
                        onClick={() => toggleAccordion(3)}
                    >
                       <h5 className="ml-2 mb-0">Multilang - Multilingual Website Translator</h5>
                        <p className="mr-2 mb-0">{openIndex === 3 ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}</p>
                    </div>
                    <div className={`accordion-content ${openIndex === 3 ? "open" : "closed"}`}>
                        <div className=" row bg-white border-top align-items-center scrollable-content">
                            <div className="col-md-6 p-3 ">
                                <h4> Overview:</h4>
                                <p>AI-powered multilingual solution that helps websites translate content dynamically into multiple languages while
                                    maintaining SEO optimization and cultural accuracy.
                                </p>

                            </div>
                            <div className="col-md-6 mt-4">
                                <h4> Key Features:</h4>
                                <ul className="text">
                                    <li> <strong> Instant AI-Powered Translation</strong> – Supports 100+ languages </li>
                                    <li> <strong>SEO-Friendly Translations</strong> –  Generates localized URLs for better ranking</li>
                                    <li> <strong>Customizable Edits</strong> – Users can manually refine translations  </li>
                                    <li> <strong>Fast CDN Caching</strong> –  Ensures high-speed page load times </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Fifth Accordion */}
                <div className="border rounded-md">
                    <div className="w-full p-3 font-semibold bg-gray-200 d-flex justify-content-between  items-center"
                        onClick={() => toggleAccordion(4)}
                    >
                        <h5 className="ml-2 mb-0">WhatsQuery – AI-Powered WhatsApp Business Search & Filter</h5>
                        <p className="mr-2 mb-0">{openIndex === 4 ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}</p>
                    </div>
                    <div className={`accordion-content ${openIndex === 4 ? "open" : "closed"}`}>
                        <div className=" row bg-white border-top align-items-center scrollable-content">
                            <div className="col-md-6 p-3 ">
                                <h4> Overview:</h4>
                                <p>WhatsQuery helps businesses search, filter, and analyze customer conversations from WhatsApp Business API. It allows real-time message tracking, AI-powered insights, and auto-generated reports.
                                </p>

                            </div>
                            <div className="col-md-6 mt-4">
                                <h4> Key Features:</h4>
                                <ul className="text">
                                    <li> <strong>Smart Search & Filters</strong> –  ENDkeywords, date, tags, sentiment </li>
                                    <li> <strong>AI-PAI-Powered Insights</strong> –  Detects trends, complaints, and customer sentiment </li>
                                    <li> <strong>Automated Reports </strong> – Sends daily/weekly chat summaries      </li>
                                    <li> <strong>WhatWhatsApp Web & API Integrations</strong> – Works seamlessly with existing business workflows  </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
