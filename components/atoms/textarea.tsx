import Field from './field';

type Props = {
    id?: string;
    name: string;
    label: string;
    required: boolean;
};

export default function TextArea({ name, label, required, id = name }: Props) {
    return (
        <Field id={id} label={label} required={required}>
            <textarea
                name={name}
                id={id}
                required={required}
                className="block min-h-[5rem] w-full border-0 p-0 text-zinc-900 placeholder-zinc-500 focus:ring-0 sm:text-sm"
            />
        </Field>
    );
}
