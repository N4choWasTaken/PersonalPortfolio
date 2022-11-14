/**
 * This code represents the header
 */

import Terminal from "./Terminal";

function Header() {
    return (
        <>
        <div className="grid grid-cols-3">
            {/*Left Part*/}
            <div className="h-screen flex flex-col items-center">
                <div className="w-2/3 h-full bg-neutral shadow-lg"></div>
            </div>

            {/*Right Part*/}
            <div className="h-screen col-span-2 flex flex-col items-center justify-around font-mono font-bold">
                <Terminal />
            </div>
        </div>
        </>
    )
}

export default Header;