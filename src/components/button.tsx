type ButtonProps = {
  children: React.ReactNode;
  handleClick?: () => void;
};

export const Button = ({ children, handleClick }: ButtonProps) => {
  return (
    <button
      className="w-full rounded-full bg-customRed p-4 text-rose-100 transition-all duration-500 hover:bg-red-800"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
