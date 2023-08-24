

'use client';
import FormatterInput from "./formatterInput";
import { FILEFORMAT } from "@/enums/fileFormats";
import { useState } from "react";
import { xml_to_json_client } from './formatters/state/client-xml-to-json-update'
import { json_to_xml_client } from './formatters/state/client-json-to-xml-update';
import { json_to_xml_server_update_state } from './formatters/state/server-json-to-xml-update';
import { cleanupInput } from '../utils/cleanupInput';
import { FormattedProps } from './types/formatted';
import { FormatterProps } from './types/formatter';
 
export default function Formatter(props : FormatterProps) {
    const {fromFileType, toFileType} = props;

    const [dataInput, setDataInput] = useState<string>('');
    const [formatted, setFormatted] = useState<FormattedProps>({
        errorMessage: null,
        content: null
    });

    function onInputChange(event : any) { setDataInput(event?.target.value) }

    function noContent() { setFormatted({ errorMessage: null, content: 'No content' })}

    function setContent(errorMessage : string | null, content : string | null) {
        setFormatted({
            errorMessage: errorMessage,
            content: content
        });
    }

    function onClickClientSide(event : any) {
        event.preventDefault();
        if (!dataInput) {
            noContent();
            return;
        }

        if (fromFileType === FILEFORMAT.JSON && toFileType === FILEFORMAT.XML) {
            json_to_xml_client(cleanupInput(dataInput), setContent);
        }

        if (fromFileType === FILEFORMAT.XML && toFileType === FILEFORMAT.JSON) {
            xml_to_json_client(cleanupInput(dataInput), setContent);
        }
    }
    
    function onClickServerSide (event : any) {
        event.preventDefault();
        if (!dataInput) {
            noContent()
            return;
        }
        if (fromFileType === FILEFORMAT.JSON && toFileType === FILEFORMAT.XML) {
            json_to_xml_server_update_state(cleanupInput(dataInput), setContent)
        }
    }

    return (
        <FormatterInput        
            formatted={formatted}
            onInputChange={onInputChange}
            dataInput={dataInput}
            fromFileType={fromFileType}
            toFileType={toFileType}
            onClickServerSide={onClickServerSide}
            onClickClientSide={onClickClientSide}
        />
    )
}