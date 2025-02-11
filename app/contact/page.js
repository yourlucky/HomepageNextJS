"use client";

import {useState} from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        message: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("success!");
                window.location.href = "/contactList";
            } else {
                const errorData = await response.json();
                console.error("Error:", errorData.error);
            }
        } catch (error) {
            console.error("Network error:", error);
        }
    };

    const inputClassName = "text-base p-2 border border-[#1f1c1c] bg-[#e8f0fe] w-full";

    return (
        <div className="p-6 sm:p-20">
            <div className="w-full sm:w-[50%] p-6 sm:p-20 shadow-custom-dark flex flex-col text-plus bg-white">
                <h1 className="text-center font-semibold text-lg">Get in touch</h1>
                <div className="flex flex-col my-2">
                    <label htmlFor="frm-email" className="mb-2">
                        Email
                    </label>
                    <input
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClassName}
                    />
                </div>
                <div className="flex flex-col my-2">
                    <label htmlFor="frm-phone" className="mb-2">
                        Phone
                    </label>
                    <input
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={inputClassName}
                    />
                </div>
                <div className="flex flex-row justify-between my-4">
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="frm-first" className="mb-2">
                            First Name
                        </label>
                        <input
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className={inputClassName}
                        />
                    </div>
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="frm-last" className="mb-2">
                            Last Name
                        </label>
                        <input
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className={inputClassName}
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="frm-message" className="mb-2">
                        Message
                    </label>
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        className={inputClassName}
                    ></textarea>
                </div>
                <div className="flex justify-center mt-6">
                    <button onClick={handleSubmit} className="button">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
