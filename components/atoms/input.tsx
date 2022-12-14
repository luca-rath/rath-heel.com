import Field from './field';

type Props = {
    id?: string;
    name: string;
    type: string;
    label: string;
    required?: boolean;
    disabled?: boolean;
};

export default function Input({ name, type, label, required = false, disabled = false, id = name }: Props) {
    return (
        <Field id={id} label={label} required={required} disabled={disabled}>
            <input
                type={type}
                name={name}
                id={id}
                required={required}
                disabled={disabled}
                className="block w-full border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-500 focus:ring-0 sm:text-sm"
            />
        </Field>
    );
}
