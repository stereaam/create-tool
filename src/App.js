import Login from "./pages/login/Login";
import Projects from "./pages/projects/Projects";
import ProjectWizard from "./pages/projects/components/project-wizard/ProjectWizard";
import React, { useState } from "react";
function App() {
	const [isUserLogged, setIsUserLogged] = useState(true);
	const [step, setStep] = useState(0);
	const steps = [<Projects setStep={setStep} />, <ProjectWizard setStep={setStep} />];
	return (
		<div className="App">
			{isUserLogged ? <div>{steps[step]}</div> : <Login />}
		</div>
	);
}

export default App;
