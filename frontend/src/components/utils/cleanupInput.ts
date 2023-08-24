export function cleanupInput(text: string) {
    return text.replace(/[\s\r\n]+/gm, '')
}