
import { json_to_xml_server } from '../server-side-json-to-xml';

export async function json_to_xml_server_update_state(json : any, setContent : Function) {       
    await json_to_xml_server(json)
    .then((response : any) => {
        setContent(null, response ? response.toString() : ' No value in response')
    }).catch((error : any) => {
        setContent(error.toString(), null)
    })
}