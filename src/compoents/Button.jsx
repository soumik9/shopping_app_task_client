import CircleLoading from "./CircleLoading";
import { cx } from "../hooks/helpers";


const Button = ({ type, loadingText, isLoading, text, variant, variantColor, uppercase, css, startIcon, ...props }) => {
  return (
    <button
      type={type ? type : "submit"}
      className={cx(
        "!transition !ease-in-out !duration-500 text-white !py-2.5 !font-medium !bg-primary-600 hover:!bg-primary disabled:!bg-primary-300 disabled:!text-gray-300 rounded-lg",

        variant === "outlined" && "!bg-transparent hover:!bg-primary-600 hover:!text-white !border-primary hover:!border-primary-300 !text-primary",

        (variantColor === 'error' && !variant?.length) && 'hover:!bg-error !bg-error-hover',

        (variantColor === 'warning' && variant === "outlined") && 'hover:!bg-warning hover:!text-white !border-warning !text-warning !outline-none',

        uppercase ? '!uppercase' : '!capitalize',

        (isLoading || startIcon) && '!text-white flex items-center justify-center',

        (startIcon && !isLoading) && 'gap-1',

        css
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading && <CircleLoading />}
      {(startIcon && !isLoading) && startIcon}
      {(loadingText && isLoading) ? loadingText : text}
    </button>
  );
};

export default Button;

