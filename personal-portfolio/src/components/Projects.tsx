function Projects() {
    return (
        <div className="h-screen w-screen flex items-center">
			<div className="h-2/3 w-screen bg-base-200 flex flex-col justify-center overflow-x-scroll scrollbar-hide">
				<div className="card card-compact w-96 bg-base-100 shadow-xl">
					<figure><img src="https://placeimg.com/400/225/arch" alt="City" /></figure>
					<div className="card-body">
						<h2 className="card-title">Personal CV</h2>
						<p>My own web CV</p>
						<div className="card-actions justify-end">
						<button className="btn btn-primary">Github</button>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Projects;
