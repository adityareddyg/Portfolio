import React from "react";

// ProjectCard Component
const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-xs sm:max-w-xs md:max-w-xs bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="w-full rounded-t-lg h-48 object-cover">
                <img src={image} alt={title} />
            </div>
            <div className="p-4 sm:p-6">
                <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
        </div>
    );
}

export const project = [
    {
        title: 'Crop Management Portal for Farmers using AI',
        description: 'This project involves an AI-powered Crop Management portal that helps farmers with crop recommendations, weather forecasting, pest detection, and soil analysis to improve crop yield and productivity.',
        image: 'https://blog.agribazaar.com/wp-content/uploads/2022/02/GettyImages-lamyai-digitalisation-field-food-tech.jpg',  // Replace with your actual image path
        git: 'https://github.com/yourusername/crop-management-ai',
        technologies: ['AI', 'Machine Learning', 'Python', 'Flask', 'TensorFlow']
    },
    {
        title: 'Brain Tumour Detection using CNN',
        description: 'This project uses Convolutional Neural Networks (CNN) to detect brain tumours from medical images, automating the process of diagnosis and improving the accuracy and speed of detection.',
        image: 'https://onco.com/about-cancer/wp-content/uploads/2019/02/Brain_Tumor-1.jpg',  // Replace with your actual image path
        git: 'https://github.com/yourusername/brain-tumour-detection-cnn',
        technologies: ['CNN', 'Deep Learning', 'Python', 'TensorFlow', 'Keras']
    },
    {
        title: 'Credit Card Fraud Detection using Random Forest',
        description: 'This project utilizes the Random Forest algorithm to detect fraudulent activities in credit card transactions, helping financial institutions reduce fraud rates and enhance security.',
        image: 'https://www.practicalecommerce.com/wp-content/uploads/2019/02/Credit-card-fraud.jpg',  // Replace with your actual image path
        git: 'https://github.com/yourusername/credit-card-fraud-random-forest',
        technologies: ['Machine Learning', 'Random Forest', 'Python', 'Scikit-learn']
    },
    {
        title: 'Hangman Game for Children using Python',
        description: 'A simple yet fun Hangman game built using Python, designed to help children learn vocabulary while having fun. It includes an easy-to-use interface and interactive gameplay.',
        image: 'https://powerpointgames.uk/wp-content/uploads/2018/01/2018-01-06-52.png',  // Replace with your actual image path
        git: 'https://github.com/yourusername/hangman-game-python',
        technologies: ['Python', 'Game Development', 'Tkinter']
    }
]

export default Projects;
