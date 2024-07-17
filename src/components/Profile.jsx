import React, { useState } from 'react';

const Profile = () => {
    const [profile, setProfile] = useState({
        ctfScore: 0.0,
        fullName: '',
        email: '',
        mobileNo: '',
        education: '',
        workingDomain: '',
        experience: '',
        currentSalary: '',
        expectedSalary: '',
        preferredLocation: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Profile submitted:', profile);
    };

    return (
        <div className="min-h-screen bg-page-bg bg-cover bg-center flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-4xl border border-blue-200 mt-2">
                <div className="flex">
                    <div className="w-1/3 flex flex-col items-center border-r border-blue-200">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Profile"
                            className="h-24 w-24 rounded-full mb-6 border-4 border-blue-500 shadow-md"
                        />
                        <div className="text-center mb-6">
                            <h2 className="text-xl font-semibold">CTF Score</h2>
                            <input
                                type="number"
                                name="ctfScore"
                                value={profile.ctfScore}
                                onChange={handleChange}
                                className="w-24 p-2 border rounded-3xl text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-transparent text-black"
                            />
                        </div>
                    </div>
                    <div className="w-2/3 pl-6">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="mb-4">
                                    <label className="block text-xl font-semibold">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={profile.fullName}
                                        onChange={handleChange}
                                        className="w-full p-2 border-b-black border-b-2 bg-transparent rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-xl font-semibold">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={profile.email}
                                        onChange={handleChange}
                                        className="w-full p-2 border-b-black border-b-2 bg-transparent rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-xl font-semibold">Mobile No.</label>
                                    <input
                                        type="tel"
                                        name="mobileNo"
                                        value={profile.mobileNo}
                                        onChange={handleChange}
                                        className="w-full p-2 border-b-black border-b-2 bg-transparent rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-xl font-semibold">Education</label>
                                    <input
                                        type="text"
                                        name="education"
                                        value={profile.education}
                                        onChange={handleChange}
                                        className="w-full p-2 border-b-black border-b-2 bg-transparent rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-xl font-semibold">Current Working Domain</label>
                                    <input
                                        type="text"
                                        name="workingDomain"
                                        value={profile.workingDomain}
                                        onChange={handleChange}
                                        className="w-full p-2 border-b-black border-b-2 bg-transparent rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-xl font-semibold">Total Experience</label>
                                    <input
                                        type="text"
                                        name="experience"
                                        value={profile.experience}
                                        onChange={handleChange}
                                        className="w-full p-2 border-b-black border-b-2 bg-transparent rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-xl font-semibold">Current Salary</label>
                                    <input
                                        type="text"
                                        name="currentSalary"
                                        value={profile.currentSalary}
                                        onChange={handleChange}
                                        className="w-full p-2 border-b-black border-b-2 bg-transparent rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-xl font-semibold">Expected Salary</label>
                                    <input
                                        type="text"
                                        name="expectedSalary"
                                        value={profile.expectedSalary}
                                        onChange={handleChange}
                                        className="w-full p-2 border-b-black border-b-2 bg-transparent rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-xl font-semibold">Preferred Location</label>
                                    <input
                                        type="text"
                                        name="preferredLocation"
                                        value={profile.preferredLocation}
                                        onChange={handleChange}
                                        className="w-full p-2 border-b-black border-b-2 bg-transparent rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            >
                                Save Profile
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
