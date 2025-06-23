interface IInput {
  name: string
  placeholder: string
  formik: any
  type?: string
}

export const Input = ({
  name,
  placeholder,
  formik,
  type = 'text'
}: IInput) => {
  const classValue = formik.touched[name] && formik.errors[name] && formik.submitCount > 0
    ? 'input input-error'
    : 'input'

  return (
    <div className="input-group">
      <input
        className={classValue}
        {...formik.getFieldProps(name)}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}
