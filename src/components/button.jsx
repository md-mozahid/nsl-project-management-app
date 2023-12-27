import cn from "../lib/cn";

const Button = ({ children, className, ...rest }) => {
  return (
    <>
      <button
        className={cn(
          "text-center uppercase font-medium px-7 py-2 border-0 outline-none rounded-full cursor-pointer",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
