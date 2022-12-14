import React, { FC } from "react";
import st from "./textField.module.scss";
import cn from "classnames";
import InputMask from "react-input-mask";

interface IProps {
  name?: string;
  label?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: string;
  mask?: string;
  defaultValue?: string;
  id?: string;
}

const TextField: FC<IProps> = ({ name, label, placeholder, onChange, value, error, mask, defaultValue, id }) => {
  return (
    <div className={st.field}>
      {!!label && (
        <label htmlFor={name || id} className={st.fieldLabel}>
          {label}
        </label>
      )}

      {!!mask ? (
        <InputMask
          mask={mask}
          className={cn(st.fieldInput)}
          name={name || ""}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          defaultValue={defaultValue}
          type="text"
          id={id}
        />
      ) : (
        <input
          type="text"
          className={cn(st.fieldInput)}
          name={name || ""}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          defaultValue={defaultValue}
          id={id}
        />
      )}
      {error && (
        <div className={st.fieldError} data-testid="textfield-error">
          {error}
        </div>
      )}
    </div>
  );
};

export default TextField;
