import React from 'react';
import {
    pdf,
    Document,
    Page,
    Text,
} from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import Resume from './Resume';
import Header from './Header';

const DocumentPdf = () => (
    <Document>
        <Page>
            <Text>

            </Text>
        </Page>
    </Document>
);

const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));

async function getProps() {
    await delay(1_000);
    return ({
        someString: 'You waited 1 second for this',
    });
}

export const LazyDownloadPDFButton = () => (
    <button
        onClick={async () => {
            const props = await getProps();
            const doc = <DocumentPdf />;
            const asPdf = pdf([]); // {} is important, throws without an argument
            asPdf.updateContainer(doc);
            const blob = await asPdf.toBlob();
            saveAs(blob, 'document.pdf');
        }}
    >
        Download PDF
    </button>
);