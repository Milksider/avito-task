import { borderColor, fontColor, lightBg, secondaryFontColor } from '@/app/styles/variables';

export const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: lightBg,
    borderRadius: '8px',
    padding: '8px',
    border: '1px solid',
    borderColor: borderColor,
    position: 'relative',
}

export const id = {
    position: 'absolute',
    right: '8px',
    top: 0,
    color: secondaryFontColor,
}

export const tasks = {
    position: 'absolute',
    right: '8px',
    bottom: 0,
    color: secondaryFontColor,
}

export const title = {
    fontSize: '24px',
    lineHeight: '28px',
    fontWeight: '600',
    color: fontColor,
}

export const text = {
    fontSize: '18px',
    lineHeight: '22px',
    color: fontColor,
}
