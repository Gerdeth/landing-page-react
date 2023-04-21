import React from "react";

//create your first component
export function Jombotron() {
	return (
		<div className="text-center mt-5">
			<div className="jumbotron">
				<h1 className="display-4">A Warm Welcome!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
				<hr className="my-4" />

				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to Action
				</a>
			</div>
		</div>
	);
}