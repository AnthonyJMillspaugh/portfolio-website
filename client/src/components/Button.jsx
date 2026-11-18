function Button({
  children,
  onClick,
  variant = 'link-button',
  type = 'button',
  ...props
}) {
  return(
    <>
      <button type={type} className={`btn btn-${variant}`} onClick={onClick} {...props}>
        {children}
      </button>
    </>
  );
}

export default Button;