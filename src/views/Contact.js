import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import useTypewritter from '../hooks/useTypewriter';
import { useState } from 'react';
import Message from '../components/Mesage';

function Contact() {
  const [text, complete] = useTypewritter("Send me a message. I'd love to hear from you!", false);
  const successMessage = 'Thank you for your message. I will be sure to reach back out to you soon :)';
  const errorMessage = 'Something went wrong. Please try again later.';
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invaild email address').required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(process.env.REACT_APP_serviceID, process.env.REACT_APP_templateID, values, process.env.REACT_APP_publicKey)
        .then(() => {
          setSent(true);
          setMessage(successMessage);
          resetForm({ values: '' });
        })
        .catch((error) => {
          if (error.status !== 200) {
            setSent(true);
            setMessage(errorMessage);
          }
        });
    },
  });

  return (
    <section className='contact nes-container is-dark with-title is-rounded'>
      <h2 className='title'>Contact Me</h2>
      {!sent && (
        <>
          <p>
            {text}
            {complete && <i className='nes-icon is-small heart' />}
          </p>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input id='name' className={formik.touched.name && formik.errors.name ? 'nes-input is-warning is-dark' : 'nes-input is-dark'} name='name' type='text' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} placeholder='Your Name' />
            {formik.touched.name && formik.errors.name ? <div className='required'>{formik.errors.name}</div> : null}
            <label htmlFor='email'>Email</label>
            <input id='email' className={formik.touched.email && formik.errors.email ? 'nes-input is-warning is-dark' : 'nes-input is-dark'} name='email' type='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} placeholder='email@email.com' />
            {formik.touched.email && formik.errors.email ? <div className='required'>{formik.errors.email}</div> : null}
            <label htmlFor='message'>message</label>
            <textarea name='message' className={formik.touched.message && formik.errors.message ? 'nes-textarea is-warning is-dark' : 'nes-textarea is-dark'} id='message' cols='30' rows='10' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} placeholder="Hello, Andrew I'd like to talk" />
            {formik.touched.message && formik.errors.message ? <div className='required'>{formik.errors.message}</div> : null}
            <button className='nes-btn' type='submit'>
              Submit
            </button>
          </form>
          {!complete && <span className='skip'>press any button to skip</span>}
        </>
      )}
      {sent && (
        <>
          <Message text={message} />
        </>
      )}
      <Link to={'/home'} id='home'>
        go home
      </Link>
    </section>
  );
}

export default Contact;
