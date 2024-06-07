import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose?: () => void;
}

export default function Alert(props: Props) {
  const { children, onClose } = props;
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
      onClick={() => {
        if (onClose) onClose();
      }}
    >
      {children}
    </div>
  );
}
