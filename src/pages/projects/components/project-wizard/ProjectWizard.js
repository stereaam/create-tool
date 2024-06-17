import React, { useState } from "react";
import SelectCity from "./steps/select-city/SelectCity";
import SelectPerimeter from "./steps/select-perimeter/SelectPerimeter";
import BuildingInfoTabs from "./steps/building-info-tabs/BuildingInfoTabs";
function ProjectWizard({setStep}) {
	const [wizardStep, setWizardStep] = useState(0);
	const steps = [
		<SelectCity
			setWizardStep={setWizardStep}
			setStep={setStep}
			wizardStep={wizardStep}
		/>,
		<SelectPerimeter setWizardStep={setWizardStep} />,
		<BuildingInfoTabs setWizardStep={setWizardStep} />,
	];
	return <div>{steps[wizardStep]}</div>;
}

export default ProjectWizard;
