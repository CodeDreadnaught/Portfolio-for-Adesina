const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="h-[8dvh] text-[1.5rem] center">
            <p>&copy;{currentYear} Adesina Durogbade | All Rights Reserved</p>
        </footer>
    );
};

export default Footer;