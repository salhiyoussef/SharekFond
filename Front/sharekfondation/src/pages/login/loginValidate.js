const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = "الرجاء إذخال البريد الإلكتروني";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "error.email";
    }
    if (!values.password) {
      errors.password = "الرجاء إذخال كلمة السر";
    } else if(values.password.length < 4 ) {
        errors.password = "الرجاء إذخال أكثر من 4 رموز"
    }
    return errors;
  };
  
  export default validate;
  