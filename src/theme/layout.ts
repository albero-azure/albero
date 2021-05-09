const SCALE_FACTOR = 1
const SIDE_BAR_WIDTH = 90
const CONTENT_PADDING = 70

const px = (px: number) => `${px * SCALE_FACTOR}px`

export const LAYOUT_THEME = {
    sideBar: {
        width: px(SIDE_BAR_WIDTH),
        buttonHeight: px(70),
        backgroundColor: '#293F54'
    },
    topBar: {
        height: px(70),
        paddingLeft: px(SIDE_BAR_WIDTH + CONTENT_PADDING),
        // paddingRight: px(50),
        paddingRight: px(CONTENT_PADDING),
        backgroundColor: '#EDEDED',
        selectColor: '#647994',
    },
    content: {
        paddingTop: px(24),
        padding: px(CONTENT_PADDING),
    }
}
