import { FunctionComponent, FormEvent, useState } from 'react';
import analytics from '@analytics';
import { captureException, captureScope, Levels } from '@monitoring';
import { unixTimeStamp } from '@timeUtils';
import notification from '@notification';
import { isEmailValid } from '@utils';
import { ContactFormProps } from './ContactForm.types';

const ContactForm: FunctionComponent<ContactFormProps> = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [, setLoading] = useState<boolean>(false);

  const resetFormValues = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitContact({ name, email, message });
    resetFormValues();
  };

  // FIXME: failure to reset form for some reason
  const handleReset = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    resetFormValues();
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setError] = useState<Error | null>(null);

  const onSubmitContact = async (data: { name: string; email: string; message: string }) => {
    // const { name, email, message } = data;
    try {
      setLoading(true);

      // TODO: send email
      console.log(data);

      analytics.logEvent('contact_form_submit', {
        name,
        email,
        message,
      });

      notification.success('Message sent successfully');
      setLoading(false);
    } catch (error) {
      setError(error as Error);

      captureException(
        error as Error,
        captureScope(
          {
            type: 'contact_form_submit',
            level: Levels.Error,
            message: 'Error sending contact form',
            category: 'contact_form',
            data,
            timestamp: unixTimeStamp(new Date()),
          },
          Levels.Error,
        ),
        `Failed to send contact info. Err: ${(error as Error).message}`,
      );

      notification.error(`Failed to send message. Please try again later`);
    } finally {
      setLoading(false);
    }
  };

  const isValid = name !== '' && isEmailValid(email) && message !== '';

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="field half first">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field half">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <ul className="actions">
        <li>
          <input type="submit" value="Send Message" className="special" disabled={!isValid} />
        </li>
        <li>
          <input type="reset" value="Reset" onReset={handleReset} />
        </li>
      </ul>
    </form>
  );
};

export default ContactForm;
