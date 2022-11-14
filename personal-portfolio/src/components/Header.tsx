/**
 * This code represents the header
 */

import Terminal from "./Terminal";

function Header() {
    return (
        <>
        <div className="grid grid-cols-3  font-sans">
            {/*Left Part*/}
        	<div className="h-screen flex flex-col items-center">
                <div className="w-2/3 h-full bg-neutral shadow-lg">
					<div className="relative top-3/4 w-full h-1/6 bg-transparent shadow-lg flex flex-col justify-evenly items-center"> {/*Personal information */}
						<h1 className="font-bold text-4xl text-primary">Thierry Pfister</h1>
						<div className="w-full h-1/2 flex flex-row">

						</div>
					</div>
				</div>
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
