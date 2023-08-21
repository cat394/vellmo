import styles from '../css/Input.module.css';
export default function Input(props) {
  const { label, input }  = styles;
  const { title, type, name, autoComplete, placeholder, required=true } = props;
  
  return (
    <label className={label}>
      <span>{title}</span>
      <input 
        type={type} 
        name={name} 
        autoComplete={autoComplete} 
        placeholder={placeholder}
        className={input}
        required={required}
      />
    </label>
  );
}