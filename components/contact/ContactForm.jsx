import { useState } from 'react';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import emailjs from 'emailjs-com'; // Importa o EmailJS
import ReCAPTCHA from 'react-google-recaptcha'; // Importe o ReCAPTCHA

const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null); // Adicione o estado para armazenar o valor do reCAPTCHA

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Verifique se o valor do reCAPTCHA foi preenchido
    if (!recaptchaValue) {
      setStatusMessage('Complete the reCAPTCHA, please.');
      setLoading(false);
      return;
    }

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      'g-recaptcha-response': recaptchaValue, // Adicione o valor do reCAPTCHA aqui
    };

    try {
      // Envia os dados para o EmailJS
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,  
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID      
      );

      if (response.status === 200) {
        setStatusMessage('Mensagem enviada com sucesso!');
      } else {
        setStatusMessage('Falha ao enviar a mensagem.');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      setStatusMessage('Erro inesperado. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            Contact Form
          </p>

          <FormInput
            inputLabel="Full Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="Your Name"
            ariaLabelName="Name"
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="Your email"
            ariaLabelName="Email"
          />
          <FormInput
            inputLabel="Subject"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="Subject"
            ariaLabelName="Subject"
          />

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
            ></textarea>
          </div>

          {/* ReCAPTCHA widget */}
          <div className="mt-6">
            <ReCAPTCHA
              sitekey= {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}  // Substitua pela sua chave pública do reCAPTCHA
              onChange={(value) => setRecaptchaValue(value)} // Armazena o valor do reCAPTCHA
            />
          </div>

          <div className="mt-6">
            <span className="font-general-medium px-7 py-4 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
              <Button title="Send Message" type="submit" aria-label="Send Message" />
            </span>
          </div>
          
          {statusMessage && <p>{statusMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
