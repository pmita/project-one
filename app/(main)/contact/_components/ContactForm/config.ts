export const contactFormConfig = [
  {
    id: 1,
    name: 'fullName',
    type: 'text',
    placeholder: 'Full Name',
    validationSchema: {
      required: "A name is required",
      minLength: {
        value: 3,
        message: "Your full name must be more than 3 characters",
      },
      maxLength: {
        value: 30,
        message: "Your full name must be less than 30 characters",
      }
    }
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    validationSchema: {
      required: "Email is required",
    }
  },
  {
    id: 3,
    name: 'mobile',
    type: 'numeric',
    placeholder: 'Mobile Number',
    validationSchema: {
      required: "Mobile number is required",
      minLength: {
        value: 3,
        message: "Your phone number must be more than 3 characters",
      },
      maxLength: {
        value: 12,
        message: "Your phone number must be less than 12 characters",
      },
      pattern: {
        value: /^[0-9]+$/,
        message: "Mobile phone must be a number",
      }
    }
  },
  {
    id: 4,
    name: 'location',
    type: 'text',
    placeholder: 'Location',
    validationSchema: {
      required: "Location is required",
    }
  }
];