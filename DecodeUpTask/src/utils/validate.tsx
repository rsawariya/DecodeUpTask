interface IValidationErrors {
    [key: string]: string | boolean;
}

const validate = (data: any): IValidationErrors => {
    const errors: IValidationErrors = {};

    for (const key in data) {
        switch (key) {
            case 'firstName':
            case 'lastName':
            // case 'email':
                if (!data[key].trim()) {
                    errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
                }
                break;
            case 'dob':
                if (!data[key]) {
                    errors[key] = 'Date of Birth is required';
                }
                break;
            case 'contactNo':
                if (!/^\d{10}$/.test(data[key])) {
                    errors[key] = 'Please enter a valid 10-digit contact number';
                }
                break;
            case 'email':
                if (!data[key].trim()) {
                    errors.email = 'Email is required';
                } else if (!/\S+@\S+\.\S+/.test(data[key])) {
                    errors.email = 'Please enter a valid email address';
                }
                break;
            default:
                break;
        }
    }
    return errors;
};

export default validate;