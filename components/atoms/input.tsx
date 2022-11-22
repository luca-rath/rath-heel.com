import Field from './field';

type Props = {
    id?: string;
    name: string;
    type: string;
    label: string;
    required: boolean;
};

export default function Input({ name, type, label, required, id = name }: Props) {
    return (
        <Field id={id} label={label} required={required}>
            <input
                type={type}
                name={name}
                id={id}
                required={required}
                className="block w-full border-0 p-0 text-zinc-900 placeholder-zinc-500 focus:ring-0 sm:text-sm"
            />
        </Field>
    );
}
