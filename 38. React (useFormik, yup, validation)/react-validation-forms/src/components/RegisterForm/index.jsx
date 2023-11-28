import { useFormik } from "formik";
import { registerSchema } from "../../validation/registerValidation";
import "./form.css";

const RegisterForm = () => {

  const {handleSubmit, handleBlur, handleChange, values, errors, touched, isSubmitting} = useFormik({
    initialValues: {
        name: '',
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
        position: ''
    },
    onSubmit: (values,actions)=>{
        console.log('values: ',values);
        actions.resetForm();
    },
    validationSchema: registerSchema
  })
  return (
    <form onSubmit={handleSubmit}>
        <input onBlur={handleBlur} className={`${(errors.name && touched.name) ? "input-error" : ""}`} name="name" onChange={handleChange} value={values.name} type="text" placeholder='enter name' />
        {errors.name && touched.name && <div>{errors.name}</div>}
        <input onBlur={handleBlur} className={`${(errors.email && touched.email) ? "input-error" : ""}`} name="email" onChange={handleChange} value={values.email} type="email" placeholder='enter email' />
        {errors.email && touched.email && <div>{errors.email}</div>}
        <input onBlur={handleBlur} className={`${(errors.age && touched.age) ? "input-error" : ""}`} name="age" onChange={handleChange} value={values.age} type="number" placeholder='enter age' />
        {errors.age && touched.age && <div>{errors.age}</div>}
        <input onBlur={handleBlur} className={`${(errors.password && touched.password) ? "input-error" : ""}`} name="password" onChange={handleChange} value={values.password} type="password" placeholder='enter password' />
        {errors.password && touched.password && <div>{errors.password}</div>}
        <input onBlur={handleBlur} className={`${(errors.confirmPassword && touched.confirmPassword) ? "input-error" : ""}`} name="confirmPassword" onChange={handleChange} value={values.confirmPassword} type="password" placeholder='confirm password' />
        {errors.confirmPassword && touched.confirmPassword && <div>{errors.confirmPassword}</div>}
        <label htmlFor="terms-of-use">Accept Terms of Use?</label>
        <input name="acceptTerms" value={values.acceptTerms} onChange={handleChange} id="terms-of-use" type="checkbox" />
        {(errors.acceptTerms && touched.acceptTerms) && <div style={{color:'red'}}>{errors.acceptTerms}</div>}
        <select onBlur={handleBlur} value={values.position} name="position" onChange={handleChange}>
            <option>Select your position</option>
            <option value={'developer'}>Developer</option>
            <option value={'designer'}>Designer</option>
            <option value={'marketing'}>Marketing</option>
            <option value={'hr'}>Human Resource</option>
            <option value={'other'}>other</option>
        </select>
        {(errors.position && touched.position) && <div style={{color:'red'}}>{errors.position}</div>}
        <button disabled={(Object.keys(errors).length>0 || isSubmitting) ? "disabled" : ""} type='submit'>register</button>
    </form>
  )
}

export default RegisterForm