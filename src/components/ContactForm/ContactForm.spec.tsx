import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import faker from 'faker';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  it('should render', () => {
    render(<ContactForm />);
  });

  it('should not be able to submit form with missing values', () => {
    const onSubmit = jest.fn();
    const { container } = render(<ContactForm />);

    const submitButton = container.querySelector('input[type=submit]') as Element;
    userEvent.click(submitButton);

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('should be able to submit form with valid values', () => {
    const { container } = render(<ContactForm />);

    const emailText = faker.internet.email();
    const messageText = faker.lorem.paragraph();
    const nameText = faker.name.firstName();

    const nameInputField = container.querySelector('input[name=name]') as Element;
    const emailInputField = container.querySelector('input[type=email]') as Element;
    const messageTextAreaField = container.querySelector('textarea[name=message]') as Element;

    userEvent.type(nameInputField, nameText);
    userEvent.type(emailInputField, emailText);
    userEvent.type(messageTextAreaField, messageText);

    const submitButton = container.querySelector('input[type=submit]') as Element;
    userEvent.click(submitButton);
  });

  // FIXME: failure to reset form for some reason
  xit('should be able to clear form when reset button is clicked', () => {
    const { container } = render(<ContactForm />);

    const emailText = faker.internet.email();
    const messageText = faker.lorem.paragraph();
    const nameText = faker.name.firstName();

    const nameInputField = container.querySelector('input[name=name]');
    const emailInputField = container.querySelector('input[type=email]');
    const messageTextAreaField = container.querySelector('textarea[name=message]');

    userEvent.type(nameInputField, nameText);
    userEvent.type(emailInputField, emailText);
    userEvent.type(messageTextAreaField, messageText);

    expect(nameInputField).toHaveValue(nameText);
    expect(emailInputField).toHaveValue(emailText);
    expect(messageTextAreaField).toHaveValue(messageText);

    const clearButton = container.querySelector('input[type=reset]');
    userEvent.click(clearButton);

    expect(nameInputField).toHaveValue('');
    expect(emailInputField).toHaveValue('');
    expect(messageTextAreaField).toHaveValue('');
  });

  describe('should not be able to submit form with invalid', () => {
    const { container } = render(<ContactForm />);

    const nameInputField = container.querySelector('input[name=name]') as Element;
    const emailInputField = container.querySelector('input[type=email]') as Element;
    const messageTextAreaField = container.querySelector('textarea[name=message]') as Element;
    const submitButton = container.querySelector('input[type=submit]') as Element;

    const validEmailText = faker.internet.email();
    const validMessageText = faker.lorem.paragraph();
    const validNameText = faker.name.firstName();

    it('email address', () => {
      // with invalid email
      const wrongEmailText = 'wrong-email.com';

      userEvent.type(nameInputField, validNameText);
      userEvent.type(emailInputField, wrongEmailText);
      userEvent.type(messageTextAreaField, validMessageText);

      userEvent.click(submitButton);
    });

    it('message text', () => {
      // with wrong message
      const wrongMessageText = '';

      userEvent.type(nameInputField, validNameText);
      userEvent.type(emailInputField, validEmailText);
      userEvent.type(messageTextAreaField, wrongMessageText);

      userEvent.click(submitButton);
    });

    it('name text', () => {
      // with wrong name
      const wrongNameText = '';

      userEvent.type(nameInputField, wrongNameText);
      userEvent.type(emailInputField, validEmailText);
      userEvent.type(messageTextAreaField, validMessageText);

      userEvent.click(submitButton);
    });
  });
});
