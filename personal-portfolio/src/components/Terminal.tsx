import { useNavigate } from "react-router-dom";

function Terminal() {
    const navigation = useNavigate();

    const handleTerminalInput = (command:string) => {
        command.toLowerCase();

        switch (command) {
            case 'cd ./projects':
                navigation('/projects')
                break;

            default:
        		break;
        }
    }


    return (
        <>
        <div className="w-1/2 h-3/5">
            <div className="w-full h-4/5 mockup-code shadow-lg">
                <pre data-prefix="$"><code className="text-success">Website is ready to run!</code></pre>
            </div>

            <input className="w-full h-fit rounded-lg p-1 mt-4 bg-neutral shadow-lg" placeholder="Type !help to start" onChange={() => handleTerminalInput('cd ./projects')}/>

        </div>
        </>
    )
}

export default Terminal;
