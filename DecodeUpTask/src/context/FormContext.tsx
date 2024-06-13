import React, { createContext, useContext, useState } from 'react';

interface IinitialData {
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
    contactNo: string;
    previewImages: string[];
}

interface IError {
    firstName: string | boolean,
    lastName: string | boolean;
    email: string | boolean;
    dob: string | boolean;
    contactNo: string | boolean;
    previewImages: string | boolean;
}

const initialData: IinitialData = {
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    contactNo: '',
    previewImages: []
};

const initialError: IError = {
    firstName: false,
    lastName: false,
    email: false,
    dob: false,
    contactNo: false,
    previewImages: false
}

const FormContext = createContext<{ data: IinitialData, setData: React.Dispatch<React.SetStateAction<IinitialData>>, error: IError, setError: React.Dispatch<React.SetStateAction<IError>> }>({
    data: initialData,
    setData: () => { },
    error: initialError,
    setError: () => { }
});

const FormProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<IinitialData>(initialData);
    const [error, setError] = useState<IError>(initialError);

    return (
        <FormContext.Provider value={{ data, setData, error, setError }}>
            {children}
        </FormContext.Provider>
    );
};

const useFormContext = () => {
    return useContext(FormContext);;
};

export { FormProvider, useFormContext };
