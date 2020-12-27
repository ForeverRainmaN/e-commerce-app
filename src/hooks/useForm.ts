import {useEffect, useRef, useState} from 'react';
import {ChangeEvt, FormEvt} from "../common/types";

const useForm = <V, E>(
    args: { initialValues: V, onSubmit: (args: { values: V, errors: E }) => void }): {
    handleBlur: (e: ChangeEvt) => void;
    touched: {};
    handleSubmit: (e: any) => void;
    handleChange: (e: ChangeEvt) => void;
    values: V;
    errors: E
} => {
    const [values, setValues] = useState<V>(args.initialValues || {} as V)
    const [errors, setErrors] = useState<E>({} as E)
    const [touched, setTouched] = useState({})
    const [, setOnSubmitting] = useState<boolean>(false)
    const [, setOnBlur] = useState<boolean>(false);

    const formRendered = useRef<boolean>(true);
    const {initialValues, onSubmit} = args;
    useEffect(() => {
        if (formRendered.current) {
            setValues(initialValues);
            setErrors({} as E);
            setTouched({});
            setOnSubmitting(false);
            setOnBlur(false);
        }
        formRendered.current = false;
    }, [initialValues]);
    const handleChange: (e: ChangeEvt) => void = (event: ChangeEvt): void => {
        const {target} = event;
        const {name, value} = target;
        event.persist();
        setValues({...values, [name]: value});
    };

    const handleBlur: (e: ChangeEvt) => void = (event: ChangeEvt) => {
        const {target} = event;
        const {name} = target;
        setTouched({...touched, [name]: true});
        setErrors({...errors});
    };

    const handleSubmit: (e: FormEvt) => void = (e: FormEvt) => {
        if (e) e.preventDefault()
        onSubmit({values, errors});
    };

    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
    };
}

export default useForm