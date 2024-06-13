import React from 'react';

interface FieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    errorMessage: string | boolean;
}

const Field: React.FC<FieldProps> = ({ label, name, value, onChange, type = 'text', errorMessage }) => {
    return (
        <div className="mb-2">
            <label className="block text-gray-700">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className='w-full px-3 py-2 border rounded'
            />
            {!!errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
        </div>
    );
};

export default React.memo(Field);
