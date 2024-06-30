const ContactMe = () => {
    return (
        <div className="px-[2rem] lg:px-[4rem] pb-[2rem] lg:pb-[4rem]">
            <section>
                <h1 className="text-[2rem] font-semibold mb-[1rem] lg:mb-[2rem]">Contact Me</h1>
                <section>
                    <p>Reach out to me via <a className="hover:font-semibold hover:underline mode-transistion text-green-800" href="mailto:debopercile@gmail.com">Email</a>, <a className="hover:font-semibold hover:underline mode-transistion text-green-800" href="https://linkedin.com/in/durogbade-adesina-samuel-88557423a">LinkedIn</a> or <a className="hover:font-semibold hover:underline mode-transistion text-green-800" href="https://wa.me/2348135229235">WhatsApp</a> to discuss how I can help you with your cybersecurity goals.</p>
                </section>
            </section>
        </div>
    );
};

export default ContactMe;