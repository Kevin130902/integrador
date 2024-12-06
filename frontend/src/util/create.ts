
interface ComponentInfo {
    tag: string;
    content: string;
    params: Map<string, string>;
}

export function create(info: ComponentInfo) {
    const name = info.tag;
    let text = `<${name}`;

    for (const [k, v] of info.params) {
        text += " " + k + "=" + v;
    }

    text += `</${name}>`;

    return text;
}