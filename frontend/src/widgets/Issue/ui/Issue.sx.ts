export const wrapper = {
    width: '368px',
    height: '120px',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '8px',
    border: '1px solid #3a383f',
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
}

export const priorityWrapper = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '14px',
}

export const priority = (priority: string) => {
    const styles = {
        width: 'fit-content',
        height: '20px',
        backgroundColor: 'transparent',
        fontSize: '12px',
        padding: '2px 6px',
        borderRadius: '8px',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
    fontWeight: '600'
}
