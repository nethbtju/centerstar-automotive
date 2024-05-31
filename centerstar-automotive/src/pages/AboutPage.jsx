import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import card1 from "../img/card-assets/card1.jpg";

function AboutPage() {
    const { key } = useParams();

    // Initialize text as an empty array
    const [text, setText] = useState([]);
    const [title, setTitle] = useState('About Page');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/pageText.txt');
                const data = response.data;

                // Check if the key exists in the data
                if (data.hasOwnProperty(key)) {
                    const { title: contentTitle, content: contentText } = data[key];
                    setTitle(contentTitle);
                    // Split contentText into an array using newline character as separator
                    setText(contentText.split('\n'));
                }
            } catch (error) {
                console.error('Error fetching the data', error);
            }
        };
        fetchData();
    }, [key]);

    return (
        <div className="w-full sm:w-[70%] bg-bg-grey-color bg-opacity-60">
            <h1 className="font-inria font-bold text-white pt-16 pb-6 text-3xl sm:text-4xl text-center">
                {title}
            </h1>
            <ul className="ps-20 pe-20 text-white">
                {text.map((item, index) => (
                    <li className="list-item" key={index}>{item}</li>
                ))}
            </ul>
            <br/>
            <br/>
            <img src={card1} alt="Card Image" className="w-full h-36 overflow-hidden object-cover"/>
        </div>
    );
}

export default AboutPage;
