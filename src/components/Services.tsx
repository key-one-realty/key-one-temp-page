import { useState } from "react";
import ServiceCard from "./ServiceCard";
import ServiceDescription from "./ServiceDescription";
import previousBtn from "../assets/previous.svg";
import facebookIcon from "../assets/facebook_1.svg";
import instagramIcon from "../assets/instagram_1.svg";
import tiktokIcon from "../assets/tiktok_1.svg";

const Services = () => {
  const services = [
    {
      id: 1,
      serviceTopText: "",
      serviceUnderText: "",
      serviceDescription:
        "Key One is your one-stop destination for all things real estate, offering a complete range of services tailored to your needs. From buying, selling, and leasing to property management, holiday rentals, and interior design, our four divisions provide seamless, unified solutions under one roof.",
      webLink: "",
    },
    {
      id: 2,
      serviceTopText: "HOLIDAY",
      serviceUnderText: "HOMES",
      serviceDescription:
        "We ensure high occupancy rates and increased income for your holiday home. Our attention to detail also helps guests have an unforgettable experience, which in turn encourages repeat visits and positive reviews.",
      webLink:
        "https://www.keyonerealtygroup.com/dubai-top-real-estate-services",
    },
    {
      id: 3,
      serviceTopText: "property",
      serviceUnderText: "management",
      serviceDescription:
        "Your property is a valuable investment asset, and we treat it as such. Whether it's a single property or an entire building, we promise to unlock its full potential while navigating the complexities of property management for you .",
      webLink:
        "https://www.keyonerealtygroup.com/dubai-top-real-estate-services",
    },
    {
      id: 4,
      serviceTopText: "interior",
      serviceUnderText: "design",
      serviceDescription:
        "Redefining spaces with limitless possibilities. Key One’s interior design solutions will transform your space into a home haven, utilizing our expertise to bring luxury and comfort to each project assigned.",
      webLink:
        "https://www.keyonerealtygroup.com/dubai-top-real-estate-services",
    },
    {
      id: 5,
      serviceTopText: "real estate",
      serviceUnderText: "brokerage",
      serviceDescription:
        "Sellers benefit from Key One’s proven strategy, which maximizes property value while ensuring swift sales. Due to our proactive approach, landlords with Key One experience hassle-free solutions .",
      webLink:
        "https://www.keyonerealtygroup.com/dubai-top-real-estate-services",
    },
  ];

  const [selectedService, setSelectedService] = useState(1);

  const handlePopService = () => {
    const tempServiceLength = services.length - 1;

    if (selectedService <= tempServiceLength) {
      setSelectedService(selectedService + 1);
    } else {
      setSelectedService(1);
    }
  };

  const handlePreviousService = () => {
    if (selectedService > 1) {
      setSelectedService(selectedService - 1);
    } else {
      setSelectedService(1);
    }
  };

  const handleBackToStart = () => {
    setSelectedService(1);
  };

  return (
    <div className="flex flex-col justify-center lg:justify-between items-center h-full">
      <div className="services-selector flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:gap-28 gap-2 h-full">
        <div
          className="services-container flex justify-center items-center w-[258px] lg:w-[372px] h-[226px]"
          onClick={handlePopService}
        >
          <div className="w-full h-full">
            {services.map((service) => {
              return (
                <ServiceCard
                  key={service.id}
                  index={service.id}
                  serviceTopText={service.serviceTopText.toUpperCase()}
                  serviceBottomText={service.serviceUnderText.toUpperCase()}
                  selectedService={selectedService}
                />
              );
            })}
          </div>
        </div>
        <div className="service-descriptions px-6">
          {services.map((service) => {
            return (
              <ServiceDescription
                key={service.id}
                selectedService={selectedService}
                serviceName={`${service.serviceTopText} ${service.serviceUnderText}`}
                serviceDescription={service.serviceDescription}
                serviceLink={service.webLink}
                index={service.id}
              />
            );
          })}
        </div>
      </div>
      <div className="footer w-full flex flex-col justify-center items-center gap-8 relative">
        <h2 className="text-black font-bold text-xl leading-10 hidden lg:flex">
          {selectedService > 1
            ? "We Are Coming Soon..."
            : "Get Ready for Something Amazing. We’ll Be Back Soon."}
        </h2>

        <div
          className={`${
            selectedService > 1 ? "show-helper-btns" : "hide-helper-btns"
          } helper-btns flex justify-between items-center w-full px-6`}
        >
          <button onClick={handlePreviousService}>
            <img
              src={previousBtn}
              alt="previous button"
              className="w-8 h-8 lg:w-16 lg:h-16"
            />
          </button>

          {selectedService == services.length && (
            <button
              onClick={handleBackToStart}
              className="uppercase text-[6px] text-black lg:text-[10px] leading-10 font-bold bg-[#F7CB6A] px-4 lg:px-7"
            >
              back to start
            </button>
          )}
        </div>

        <div className="h-[3px] max-w-[100svw] w-screen bg-[#F7CB6A] lg:w-[324px]"></div>
        <div className="flex w-full justify-center items-center gap-2">
          <a href="https://www.facebook.com/keyone.realestate/" target="_blank">
            <img
              src={facebookIcon}
              alt="facebook"
              className="w-5 h-5 object-contain"
            />
          </a>
          <a href="https://www.instagram.com/keyone.uae/" target="_blank">
            <img
              src={instagramIcon}
              alt="instagram"
              className="w-5 h-5 object-contain"
            />
          </a>
          <a href="https://www.tiktok.com/@keyoneuae" target="_blank">
            <img
              src={tiktokIcon}
              alt="tiktok"
              className="w-5 h-5 object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
