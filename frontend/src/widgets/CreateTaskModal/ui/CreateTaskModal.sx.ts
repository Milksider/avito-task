import { borderColor, BREAKPOINTS, fontColor, lightBg, secondaryFontColor } from '@/app/styles/variables';

export const wrapper = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& *': {
        color: `${fontColor} !important`,
        borderColor: `${borderColor} !important`,
    }
};

export const content = {
    width: '600px',
    height: "auto",
    backgroundColor: lightBg,
    borderRadius: '16px',
    padding: '16px',

    [`@media (max-width:${BREAKPOINTS.sm}px)`]: {
        width: 'auto',
        height: '660px',
        overflowY: 'auto',
        scrollbarWidth: 'none',
    }
};

export const title = {
    fontSize: '24px',
    lineHeight: '18px',
    fontWeight: '600',
    textAlign: 'center',
    color: fontColor,
}

export const formWrapper = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginTop: '40px',
}

export const input = {
    width: '320px',
}

export const submitButton = {
    width: '320px',
    marginTop: '20px',
    border: '1px solid',
    borderColor: borderColor,

    '&:disabled': {
        color: `${secondaryFontColor} !important`
    }
}

export const textarea = {
    width: '320px',
    borderColor: borderColor,
    backgroundColor: 'transparent',
}
