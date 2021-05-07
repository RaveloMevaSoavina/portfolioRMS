/** @jsx jsx */
import react from 'react'
import { jsx, Box, Flex, Image } from 'theme-ui';


const ContactCard = ({ item }) => {
    return (
        <Flex as="a" sx={styles.figure} href={item?.link} target='_blank'>
            <Box as="figcaption">{item?.title}</Box>
        </Flex>
    )
}

export default ContactCard

const styles = {
    figure : {
        cursor : 'pointer',
        width: "100%",
        backgroundColor: '#333',
        color: '#EEE',
        my : '20px',
        py : '10px',
        textDecoration: 'none',
        figcaption :{
            textAlign : "center",
            margin : "auto"
        }

    },


}