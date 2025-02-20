import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Machine Learning Intern',
      company: 'Intrainz Innovation',
      place: 'Bangalore, India',
      duration: 'Nov 2023 - Jan 2024', // Updated duration
      logo: 'https://play-lh.googleusercontent.com/mDRK_agqJWnnGAQ6aGtueXVavD49jUOqg8F-b-MVfdKWwqIWhlWt1NJaWjkbeb_nW6s', // Company logo link
      url: 'https://www.intrainz.com', // Add the official website or the relevant URL
      points: [
        'Worked on developing machine learning models to predict sales and customer behavior.',
        'Performed data preprocessing, feature engineering, and model evaluation.',
        'Collaborated with data scientists and engineers to improve model accuracy.',
        'Presented findings and results in weekly team meetings.'
      ]
    },
    {
      id: 2,
      role: 'Data Science Intern',
      company: 'Intrainz Innovation',
      place: 'Bangalore, India',
      duration: 'Nov 2023 - Jan 2024', // Updated duration
      logo: 'https://play-lh.googleusercontent.com/mDRK_agqJWnnGAQ6aGtueXVavD49jUOqg8F-b-MVfdKWwqIWhlWt1NJaWjkbeb_nW6s', // Company logo link
      url: 'https://www.intrainz.com', // Add the official website or the relevant URL
      points: [
        'Analyzed large datasets to derive business insights and support decision-making.',
        'Implemented data visualizations and dashboards for internal reporting.',
        'Collaborated with senior data scientists to improve data workflows.',
        'Conducted A/B testing and other statistical analysis to optimize processes.'
      ]
    },
    // Add other experiences if needed
  ];

  return (
    <div className='experience bg-black w-screen text-white pt-4 pt-16 overflow-x-hidden' id='experience'>
      <div className='pt-12 sm:px-16'>
        <p className='font-light'>MY JOURNEY SO FAR.</p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Work Experience.</h2>
      </div>
      <VerticalTimeline className='mt-9'>
        {experiences.map((experience) => (
          <VerticalTimelineElement
            key={experience.id}
            className="relative vertical-timeline-element--work"
            contentStyle={{ background: "#1d1836", color: "#fff", }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.duration}
            iconStyle={{ background: '#fff' }}
            icon={
              <a className='flex justify-center items-center w-full h-full' href={experience.url} target='_blank' rel='noopener noreferrer'>
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className='w-[60%] h-[60%] object-contain'
                />
              </a>
            }
          >
            <div>
              <h3 className='text-white text-[24px] font-bold'>{experience.role}</h3>
              <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
                {experience.company} - {experience.place}
              </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
              {experience.points.map((point, index) => (
                <li
                  key={`experience-point-${index}`}
                  className='text-white-100 text-[14px] pl-1 tracking-wider'
                >
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
