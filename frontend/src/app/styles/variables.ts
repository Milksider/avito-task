export const darkBg = '#18171d';

export const lightBg = '#28272d';

export const borderColor = '#3a383f';

export const fontColor = '#ececef';

export const secondaryFontColor = '#89888d';

export const BREAKPOINTS = {
    xs: 480,
    sm: 600,
    md: 768,
    lg: 900,
    xl: 1200,
    '2xl': 1400
};

export const loading = {
    animation: 'spin 1s linear infinite',
    color: fontColor,
    alignSelf: 'center',
    '@keyframes spin': {
        '0%': {
            transform: 'rotate(0deg)',
        },
        '100%': {
            transform: 'rotate(360deg)',
        },
    },
};
