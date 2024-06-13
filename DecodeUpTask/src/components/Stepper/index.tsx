import { useCallback, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { useFormContext } from "../../context/FormContext";

const Stepper = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);

    const handleNextStep = useCallback(() => {
        if (currentStep === 1) {
            setCurrentStep(2);
        }
    }, [currentStep])


    const Steps = ({ step }: { step: number }) => {
        switch (step) {
            case 2: return <Step2 handleNextStep={handleNextStep} />
            default: return <Step1 handleNextStep={handleNextStep} />
        }
    }

    return <Steps step={currentStep} />
}

export default Stepper;