import styles from '../../css/ContactForm.module.css';
import Input from '../Input';

export default function Form() {
  const { form, textarea, submit, circleTop, circleBottom } = styles;
  
  const inputs = [
    {
      id: 1,
      title: 'お名前',
      type: 'text',
      name: 'name',
      autoComplete: 'name',
      placeholder: 'Your name here',
      required: true
    },
    {
      id: 2,
      title: 'メールアドレス',
      type: 'email',
      name: 'email',
      autoComplete: 'email',
      placeholder: 'Your email here',
      required: true
    }
  ];

  return (
    <section className={form}>
      <h2>お問い合わせ</h2>
      <form netlify>
        {inputs.map(input => {
          return (
            <Input {...input} key={input.id}/>
          );
        })}
        <label className={textarea}>
          <span>メッセージ</span>
          <textarea name="message" id="message" placeholder='Your message here' required></textarea>
        </label>
        <button className={submit} type='submit'>送信する</button>
      </form>
      <div className={circleTop}></div>
      <div className={circleBottom}></div>
    </section>
  );
}