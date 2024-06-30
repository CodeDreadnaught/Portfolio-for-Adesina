import Logo from "./Logo";
import ModeChanger from "./ModeChanger";

const Header = () => {
    return (
        <header>
            <nav className="bg-white fixed w-full h-[10dvh] flex justify-between items-center px-[2rem] lg:px-[4rem] shadow-[0_0_0.2rem_rgba(0,0,0,0.5)]">
                <Logo />
                <ModeChanger />
            </nav>
        </header>
    );
};

export default Header;