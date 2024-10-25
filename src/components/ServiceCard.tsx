type ServiceCardProps = {
  serviceTopText: string;
  serviceBottomText: string;
  index: number;
  selectedService: number;
};

const ServiceCard = ({
  serviceTopText,
  serviceBottomText,
  index,
  selectedService,
}: ServiceCardProps) => {
  return (
    <div
      style={{
        rotate: `${-(selectedService - index) * 15}deg`,
        zIndex: -index,
      }}
      className={`${
        selectedService > index ? "hide-service" : "show-service"
      } service-card flex justify-center items-center w-[258.264px] h-[184.673px] lg:w-[372px] lg:h-[266px]`}
    >
      <div className="flex flex-col justify-center items-start text-black">
        {serviceTopText ? (
          <div>
            <p className="float-start">{serviceTopText}</p>
          </div>
        ) : (
          <div>
            <h1 className="text-xl lg:text-3xl font-bold flex justify-center items-center gap-2">
              Who
              <span className="text-[#F7CB6A] text-xl lg:text-3xl font-bold">
                Are
              </span>
              We?
            </h1>
          </div>
        )}

        {serviceBottomText ? (
          <h1 className="text-2xl lg:text-4xl font-bold">
            {serviceBottomText}
          </h1>
        ) : (
          <p className="text-xs leading-10 font-light uppercase text-center w-full">
            CLICK TO CONTINUE
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
