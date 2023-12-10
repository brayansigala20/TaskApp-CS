import { Document, Page, View, Text } from '@react-pdf/renderer'
// import {useEffect,useState} from 'react'

const ReportPdf = () => {
    return (
        <Document>
            <Page size="A4">
                <View>
                 <Text>hola</Text>
                </View>
            </Page>
        </Document>
    )
}

export default ReportPdf