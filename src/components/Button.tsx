
interface buttonProps {
    children: string;
    color?: string;
    onSelectButton:() => void;
}

const Button = ({ children, color, onSelectButton }: buttonProps) => {
  return <button type="button" className={`btn btn-${color || "primary"}`} onClick={onSelectButton}>{children}</button>;
}

export default Button;