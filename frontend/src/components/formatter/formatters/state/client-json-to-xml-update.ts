import { json_to_xml_formatter_client } from '../client-side-json-to-xml';

export function json_to_xml_client(stringJson : string, setContent : Function) {
    try {
        const json = JSON.parse(stringJson);
        const xml = json_to_xml_formatter_client(json);
        setContent(null, xml)
    } catch (error : any) {
        setContent(error.message, null)
    }

    return;
}