export async function json_to_xml_server(json : any) {
    const response = await fetch('http://localhost:3000/data-formatter', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            toFormat: 'xml',
            fromFormat: 'json',
            dataPayload: JSON.parse(json)
        })
    })

    const responseJson = await response.json();
    return responseJson;
}