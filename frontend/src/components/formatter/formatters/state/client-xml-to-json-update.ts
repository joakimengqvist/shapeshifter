import { xml_to_json_formatter_client } from '../client-side-xml-to-json'

export function xml_to_json_client(xmlString : string, setContent : Function) {
    try {
        const json = xml_to_json_formatter_client(`<xml>${xmlString}</xml>`);
        setContent(null, JSON.stringify(json))

    } catch (error : any) {
        setContent(error.message, null)
    }

    return;
  }