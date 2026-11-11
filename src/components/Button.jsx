import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  icon: Icon,
  iconPosition = 'right',
  href,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#247C70] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none';

  const variants = {
    primary:
      'bg-[#123D40] text-[#F8F8F3] hover:bg-[#195256] active:bg-[#0e3032] shadow-sm border border-[#123D40]',
    secondary:
      'bg-white text-[#123D40] hover:bg-[#F0F2EF] border border-[#123D40]/15 shadow-sm',
    accent:
      'bg-[#C8E6A0] text-[#123D40] hover:bg-[#b8dc8a] font-semibold border border-[#C8E6A0]',
    ghost:
      'bg-transparent text-[#222B2B] hover:bg-[#123D40]/5 hover:text-[#123D40]',
    outlineDark:
      'bg-white/5 text-[#F8F8F3] hover:bg-white/10 border border-white/15 backdrop-blur-sm',
    green:
      'bg-[#247C70] text-white hover:bg-[#1e685e] shadow-sm border border-[#247C70]',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-4.5 py-2.5 gap-2',
    lg: 'text-sm md:text-base px-6 py-3.5 gap-2.5',
  };

  const combinedClasses = `${baseClasses} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    return (
      <motion.a
        whileTap={{ scale: 0.985 }}
        href={href}
        onClick={onClick}
        className={combinedClasses}
        {...props}
      >
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      type={type}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </motion.button>
  );
}

