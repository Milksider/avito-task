import { Box, Button, Input, MenuItem, Modal, Select } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import * as styles from './CreateTaskModal.sx';
import { useFormik } from 'formik';

type CreateTaskModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

export const CreateTaskModal = ({
    isOpen,
    onClose,
}: CreateTaskModalProps) => {

    const {
        handleSubmit,
        values,
        handleChange,
    } = useFormik({
        initialValues: {
            assigneeId: null,
            boardId: null,
            description: '',
            priority: '',
            title: '',
            status: '',
        },
        onSubmit: () => {
        },
    });
    console.log(values);
    return (
        <Modal open={isOpen} onClose={onClose} sx={styles.wrapper}>
            <Box sx={styles.content}>
                <Box
                    component='h1'
                    sx={styles.title}
                >
                    Создание задачи
                </Box>
                <form onSubmit={handleSubmit}>
                    <Box sx={styles.formWrapper}>
                        <Input
                            placeholder='Название'
                            name="title"
                            value={values.title}
                            onChange={handleChange}
                            sx={styles.input}
                        />
                        <Textarea
                            placeholder='Описание'
                            name="description"
                            value={values.description}
                            onChange={handleChange}
                            minRows={6}
                            sx={styles.textarea}
                        />
                        <Select
                            sx={styles.input}
                            name="boardId"
                            value={values.boardId}
                            onChange={handleChange}
                            defaultValue="Проект"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <Select
                            sx={styles.input}
                            name="priority"
                            value={values.priority}
                            onChange={handleChange}
                            defaultValue="Приоритет"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <Select
                            sx={styles.input}
                            name="status"
                            value={values.status}
                            onChange={handleChange}
                            defaultValue="Статус"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <Select
                            sx={styles.input}
                            name="assigneeId"
                            value={values.assigneeId}
                            onChange={handleChange}
                            defaultValue="Исполнитель"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <Button
                            type='submit'
                            sx={styles.submitButton}
                        >
                            Создать
                        </Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};
