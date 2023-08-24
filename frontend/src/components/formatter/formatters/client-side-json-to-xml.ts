// @ts-nocheck

// needs indent improvement, good enough for now.

export function json_to_xml_formatter_client(jsonObj) {
    let xmlString = '';
    let level = 0;
    const spacing = '      ';
    let formattedProp = '';

    const format = (obj, indent = false) => {
      for (const prop in obj) {
        xmlString += '\n';
        if (obj.hasOwnProperty(prop)) {
          formattedProp = prop;
          if (typeof obj[prop] === 'object') {
            if (indent) {
              level += 1;
            }
            let formattedProp = prop;
            if (Number(prop) || prop === '0') {
              formattedProp = `index${prop}`
            }
            xmlString += `${spacing.repeat(level)}<${formattedProp}>`;
            level += 1;
            format(obj[prop], true);
            xmlString += `\n${spacing.repeat(level)}</${formattedProp}>`;
          } else {
            let formattedProp = prop;
            if (Number(prop) || prop === '0') {
              formattedProp = `index${prop}`
            }
            xmlString += `${spacing.repeat(level)}<${formattedProp}>${obj[prop]}</${formattedProp}>`;
            if (level > 0) {
              level -= 1;
            }
          }
        }
      }
    };
  
    xmlString += '<?xml version="1.0" encoding="UTF-8"?>';
    format(jsonObj);
  
    return xmlString;
  }