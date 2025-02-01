import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOps';
import s from './RegistrationForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(7, 'Too Short!').required('Required'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(register(values));
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={s.form}>
          <label htmlFor="name" className={s.label}>
            Name:
          </label>
          <Field type="text" name="name" className={s.input} />
          <ErrorMessage name="name" component="div" className={s.error} />

          <label htmlFor="email" className={s.label}>
            Email:
          </label>
          <Field type="email" name="email" className={s.input} />
          <ErrorMessage name="email" component="div" className={s.error} />

          <label htmlFor="password" className={s.label}>
            Password:
          </label>
          <Field type="password" name="password" className={s.input} />
          <ErrorMessage name="password" component="div" className={s.error} />

          <button type="submit" disabled={isSubmitting} className={s.button}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}