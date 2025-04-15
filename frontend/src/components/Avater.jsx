import React from 'react'

function Avater({ image, size, storyCircle, gap, isStory, isStorySeen }) {
    let displayInlineBlock = "";
    let borderRadius = "";
    let backgroundImageODp = "";
    let outline = gap + ' solid #fff';

    if (isStory) {
        displayInlineBlock = 'inline-block'
        borderRadius = '50%'

        if (isStorySeen) {
            backgroundImageODp = 'radial-gradient(rgba(0, 0, 0, 0.5))'
        } else {
            backgroundImageODp = 'linear-gradient(to top right, orange, deeppink)'
        }
    } else {
        displayInlineBlock = ""
        borderRadius = ""
        backgroundImageODp = ""
        outline = ""
    }


    return (
        <div
            style={
                {
                    display: displayInlineBlock,
                    borderRadius: borderRadius,
                    backgroundImage: backgroundImageODp,
                }
            }
        >
            <img
                src={image}
                alt=""
                style={
                    {
                        display: 'block',
                        outlineOffset: '-1px',
                        borderRadius: '50%',
                        height: size,
                        width: size,
                        margin: storyCircle,
                        outline: outline,
                    }
                }
            />
        </div>
    )
}

export default Avater