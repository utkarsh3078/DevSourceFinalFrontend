"use client";

import Nav from "@/components/navbar";
import { useState } from "react";
import { FaCamera, FaMapMarkerAlt, FaUserEdit } from "react-icons/fa";

function ProfilePage() {
    const [image, setImage] = useState("/default-profile.png"); 
    const [name, setName] = useState("Adarsh");
    const [bio, setBio] = useState("Web Developer | MERN Stack Enthusiast");
    const [location, setLocation] = useState("Panipat, India");
    const [isEditing, setIsEditing] = useState(false);
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImage(imageURL);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <Nav/>
            <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                    <img
                        src={image}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full border-4 border-gray-300"
                    />
                    <label className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600">
                        <FaCamera size={16} />
                        <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                    </label>
                </div>
                {isEditing ? (
                    <div className="space-y-3">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md text-black focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 text-black focus:ring-blue-500 outline-none resize-none"
                        />
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md text-black focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                ) : (
                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
                        <p className="text-gray-600">{bio}</p>
                        <p className="text-gray-500 flex items-center justify-center gap-2">
                            <FaMapMarkerAlt /> {location}
                        </p>
                    </div>
                )}
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition flex items-center gap-2 mx-auto"
                >
                    <FaUserEdit />
                    {isEditing ? "Save Changes" : "Edit Profile"}
                </button>
            </div>

        </div>
    );
}

export default ProfilePage;
