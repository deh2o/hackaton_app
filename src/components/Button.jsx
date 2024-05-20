import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, primary }) => {
  const classes = `button relative infline-flex items-center justify-center h-11 transition-colors hover:text-GreyBlue hover:bg-primary rounded-xl [border-top-right-radius: 50px] transition-transform ${
    px || "px-7"
  } ${primary ? "text-primary" : "text-primary"} ${className || ""}`;

  const spanClasses = `relative z-10`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(primary)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(primary)}
    </a>
  );
  return href ? renderLink() : renderButton();
};

export default Button;
