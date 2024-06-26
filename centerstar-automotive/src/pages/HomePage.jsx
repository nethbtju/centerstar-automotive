import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
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
import axios from 'axios';
import {MapIcon} from "@heroicons/react/24/outline";
import {ChatBubbleLeftRightIcon} from "@heroicons/react/24/outline";
import {ClockIcon} from "@heroicons/react/24/outline";


function HomePage() {
  const location = useLocation();

  // State for alert
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // State for card content and loading
  const [cardContent, setCardContent] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Function to handle email success
  const handleEmailSuccess = (success) => {
    setIsSuccess(success);
    setAlertMessage(success ? "Email sent successfully!" : "Error sending email.");
    setShowAlert(true);

    // Set a timer to hide the alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/pageText.txt');
        const data = response.data;
        if (data) {
          const formattedData = {
            repairs: { title: data.repairs.title, card_text: data.repairs.card_text },
            diagnostics: { title: data.diagnostics.title, card_text: data.diagnostics.card_text },
            air_conditioning: { title: data.air_conditioning.title, card_text: data.air_conditioning.card_text },
            electrical: { title: data.electrical.title, card_text: data.electrical.card_text },
            services: { title: data.services.title, card_text: data.services.card_text },
            and_more: { title: data.and_more.title, card_text: data.and_more.card_text },
          };
          setCardContent(formattedData);
        }
      } catch (error) {
        console.error('Error fetching the data', error);
      } finally {
        setIsLoaded(true);
      }
    };
    fetchData();
  }, []);

    useEffect(() => {
        if (isLoaded && location.state?.scrollToContact) {
            const contactCard = document.getElementById("contact-card");
            if (contactCard) {
                contactCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }, [isLoaded, location]);

    const cardImages = [card1, card2, card3, card4, card5, card6];

    return (
        <div className="w-full sm:w-[70%] bg-bg-grey-color bg-opacity-60 p-0 sm:p-16">
            <h1 className="font-inria font-bold text-white pb-6 text-3xl sm:text-4xl text-center pt-12 sm:pt-0">
                Mercedes Benz Specialist
            </h1>

            {Object.keys(cardContent).length === 0 ? (
                <div className="text-white text-center">Loading cards...</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 sm:px-0">

                    {Object.keys(cardContent).map((key, index) => (
                        <Card
                            key={key}
                            keyName={key}
                            imageUrl={cardImages[index]}
                            title={cardContent[key].title}
                            content={cardContent[key].card_text}
                        />
                    ))}
                </div>
            )}
            <div className="font-inria font-extralight italic text-white justify-center text-center p-14">"You should own a Mercedes at least once in your lifetime"</div>
            <div className="flex sm:flex-row flex-col gap-8 sm:gap-0">
                <section className="flex flex-col text-white flex-1 justify-center gap-2">
                    <MapIcon className="h-5 text-white"/>
                    <span>
                        <p className="text-center">Factory 7/4 Vesper Dr,</p>
                        <p className="text-center">Narre Warren VIC 3805</p>
                    </span>
                </section>
                <section className="flex flex-col text-white flex-1 justify-center gap-2">
                <ChatBubbleLeftRightIcon className="h-5 text-white"/>
                    <span>
                        <p className="text-center">Tel: 0410 256 347</p>
                        <p className="text-center">Email: centerstarautomotive@gmail.com</p>
                    </span>
                </section>
                <section className="flex flex-col text-white flex-1 justify-center gap-2">
                    <ClockIcon className="h-5"/>
                    <span>
                        <p className="text-center">Monday - Friday: 8:30 am - 6 pm</p>
                        <p className="text-center">Saturday: 8:30 am - 3 pm</p>
                        <p className="text-center">Sunday: Closed</p>
                    </span>
                </section>
            </div>
            {/* SimpleAlert component to display email sending status */}
            {showAlert && <SimpleAlert message={alertMessage} isSuccess={isSuccess}/>}

            <ContactCard id="contact-card" handleEmailSuccess={handleEmailSuccess}/>
            <h3 className="font-inria text-white pt-12 pb-4 text-[32px] text-center">
                Find us
            </h3>
            <Map address="4 Vesper Dr, Narre Warren VIC 3805" />
        </div>
    );

}

export default HomePage;
