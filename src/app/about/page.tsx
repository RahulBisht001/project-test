import axios from "axios";
import React from "react";

const About = () => {
    const handleCustomEvent = () => {
        const url = "https://dataroc8.vercel.app/api/events";
        const headers = {
            "Content-Type": "application/json",
            Authorization: "Bearer {{apiKey}}",
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
        <div>
            About
            <button onClick={handleCustomEvent}>Click Me</button>
        </div>
    );
};

export default About;
