// @ts-nocheck
export function xml_to_json_formatter_client(xmlString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    return format(xmlDoc.documentElement);
  }

  const format = (node) => {
    const obj = {};

    if (node.nodeType === 1) {
      if (node.attributes.length > 0) {
        obj['attributes'] = {};
        for (const attr of node.attributes) {
          obj['attributes'][attr.nodeName] = attr.nodeValue;
        }
      }

      if (node.hasChildNodes()) {
        for (const childNode of node.childNodes) {
          if (childNode.nodeType === 1) {
            const childName = childNode.nodeName;
            const childValue = format(childNode);

            if (obj[childName]) {
              if (!Array.isArray(obj[childName])) {
                obj[childName] = [obj[childName]];
              }
              obj[childName].push(childValue);
            } else {
              obj[childName] = childValue;
            }
          } else if (childNode.nodeType === 3 && childNode.nodeValue.trim() !== '') {
            obj['text'] = childNode.nodeValue.trim();
          }
        }
      }
    }

    return obj;
  };