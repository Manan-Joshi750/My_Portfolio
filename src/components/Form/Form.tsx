import { Container, ContainerSucces } from './styles';
import { useForm, ValidationError } from '@formspree/react';
import { toast, ToastContainer } from 'react-toastify';
import ReCAPTCHA from 'react-google-recaptcha';
import { useEffect, useState } from 'react';
import validator from 'validator';

export function Form() {
  const [state, handleSubmit] = useForm('xknkpqry');
  const [validEmail, setValidEmail] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [message, setMessage] = useState('');

  function verifyEmail(email: string) {
    setValidEmail(validator.isEmail(email));
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      });
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    );
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => verifyEmail(e.target.value)}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <ReCAPTCHA
          sitekey="6Lftcm0rAAAAALLM-vE0qn8arqeD5zzG6LhQPwUt"
          onChange={(token) => {
            setIsHuman(true);
            
            // Send token to backend for verification
            fetch("/verify-recaptcha", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ token })
            })
            .then(res => res.json())
            .then(data => {
              if (!data.success) {
                toast.error("Bot suspected. Please try again.");
                setIsHuman(false); // Revert
              }
            })
            .catch(() => {
              toast.error("reCAPTCHA verification failed.");
              setIsHuman(false);
            });
          }}
        />

        <button
          type="submit"
          disabled={state.submitting || !validEmail || !message || !isHuman}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}
