import { useContext } from "react";
import AppContext from "../context/AppContext";

const ModeChanger = () => {
    const { setDarkMode } = useContext(AppContext);

    const clickHandler = () => {
        setDarkMode(prevState => !prevState);
    };

    return (
        <div className="flex">
            <section className="toggle-button rounded-[12px] mode-transistion relative cursor-pointer w-[4rem] h-[2.1rem] bg-black border border-black" onClick={clickHandler}>
                <section className="toggle-button-inner-circle rounded-[12px] mode-transistion w-[50%] h-full bg-white"></section>
            </section>
        </div>
    );
};

export default ModeChanger;