import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
        <div className="w-full h-screen sm:w-[70%] bg-bg-grey-color bg-opacity-60 p-16">
            {title === 'About Us' ? (
                <div>
                    <h1 className="font-inria font-bold text-white pb-6 text-3xl sm:text-4xl text-center">
                        About Us
                    </h1>
                    <h3 className="font-inria font-bold text-white pb-3 text-xl">
                        About Center Star Automotive
                    </h3>
                    <p className="font-inria text-white">
                        In a world where modern life hinges on the reliability of our vehicles, finding a trusted
                        mechanic becomes more than a necessity – it becomes a lifeline. At Center Star Automotive, we
                        understand the vital role your car plays in your daily life, and we are committed to being your
                        dependable partner in ensuring your <strong>Mercedes Benz</strong> runs at its best.
                    </p>
                    <h3 className="font-inria font-bold text-white pt-6 pb-3 text-xl">
                        Meet Sam Botheju - Your Mercedes Benz Specialist
                    </h3>
                    <p className="font-inria text-white">
                        With over 25 years of combined experience in the automotive industry across Dubai and Australia,
                        Sam leads Center Star Automotive with a wealth of knowledge and a deep-rooted passion for
                        Mercedes Benz vehicles. His dedication to mastering the intricacies of these luxury cars ensures
                        that every repair and service carried out at our workshop is executed with precision and
                        expertise.
                    </p>
                    <h3 className="font-inria font-bold text-white pt-6 pb-3 text-xl">
                        Our Dedication to Excellence
                    </h3>
                    <p className="font-inria text-white">
                        At Center star Automotive, we embrace the ethos of "the best or nothing" that defines the
                        Mercedes-Benz brand. Just as Mercedes-Benz promises innovation, performance, design, safety, and
                        environmental consciousness, we uphold these values in every aspect of our work. Our goal is to
                        provide a service that mirrors the superior engineering and design that make Mercedes-Benz
                        synonymous with luxury and quality.
                    </p>
                    <h3 className="font-inria font-bold text-white pt-6 pb-3 text-xl">
                        The Center star Difference
                    </h3>
                    <ul className="font-inria text-white">
                        <li>
                            <strong>Tailored Solutions:</strong> We understand that each Mercedes Benz is unique, and
                            our team of skilled technicians offers personalized and cost-effective solutions to meet
                            your car's specific needs.
                        </li>
                        <li>
                            <strong>Expertise You Can Trust:</strong>Specializing in Mercedes Benz vehicles allows us to
                            offer unparalleled knowledge and top-tier service that exceeds industry standards.
                        </li>
                        <li>
                            <strong>A Customer-centric Approach:</strong> Your satisfaction is our priority. We aim to
                            build enduring relationships with our customers based on trust, reliability, and exceptional
                            service.
                        </li>
                    </ul>
                    <h3 className="font-inria font-bold text-white pt-6 pb-3 text-xl">
                        Unveiling the Center Star Experience
                    </h3>
                    <p className="font-inria text-white">
                        When you choose Center Star Automotive, you're not just selecting an auto repair shop – you're
                        embarking on a journey of automotive excellence. Our independent workshop takes pride in
                        prioritizing your vehicle's individual requirements, ensuring it operates at peak performance
                        while adhering to the manufacturer's stringent safety and quality standards.
                    </p>
                    <h3 className="font-inria font-bold text-white pt-6 pb-3 text-xl">
                        The Center Star Advantage
                    </h3>
                    <ul className="font-inria text-white">
                        <li>
                            <strong>Dedicated Mercedes-Benz Services:</strong> Our team of skilled technicians
                            specializes in diagnosing and repairing Mercedes-Benz vehicles, guaranteeing your car
                            receives the expert care it deserves.
                        </li>
                        <li>
                            <strong>Continuous Training & Innovation</strong>By investing in ongoing training and
                            state-of-the-art diagnostic equipment, we stay at the forefront of automotive technology to
                            provide consistent, high-quality service.
                        </li>
                        <li>
                            <strong>Customer- Centric Philosophy:</strong> Your satisfaction is our success. We work
                            tirelessly to surpass your expectations and earn your trust with every interaction.
                        </li>
                    </ul>
                    <h3 className="font-inria font-bold text-white pt-6 pb-3 text-xl">
                        Your Journey Begins Here
                    </h3>
                    <p className="font-inria text-white">
                        Discover the unparalleled service and expertise that define Center Star Automotive. Join our
                        community of satisfied customers who rely on us for professionalism, reliability, and
                        exceptional care for their Mercedes Benz vehicles. Whether your Mercedes Benz requires routine
                        maintenance, complex diagnostics, or specialized repairs, trust Center Star Automotive to
                        deliver outstanding results. Visit us today and experience the Center Star difference firsthand.
                    </p>
                    <p className="font-inria text-white">
                        For all your Mercedes Benz repair needs, contact Center Star Automotive - where expertise meets excellence.
                    </p>
                </div>
            ) : (
                <>
                    <h1 className="font-inria font-bold text-white pb-6 text-3xl sm:text-4xl text-center">
                        {title}
                    </h1>
                    <ul className="ps-11 pe-11 text-white">
                        {text.map((item, index) => (
                            <li className="list-item" key={index} dangerouslySetInnerHTML={{__html: item}}></li>
                        ))}
                    </ul>
                    <br/>
                    <br/>
                </>
            )}
        </div>
    );
}

export default AboutPage;
