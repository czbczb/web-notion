export function convertWordSizeToPx(template) {
    const convertSize = (size) => {
        return wordToPxMap[size] || size; // 如果没有找到映射关系，返回原值
    };

    for (const key in template) {
        if (template.hasOwnProperty(key)) {
            const element = template[key];
            if (element.hasOwnProperty('fontSize')) {
                element.fontSize = convertSize(element.fontSize);
            }
        }
    }
    return template
}