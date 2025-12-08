const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  icon: Icon, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-medium rounded-lg transition-colors inline-flex items-center gap-2';
  
  const variantStyles = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="h-5 w-5" />}
      {children}
    </button>
  );
};

export default Button;
