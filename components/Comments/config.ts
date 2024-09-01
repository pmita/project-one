export const addCommentFormConfig = [
  {
    id: 1,
    name: 'comment',
    type: 'text',
    placeholder: 'Add a comment...',
    componentType: 'textarea',
    validationSchema: {
      required: "Please enter some details",
      minLength: {
        value: 2,
        message: "Please enter more than 2 characters",
      },
      maxLength: {
        value: 250,
        message: "Please enter less than 250 characters",
      },
    }
  }
];