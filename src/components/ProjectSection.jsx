import Skill from "./Skill";

const ProjectSection = () => {
    return (
        <div className="px-[2rem] lg:px-[4rem] pb-[2rem] lg:pb-[4rem]">
            <h1 className="text-[2rem] font-semibold mb-[1rem] lg:mb-[2rem]">Projects</h1>
            <section className="flex flex-col lg:flex-row gap-[1rem] lg:gap-[2rem] flex-wrap">
                <Skill className="w-[100%] lg:w-[calc(50%-1rem)]" heading="Vulnerability Assessment and Penetration Testing for Bacode Inc." firstInfo="- Conducted vulnerability scans and penetration testing to identify potential security risks" secondInfo="- Developed a comprehensive report highlighting findings and recommendations for remediation" />
                <Skill className="w-[100%] lg:w-[calc(50%-1rem)]" heading="Security Awareness Training for Shinz Gadgets" firstInfo="- Created a security awareness program training program for employees" secondInfo="- Covered topics such as phishing, password management and best practices for secure browsing" />
            </section>
        </div>
    );
};

export default ProjectSection;