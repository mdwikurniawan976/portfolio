"use client";
import React, { useEffect, useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import Link from 'next/link';
import { navLinks } from '@/app/constants/constants';

type Props = {
    openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
    const [navbg, setNavbg] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('home');

    useEffect(() => {
        const handleScroll = () => {
            setNavbg(window.scrollY >= 90);
        };
        window.addEventListener("scroll", handleScroll);

        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener("scroll", handleScroll);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div className={`fixed w-full z-[100] transition-all duration-300 ${navbg ? "bg-[#0F0F1A]/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
            <div className="flex items-center h-[12vh] justify-between w-[90%] xl:w-[80%] mx-auto">
                <h1 className="text-xl md:text-3xl font-bold text-white">Dwi</h1>

                <div className="hidden lg:flex items-center space-x-5 mx-auto mr-30">
                    {navLinks.map((link) => (
                        <Link
                            key={link.id}
                            href={link.url}
                            className={`hover:text-white font-medium transition-all duration-200 ${activeSection === link.url.replace("#", "") ? "text-white font-semibold" : "text-gray-400"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center space-x-6">
                    <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer lg:hidden text-white" />
                </div>
            </div>
        </div>
    );
};

export default Nav;
