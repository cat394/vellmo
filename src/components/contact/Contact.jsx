import styles from '../../css/Contact.module.css';
import ContactReserve from './ContactReserve';
import ContactForm from './ContactForm';

export default function Contact() {
  const { container } = styles;

  return (
    <>
      <h1>Contact</h1>
      <div className={container}>
        <ContactReserve />
        <ContactForm />
      </div>   
    </>
  )
}