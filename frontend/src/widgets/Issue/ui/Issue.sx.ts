import { borderColor, darkBg, fontColor, secondaryFontColor } from '@/app/styles/variables';

export const wrapper = {
    width: '368px',
    height: '120px',
    minHeight: '120px',
    backgroundColor: darkBg,
    borderRadius: '8px',
    padding: '8px',
    border: '1px solid',
    borderColor: borderColor,
    cursor: 'pointer',
};

export const content = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    height: '100%',
};

export const head = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
};

export const userAvatar = {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
};

export const details = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: '0',
};

export const detailsItem = {
    fontSize: '14px',
    color: secondaryFontColor,
}

export const priorityWrapper = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '14px',
    color: fontColor,
}

export const priority = (priority: string) => {
    const styles = {
        width: 'fit-content',
        height: '20px',
        backgroundColor: 'transparent',
        fontSize: '12px',
        padding: '2px 6px',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: fontColor,
    };

    switch (priority) {
    case 'Low':
        styles.backgroundColor = 'green';
        break;
    case 'High':
        styles.backgroundColor = 'red';
        break;
    case 'Medium':
        styles.backgroundColor = 'orange';
        break;
    }

    return styles;
};

export const title = {
    fontSize: '14px',
    fontWeight: '600',
    color: fontColor,
}
