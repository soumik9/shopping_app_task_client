import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { cx } from "../hooks/helpers";



export const inputCmnClass = "w-full px-3 py-2 rounded-lg border-2 outline-none focus:border-primary trans mt-1 text-gray-600 disabled:border-secondary-200 disabled:bg-secondary-100 disabled:text-secondary-700"

const Input = ({ label, id, type = 'text', icon, labelRequired, error, inputCss, divCss, showPassword, setShowPassword, passwordToggle, ...props }) => {
  return (
    <div className={cx(
      divCss,
      "w-full relative"
    )}>

      {label && <label htmlFor={id} className="text-sm font-semibold px-1 text-gray-600">
        {label} {labelRequired ? <span className="text-error">*</span> : null}
      </label>}

      <div className="flex mt-0.5">
        {icon ? (
          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center relative top-[0.2rem]">
            {icon}
          </div>
        ) : null}

        <input
          type={type}
          name={id}
          className={cx(
            inputCss,
            error ? 'border-error focus:!border-error' : 'border-gray-200 hover:border-primary-100',
            inputCmnClass
          )}
          autoComplete="off"
          {...props}
        />
      </div>
      {error && (
        <span className="text-xs ml-1 text-error-hover absolute -bottom-5 left-0">
          {error}
        </span>
      )}

      {passwordToggle && <div className="absolute top-[3rem] right-3.5">
        {showPassword ? <>
          <AiOutlineEye
            className="text-gray-500 text-[22px] cursor-pointer hover:text-gray-600 trans"
            onClick={() => setShowPassword && setShowPassword(false)}
          />
        </> : <>
          <AiOutlineEyeInvisible
            className="text-gray-500 text-[22px] cursor-pointer hover:text-gray-600 trans"
            onClick={() => setShowPassword && setShowPassword(true)}
          />
        </>}

      </div>}

    </div>
  );
};

export default Input;
