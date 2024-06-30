import Skill from "./Skill";

const SkillSection = () => {
    return (
        <div className="px-[2rem] lg:px-[4rem] pb-[2rem] lg:pb-[4rem]">
            <h1 className="text-[2rem] font-semibold mb-[1rem] lg:mb-[2rem]">Skills</h1>
            <section className="skill-section flex overflow-x-auto gap-[1rem] lg:gap-[2rem]">
                <Skill className="w-[90%] lg:w-[50rem]" heading="Vulnerability Assessment and Penetration Testing" firstInfo="- Conducting vulnerability scans and penetration testing using tools like Nmap, Nessus and Burp Suite" secondInfo="- Identifying and prioritizing vulnerabilities for remediation" />
                <Skill className="w-[90%] lg:w-[50rem]" heading="Incident Response and Threat Analysis" firstInfo="- Developing incident response plans and procedures" secondInfo="- Analyzing threats and performing root cause analysis" />
                <Skill className="w-[90%] lg:w-[50rem]" heading="Security Frameworks and Compliance (NIST, ISO 27001)" firstInfo="- Familiarity wit NIST Cybersecurity Framework, ISO 27001 and HIPAA" secondInfo="- Implenting security controls to meet compliance requirements" />
                <Skill className="w-[90%] lg:w-[50rem]" heading="Network Security and Architecture" firstInfo="- Designing and implementing secure network infrastructures" secondInfo="- Configuring firewalls, VPNs and intrusion detection systems" />
                <Skill className="w-[90%] lg:w-[50rem]" heading="Familiarity with Security Tools" firstInfo="- Nmap, Nessus, Burp Suite" secondInfo="- Wireshark, Splunk" />
            </section>
        </div>
    );
};

export default SkillSection;