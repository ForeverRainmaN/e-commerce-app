import {useEffect, useRef, useState} from 'react';
import {ChangeEvt, FormEvt} from "../common/types";

const useForm = <V extends { [P in keyof V]: V[P] }>(
    initialValues: V,
    onSubmit?: (values: V) => void)
    : {
    handleSubmit: (e: any) => void;
    handleChange: (e: ChangeEvt) => void;
    values: V;
    setInitialValues: () => void;
} => {
    const [values, setValues] = useState<V>(initialValues || {})
    const setInitialValues = () => {
        setValues({...initialValues})
    }
    const formRendered = useRef<boolean>(true);

    useEffect(() => {
        if (formRendered.current) {
            setValues(initialValues);
        }
        formRendered.current = false;
    }, [initialValues]);

    const handleChange: (e: ChangeEvt) => void = (event: ChangeEvt): void => {
        const {target: {name, value}} = event;
        setValues({...values, [name]: value});
    };

    const handleSubmit: (e: FormEvt) => void = (e: FormEvt) => {
        if (onSubmit && e) {
            e.preventDefault()
            onSubmit(values);
            e.currentTarget.reset();
            setInitialValues();
        }
    };

    return {
        values,
        handleChange,
        handleSubmit,
        setInitialValues,
    };
}

export default useForm