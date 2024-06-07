enum ButtonColor {
  Primary = "btn-primary",
  Secondary = "btn-secondary",
  Success = "btn-success",
  Danger = "btn-danger",
  Warning = "btn-warning",
  Info = "btn-info",
  Light = "btn-light",
  Dark = "btn-dark",
  Link = "btn-link",
}

interface Props {
  color: ButtonColor;
  text?: string;
  children?: React.ReactNode;
  handler?: () => void;
}

export default function Button(props: Props) {
  const { text, children, color } = props;
  const className = `btn ${color}`;
  return (
    <button
      type="button"
      className={className}
      onClick={(event) => {
        console.log(event);
        if (props.handler) props.handler();
      }}
    >
      {children || text}
    </button>
  );
}
