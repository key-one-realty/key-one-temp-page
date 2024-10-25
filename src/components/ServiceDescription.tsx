type ServiceDescriptionProps = {
  serviceName: string;
  serviceDescription: string;
  serviceLink: string;
  selectedService: number;
  index: number;
};

const ServiceDescription = ({
  serviceName,
  serviceDescription,
  serviceLink,
  selectedService,
  index,
}: ServiceDescriptionProps) => {
  return (
    <div
      className={`${
        selectedService == index ? "show-description" : "hidden"
      } lg:w-[40svw]`}
    >
      <div className="text-black flex flex-col justify-start items-start gap-4">
        <h2 className="text-base lg:text-xl font-bold leading-6 lg:leading-10 uppercase">
          {serviceName.trim() !== "" ? serviceName : "WHO ARE WE?"}
        </h2>

        <p className="text-xs leading-6 lg:text-xl lg:leading-10">
          {serviceDescription}
        </p>

        {serviceLink && (
          <a
            href={serviceLink}
            className="font-bold leading-10 lg:px-9 text-center text-black bg-[#F7CB6A] text-[8px] lg:text-base lg:leading-10 w-[80px] lg:w-[150px] rounded-[5px]"
          >
            MORE
          </a>
        )}
      </div>
    </div>
  );
};

export default ServiceDescription;
