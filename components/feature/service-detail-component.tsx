'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Props } from "@/types/service-detail-types";
import { House } from "lucide-react";


const tabs = ['Details', 'Options', 'Portfolio', 'Review'];

const ServiceDetailsPage: React.FC<Props> = ({ data }) => {
  const [activeTab, setActiveTab] = useState('Details');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full justify-between px-4 py-6 flex flex-row gap-6">
      {/* Service Section */}
      <div className="w-full">
        {/* Breadcrumb + Title */}
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <House className='w-13.5 h-14.25' />  / Find Services
        </div>
        <h1 className="font-medium text-title-h4 text-[#0E121B]  font-inter">{data.title}</h1>

        {/* Image Carousel */}
        <div className="relative mt-4 flex justify-center">
          <div className="relative w-824 h-464 rounded-16 overflow-hidden">
            <Image
              src={data.images[currentImageIndex]}
              alt="Service"
              fill
              className="object-cover rounded-16"
              sizes="824px"
              priority
            />
          </div>
          {/* Carousel Buttons */}
          <button
            onClick={() =>
              setCurrentImageIndex((prev) =>
                prev === 0 ? data.images.length - 1 : prev - 1
              )
            }
            className="absolute top-1/2 left-2 transform -translate-y-1/2 w-10 h-10 p-10 border border-gray-200 rounded-full flex items-center justify-center bg-white gap-1"
          >
            {'<'}
          </button>
          <button
            onClick={() =>
              setCurrentImageIndex((prev) =>
                prev === data.images.length - 1 ? 0 : prev + 1
              )
            }
            className="absolute top-1/2 right-2 transform -translate-y-1/2 w-10 h-10 p-[10px] border border-gray-200 rounded-full flex items-center justify-center bg-white gap-1"
          >
            {'>'}
          </button>
        </div>

        {/* Image Thumbnails */}
        <div className="flex mt-2 w-824 h-107 gap-2 overflow-x-auto">
          {data.images.map((img, i) => (
            <div
              key={i}
              className={`h-56 w-20 relative rounded-10 cursor-pointer border ${currentImageIndex === i ? 'border-blue-500' : 'border-transparent'
                }`}
              onClick={() => setCurrentImageIndex(i)}
            >
              <Image
                src={img}
                alt={`Thumbnail ${i}`}
                fill
                className="rounded-10 w-191 h-107"
              // sizes="80px"
              />
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div>
          <nav className="flex space-x-6 pb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-label-sm font-medium ${activeTab === tab
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-500 hover:text-black'
                  }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-4 w-454 h-60 gap-6 border-b pt-[14px] pr-4 pb-[14px]">
          {activeTab === 'Details' && (
            <div className="w-[792px] h-[220px] gap-2">
              <p className="font-normal text-base text-[#525866] leading-6 tracking-[-1.1%]">
                {data.description}
              </p>

              <ul className="list-none space-y-2">
                {(isExpanded ? data.skills : data.skills.slice(0, 3)).map((skill, i) => (
                  <li key={i} className="font-normal text-base text-[#525866] leading-6 tracking-[-1.1%]">
                    ✅ <span className="ml-2">{skill}</span>
                  </li>
                ))}
              </ul>

              {/* Show More / Less Button */}
              {data.skills.length > 3 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-3 font-medium text-sm leading-5 tracking-[-0.006em] underline underline-offset-0 decoration-[0.5px]"
                >
                  {isExpanded ? 'Show Less' : 'Show More'}
                </button>
              )}
            </div>
          )}


          {activeTab === 'Options' && (
            <div className="w-[792px] h-auto min-w-[640px] p-4 border rounded-[12px] flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                {data.options.map((opt, i) => (
                  <div key={i}>
                    <div className="flex justify-between w-760 h-24 items-center gap-8">
                      <span className="font-normal text-base leading-6 tracking-[-0.011em] text-[#525866]">{opt.title}</span>
                      <span className="font-medium text-label-md text-[#0E121B]">¥{opt.price}</span>
                    </div>
                    {i !== data.options.length - 1 && (
                      <hr className="border border-[#E2E4E9] mx-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}



          {activeTab === 'Portfolio' && <p className="text-gray-500">Portfolio content goes here...</p>}
          {activeTab === 'Review' && <p className="text-gray-500">Review content goes here...</p>}
        </div>
      </div>
      {/* profile card */}
      <div className="w-[30%]">
        PROFILE CARD
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
