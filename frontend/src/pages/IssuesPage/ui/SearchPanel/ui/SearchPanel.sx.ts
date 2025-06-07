import { borderColor, BREAKPOINTS, fontColor, lightBg } from '@/app/styles/variables';

export const input = {
    height: '56px',
    width: '260px',
    color: fontColor,
    borderBottom: '1px solid',
    borderColor: borderColor,

    [`@media (max-width:${BREAKPOINTS.sm}px)`]: {
        width: '100%',
    }
}

export const filtersButton = {
    height: '56px',
}

export const select = {
    width: '280px',
}

export const selectWrapper = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    fontSize: '16px',
    color: fontColor,
    '& *': {
        color: `${fontColor} !important`,
        borderColor: `${borderColor} !important`,
    }
}

export const wrapper = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '40px',

    [`@media (max-width:${BREAKPOINTS.sm}px)`]: {
        flexDirection: 'column',
        gap: '8px',
    }
}

export const menu = {
    '& .MuiMenu-list': {
        backgroundColor: lightBg,
        border: '1px solid',
        borderColor: borderColor,
    }
}

export const triggerButton = {
    height: '56px',
    border: '1px solid',
    borderColor: borderColor,
    color: fontColor,

    [`@media (max-width:${BREAKPOINTS.sm}px)`]: {
        width: '100%',
    }
}
