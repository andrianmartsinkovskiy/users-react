import { useFormik } from 'formik'
import * as Yup from 'yup'
import { UserService } from '../../services/user.service'
import { useNavigate } from 'react-router-dom'
import {Input} from "../../components/input";

const UserFormPage = () => {
  const navigate = useNavigate()

  const userForm = useFormik({
    initialValues: {
      name: '',
      city: '',
      age: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required').min(3),
      city: Yup.string().required('Required').min(2),
      age: Yup.number().required().min(1),
    }),
    onSubmit: async (values) => {
      const user = await UserService.createUser({
        name: values.name,
        city: values.city,
        age: Number(values.age),
      })

      if (user) {
        navigate('/users')
      } else {
        alert("Something went wrong")
      }
    },
  })

  return (
    <div className="page">
      <h3 className="page-title">User Form</h3>
      <form className="user-form" onSubmit={userForm.handleSubmit}>
        <Input name="name" placeholder="Name" formik={userForm} />
        <Input name="city" placeholder="City" formik={userForm}/>
        <Input type="number" name="age" placeholder="Age" formik={userForm}/>

        <button type="submit" className="btn">Create</button>
      </form>
    </div>
  )
}

export { UserFormPage }
