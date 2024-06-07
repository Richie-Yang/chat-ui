type Field = {
  label: string;
  type: string;
};

type SubmitButton = {
  label: string;
  onSubmit: (data: Record<string, string>) => void;
};

interface Props {
  fields: Field[];
  submitButton: SubmitButton;
}

export default function Form(props: Props) {
  const { fields, submitButton } = props;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const data: Record<string, string> = {};
    fields.forEach((field) => {
      const input = document.getElementById(field.label) as HTMLInputElement;
      data[field.label] = input.value;
    });
    submitButton.onSubmit(data);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div className="form-group" key={field.label}>
          <label htmlFor={field.label}>{field.label}</label>
          <input type={field.type} className="form-control" id={field.label} />
        </div>
      ))}
      <button type="submit" className="btn btn-primary" id="submit">
        {submitButton.label}
      </button>
    </form>
  );
}
