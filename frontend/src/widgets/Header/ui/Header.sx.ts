import { borderColor, BREAKPOINTS, darkBg, fontColor } from '@/app/styles/variables';

export const header = {
    backgroundColor: darkBg,
    padding: '20px',
    borderBottom: '1px solid gray',
    height: '80px',
    top: 0,
    position: 'sticky',
    zIndex: '100',
};

export const nav = {
    display: 'flex',
    justifyContent: 'space-between',
};

export const navList = {
    display: 'flex',
    gap: '8px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
};

export const navItem = () => {
    return {
        display: 'flex',
        alignItems: 'center',
        borderColor: borderColor,

        '& a': {
            color: fontColor,
            fontWeight: 500,
        },

        '& a:hover': {
            borderBottom: '1px solid',
            borderColor: fontColor,
        },

        '& + &': {
            borderLeft: '1px solid #fff',
            paddingLeft: '8px',
        },
    }
};

export const createButton = {
    border: '1px solid',
    borderColor: borderColor,
    color: fontColor,
};

export const btnText = {
    display: 'flex',
    [`@media (max-width:${BREAKPOINTS.sm}px)`]: {
        display: 'none'
    }
}

export const btnIcon = {
    display: 'none',
    [`@media (max-width:${BREAKPOINTS.sm}px)`]: {
        display: 'flex',
    }
}
