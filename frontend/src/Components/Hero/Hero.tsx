import React from "react";
import {Link} from "react-router-dom";
import "./Hero.css";
import {useTranslation} from 'react-i18next';

interface Props {
}

const Hero = (props: Props) => {
  const {t} = useTranslation();

  const testimonials = [
    {
      name: "John Doe",
      text: "very good",
    },
    {
      name: "Jane Smith",
      text: "I love it",
    },
    {
      name: "Sam Wilson",
      text: "I am very happy",
    },
  ];

  return (
    <div>
      <section id="hero">
        <div className="container mx-auto p-8">
          {/* Video Section */}
          <div className="video-container mb-8">
            <video className="w-full" controls autoPlay={true}>
              <source src="/video_1mb.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Quotes Section */}
          <div className="flex flex-col space-y-10 text-center lg:text-left lg:space-y-16">
            <h1 className="text-5xl font-bold lg:text-6xl">
              {t('49_days')}
            </h1>
            <p className="text-2xl text-gray-400">
              Follow our guidelines to achieve more and help others.
            </p>
            <div>
              <Link
                to="/register"
                className="py-5 px-10 text-2xl font-bold text-white bg-lightGreen rounded lg:py-4 hover:opacity-70"
              >
                {t('register')}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            {t('testimonials.title')}
          </h2>
          <div className="flex flex-wrap -mx-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full md:w-1/3 px-4 mb-8">
                <div className="p-6 bg-white rounded shadow">
                  <p className="text-lg italic mb-4">
                    {testimonial.text}
                  </p>
                  <p className="text-lg font-bold text-right">
                    - {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>

  );
};

export default Hero;
