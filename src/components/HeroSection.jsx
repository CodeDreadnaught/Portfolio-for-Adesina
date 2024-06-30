import HeroSectionImage from "./HeroSectionImage";
import HeroSectionText from "./HeroSectionText";

const HeroSection = () => {
    return (
        <div className="min-h-[100dvh] lg:h-[100dvh] px-[2rem] lg:px-[4rem] pt-[calc(10dvh+2rem)] lg:pt-[calc(10dvh+4rem)] pb-[2rem] lg:pb-[4rem] flex flex-col lg:flex-row gap-[2rem]">
            <HeroSectionImage />
            <HeroSectionText />          
        </div>
    );
};

export default HeroSection;