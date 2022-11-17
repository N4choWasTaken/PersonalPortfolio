import { useNavigate } from "react-router-dom";
import TerminalStore from "../stores/TerminalStore"

function Terminal() {
    const navigation = useNavigate();
	const Store = TerminalStore();

    const handleTerminalInput = (e: React.FormEvent<HTMLInputElement>) => {
		const command = e.currentTarget.value;
        command.toLowerCase();

        switch (command) {
            case 'ls':
				Store.append({state: "success", message: "/projects, /aboutMe", prefix: ">"})
				e.currentTarget.value = "";
                break;
			case 'clear':
				Store.clear();
				e.currentTarget.value = "";
                break;
            case 'cd ..':
				Store.append({state: "warning", message: "changing directory...", prefix: ">"})
                navigation(-1)
				Store.append({state: "success", message: "done!", prefix: ">"})
				e.currentTarget.value = "";
                break;
            case 'cd ./projects':
				Store.append({state: "warning", message: "changing directory to projects...", prefix: ">"})
                navigation('/projects')
				Store.append({state: "success", message: "done!", prefix: ">"})
				Store.append({state: "info", message: "scroll down ;)", prefix: ">"})
				e.currentTarget.value = "";
                break;

            default:
        		break;
        }
    }

    return (
        <>
        <div className="w-1/2 h-3/5">
            <div className="w-full h-4/5 mockup-code shadow-lg overflow-y-scroll scrollbar-hide">
                <pre data-prefix="$"><code className="text-success">Website is ready to run!</code></pre>
				{Store.outputs.map((output) => (
					<pre data-prefix={output.prefix}><code className={`text-${output.state}`}>{output.message}</code></pre>
				))}
            </div>

            <input className="w-full h-fit rounded-lg p-1 mt-4 bg-neutral shadow-lg" placeholder="Type !help to start" onChange={handleTerminalInput}/>

        </div>
        </>
    )
}

export default Terminal;
