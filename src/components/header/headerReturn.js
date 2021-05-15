/** @jsx jsx */
import { jsx , Flex} from 'theme-ui'
import React from 'react'
import ReturnIcon from 'assets/images/arrow.svg'

function headerReturn() {
    return (
        <Flex as="nav" sx={styles.header}>
            <img alt="return" src={ReturnIcon} sx={styles.icon}/>
            <span sx={styles.text}>RETOUR</span>
        </Flex>
    )
}

export default headerReturn

const styles = {
    header: {
        backgroundColor : '#DDD',
        width : "100vw",
        height : "55px",
    },
    icon : {
        width : "30px",
        margin : "0 0 0 10px",
        cursor: 'pointer',
        // backgroundColor: '#FFF',
        // borderRadius :'100%',
        // padding : "25px"

    },
    text : {
        margin : "15px 0 0 10px",
        cursor: 'pointer',
    }
}