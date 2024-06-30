const Skill = props => {
    return (
        <section className={`skill-section-card border border-black rounded-[12px] p-[1rem] flex-shrink-0 flex-grow-0 ${props.className}`}>
            <section>
                <h1 className="font-semibold mb-[0.5rem] h-[5rem] lg:h-[2.5rem]">{props.heading}</h1>
                <p>{props.firstInfo}</p>
                <p>{props.secondInfo}</p>
            </section>
        </section>
    );
};

export default Skill;