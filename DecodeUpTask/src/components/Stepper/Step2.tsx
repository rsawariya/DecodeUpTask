import React, { useState } from "react";
import { useFormContext } from "../../context/FormContext";

interface Step2Props {
    handleNextStep: () => void;
}

const Step2 = ({ handleNextStep }: Step2Props) => {
    const { data, setData } = useFormContext();
    const [errorMessage, setErrorMessage] = useState('');

    const validateFiles = (files: File[]) => {
        const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
        const invalidFiles = files.filter(file => !allowedTypes.includes(file.type));

        if (invalidFiles.length > 0) {
            setErrorMessage('Only PNG, JPEG, JPG files are allowed.');
            return false;
        }

        setErrorMessage('');
        return true;
    }

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (validateFiles(files)) {
            const imagePreviews = files.map(file => URL.createObjectURL(file));
            setData({
                ...data,
                previewImages: [...(data.previewImages || []), ...imagePreviews]
            });
        }
    };

    const handleRemoveImage = (index: number) => {
        const updatedImages = [...(data.previewImages || [])];
        updatedImages.splice(index, 1);
        setData({ ...data, previewImages: updatedImages });
    };

    const handleSubmit = () => {
        if (data?.previewImages.length === 0) {
            setErrorMessage('Please upload files.');
            return;
        }
        alert(`Hi ${data?.firstName}! your data is saved, Check console.`);
        console.table("data", data);
    }

    return (
        <>
            <div className="space-y-1">
                <label htmlFor="images" className="block text-sm font-medium text-gray-700">
                    Select Images:
                </label>
                <input
                    id="images"
                    type="file"
                    multiple
                    accept=".png, .jpg, .jpeg"
                    onChange={handleImageChange}
                    className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    aria-describedby="imageHelp"
                    required
                />
                {errorMessage && <p className="mt-1 text-sm text-red-600" id="imageHelp">{errorMessage}</p>}
            </div>

            <div className="grid grid-cols-3 gap-4">
                {data.previewImages && data.previewImages.map((imagePreview, index) => (
                    <div key={index} className="relative">
                        <img src={imagePreview} alt={`Preview ${index}`} className="w-full h-32 object-cover rounded-md" />
                        <button
                            type="button"
                            className="absolute top-1 right-1 p-1 rounded-full bg-white text-red-500"
                            onClick={() => handleRemoveImage(index)}
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>

            <button
                onClick={handleSubmit}
                className="mt-5 bg-blue-500 text-white px-4 py-2 rounded"
            >
                Submit
            </button>
        </>
    );
}

export default React.memo(Step2);
