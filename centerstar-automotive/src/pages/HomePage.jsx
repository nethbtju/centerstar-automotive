import React, { useState } from "react";
import Card from "../components/Card";
import card1 from "../img/card-assets/card1.jpg";
import card2 from "../img/card-assets/card2.jpg";
import card3 from "../img/card-assets/card3.jpg";
import card4 from "../img/card-assets/card4.jpg";
import card5 from "../img/card-assets/card5.jpg";
import card6 from "../img/card-assets/card6.jpg";
import Map from "../components/Map";
import ContactCard from "../components/ContactCard";
import SimpleAlert from "../components/SimpleAlert";

function HomePage() {
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility
  const [alertMessage, setAlertMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleEmailSuccess = (success) => {
    setIsSuccess(success); // Set the success status
    setAlertMessage(success ? "Email sent successfully!" : "Error sending email.");
    setShowAlert(true); // Show the alert
  
    // Set a timer to hide the alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  

  return (
    <div className="w-full sm:w-[70%] bg-bg-grey-color bg-opacity-60 sm:h-[255%]">
      <h1 className="font-inria font-bold text-white pt-16 pb-6 text-3xl sm:text-4xl text-center">
        Mercedes Benz Specialist
      </h1>

      {/* First row of cards */}
      <div className="flex justify-center pt-8 space-x-4">
        <Card imageUrl={card1} title="Repairs" /> {/* Pass card1 image and title */}
        <div className="px-2"></div>
        <Card imageUrl={card2} title="Diagnostic" /> {/* Pass card2 image and title */}
        <div className="px-2"></div>
        <Card imageUrl={card3} title="Air Conditioning" /> {/* Pass card3 image and title */}
      </div>

      {/* Second row of cards */}
      <div className="flex justify-center pt-8 space-x-4">
        <Card imageUrl={card4} title="Electrical" /> {/* Pass card4 image and title */}
        <div className="px-2"></div>
        <Card imageUrl={card5} title="Services" /> {/* Pass card5 image and title */}
        <div className="px-2"></div>
        <Card imageUrl={card6} title="And more..." /> {/* Pass card6 image and title */}
      </div>

      {/* SimpleAlert component to display email sending status */}
      {showAlert && <SimpleAlert message={alertMessage} isSuccess={isSuccess} />}

      {/* ContactCard component */}
      <ContactCard handleEmailSuccess={handleEmailSuccess} />

      <h3 className="font-inria text-white pt-20 pb-4 text-[32px] text-center">
        Find us
      </h3>
      <Map address="4 Vesper Dr, Narre Warren VIC 3805" />
    </div>
  );
}

export default HomePage;
