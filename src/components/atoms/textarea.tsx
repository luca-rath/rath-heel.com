import { FormEvent } from 'react';
import Field from './field';

type Props = {
    id?: string;
    name: string;
    label: string;
    required?: boolean;
    disabled?: boolean;
    onInput?: (e: FormEvent<HTMLTextAreaElement>) => void;
};

export default function TextArea({ name, label, required = false, disabled = false, id = name, onInput }: Props) {
    return (
        <Field id={id} label={label} required={required} disabled={disabled}>
            <textarea
                name={name}
                id={id}
                required={required}
                disabled={disabled}
                onInput={onInput}
                className="block min-h-[5rem] w-full border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-500 focus:ring-0 disabled:resize-none sm:text-sm"
            />
        </Field>
    );
}
