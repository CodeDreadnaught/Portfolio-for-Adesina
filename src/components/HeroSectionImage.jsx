import Avatar from "../assets/images/avatar.png";

const HeroSectionImage = () => {
    return (
        <section className="lg:h-full h-[calc(50dvh-6rem)] lg:w-[40%]">
            <img src={Avatar} alt="A Picture of Adesina" className="size-full rounded-[50%] object-cover" />
        </section>
    );
};

export default HeroSectionImage;