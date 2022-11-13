/**
 * This code represents the header
 */

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
          <div className="w-1/2 h-3/5">
            <div className="w-full h-4/5 mockup-code shadow-lg">
            <pre data-prefix="$"><code className="text-success">Website is ready to run!</code></pre> 
  
            </div>
  
            <input className="w-full h-fit rounded-lg p-1 mt-4 bg-neutral shadow-lg" placeholder="Type !help to start"/>
  
          </div>
        </div>
      </div>
      </>
    )
  }
  
  export default Header