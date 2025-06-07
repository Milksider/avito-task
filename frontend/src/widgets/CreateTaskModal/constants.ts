import * as Yup from 'yup';

const requiredText = 'Заполните поле';

export const validationSchema = Yup.object().shape({
    assigneeId: Yup.number()
        .required(requiredText),
    boardId: Yup.number()
        .required(requiredText),
    description: Yup.string()
        .required(requiredText),
    priority: Yup.string()
        .required(requiredText),
    title: Yup.string()
        .required(requiredText),
    status: Yup.string()
        .required(requiredText),
});
