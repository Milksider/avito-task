import { fontColor, lightBg } from '@/app/styles/variables';

export const page = {
    width: '100%',
    overflowX: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
}

export const wrapper = {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 384px)',
    gap: '16px',
    flex: '1',
    minWidth: 'max-content',
}


export const column = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    height: '100%',
    overflowX: 'auto',
    scrollbarWidth: 'none'
}

export const board = {
    width: '100%',
    backgroundColor: lightBg,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    alignItems: 'center',
    maxHeight: 'calc(100vh - 120px)',
    color: fontColor,
}

export const title = {
    color: fontColor,
    marginBottom: '20px',
}
