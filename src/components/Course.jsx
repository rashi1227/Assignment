import React, { useState } from 'react';
import rowone from "../assets/images/row1-1.jpg";
import rowtwo from "../assets/images/row1-2.png";
import rowthree from "../assets/images/row1-3.jpg"
import rowfour from "../assets/images/row2-1.jpg"
import rowfive from "../assets/images/row2-3.png"


const courses = [
    {
        title: "Prerequisite for Cybersecurity",
        module: "Module 1",
        image: rowone,
        isLocked: false,
        progress: 70
    },
    {
        title: "AI Induced Cybersecurity with CyberVie",
        module: "Module 2",
        image: rowtwo,
        isLocked: false,
        progress: 0
    },
    {
        title: "Incident Response + Threat Hunting",
        module: "Module 3",
        image: rowthree,
        isLocked: true,
        progress: 0
    },
    {
        title: "Penetration Testing + Vulnerability Management",
        module: "Module 4",
        image: rowthree,
        isLocked: true,
        progress: 0
    },
    {
        title: "API Security",
        module: "Module 5",
        image: rowfour,
        isLocked: true,
        progress: 0
    },
    {
        title: "Cloud Security - AWS (Amazon Web Service)",
        module: "Module 6",
        image: rowfive,
        isLocked: true,
        progress: 0
    }
];

const Course = () => {
    const [isPremium, setIsPremium] = useState(false);

    const handleUnlock = () => {
        setIsPremium(true);
    };

    return (
        <div className="flex flex-col items-center justify-center mt-20 z-0">
            <div className="grid grid-cols-1 gap-8 space-x-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className={`relative bg-white py-6 px-6 rounded-3xl w-80 my-4 shadow-xl transform transition duration-500 hover:scale-105 ${course.isLocked && !isPremium ? 'opacity-50' : ''}`}
                    >
                        <img src={course.image} alt={course.title} className="rounded-t-3xl w-full h-40 object-cover" />
                        <div className="mt-8">
                            <p className="text-xl font-semibold my-2">{course.title}</p>
                            <p className="text-gray-400 text-sm">{course.module}</p>
                            <button
                                className={`mt-4 px-4 py-2 rounded-lg text-white ${course.isLocked && !isPremium ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'}`}
                                disabled={course.isLocked && !isPremium}
                                onClick={() => alert(`Viewing course: ${course.title}`)}
                            >
                                View Course
                            </button>
                            <div className="mt-4">
                                <div className="h-2 bg-gray-200 rounded-full">
                                    <div
                                        className="h-2 bg-blue-500 rounded-full"
                                        style={{ width: `${course.progress}%` }}
                                    ></div>
                                </div>
                                <p className="text-sm text-gray-500 mt-2">{course.progress}% completed</p>
                            </div>
                            {course.isLocked && !isPremium && (
                                <p className="mt-4 text-red-500">Purchase premium to unlock</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {!isPremium && (
              <button
              className="relative inline-flex items-center justify-center gap-4 group mt-8 px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold transform transition duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
              onClick={handleUnlock}
            >
              <span className="relative">Purchase Premium</span>
              <svg
                className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                fill="none"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                aria-hidden="true"
              >
                <path className="transition opacity-0 group-hover:opacity-100" d="M0 5h7"></path>
                <path className="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
              </svg>
            </button>
            
             
             
            )}
        </div>
    );
};

export default Course;
