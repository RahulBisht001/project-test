"use client";
import axios from "axios";
import React from "react";

const About = () => {
    const handleCustomEvent = () => {
        const url = "https://dataroc8.vercel.app/api/events";
        const headers = {
            "Content-Type": "application/json",
            Authorization: "Bearer w1w8roz7wvdqnpuxikv7h",
        };

        const eventData = {
            name: "About Clicked", // *required
            domain: "project-test-gamma-black.vercel.app", // *required
            description: "User reached on the about page", // optional
        };

        const sendRequest = async () => {
            axios
            .post(url, eventData, {headers})
            .then()
            .catch((error) => {
                console.error("Error:", error);
            });
        };
        sendRequest();
    };
    return (
        <div className="flex flex-col items-center justify-center">
            <p>About Custom Event Testing</p>
            <button onClick={handleCustomEvent} className="p-4 bg-green-500 text-black">
                Click Me
            </button>
        </div>
    );
};

export default About;
