import Field from "../Field";
import { useFormContext } from "../../context/FormContext";
import validate from "../../utils/validate";
import React from "react";
interface Step1Props {
    handleNextStep: () => void;
}

const Step1 = ({ handleNextStep }: Step1Props) => {
    const { data, setData, error, setError } = useFormContext();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "contactNo" && value.length > 10) return;
        console.log("handleInputChange called", name, error[name], error)
        if (error[name]) setError({ ...error, [name]: false });
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleNext = () => {
        const errors = validate(data);
        if (Object.keys(errors).length) {
            setError(errors)
        } else {
            handleNextStep();
        }
    }



    return <div>
        <Field
            label="First Name"
            name="firstName"
            value={data?.firstName}
            onChange={handleInputChange}
            errorMessage={error.firstName}
        />
        <Field
            label="Last Name"
            name="lastName"
            value={data?.lastName}
            onChange={handleInputChange}
            errorMessage={error.lastName}
        />
        <Field
            label="Email"
            name="email"
            value={data?.email}
            onChange={handleInputChange}
            errorMessage={error.email}
        />
        <Field
            label="Date of Birth"
            name="dob"
            value={data?.dob}
            onChange={handleInputChange}
            errorMessage={error.dob}
            type='date'
        />
        <Field
            label="Contact No."
            name="contactNo"
            value={data?.contactNo}
            onChange={handleInputChange}
            errorMessage={error.contactNo}
        />
        <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded"
        >
            Next
        </button>
    </div>
}

export default React.memo(Step1);