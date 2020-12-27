import {useEffect, useRef, useState} from 'react';
import {ChangeEvt, FormEvt} from "../common/types";

const useForm = <V>(
    initialValues: V,
    onSubmit: (values: V) => void)
    : {
    handleSubmit: (e: any) => void;
    handleChange: (e: ChangeEvt) => void;
    values: V;
} => {
    const [values, setValues] = useState<V>(initialValues || {} as V)
    const clearState = () => {
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
        if (e) e.preventDefault()
        onSubmit(values);
        clearState();
    };

    return {
        values,
        handleChange,
        handleSubmit,
    };
}

export default useForm