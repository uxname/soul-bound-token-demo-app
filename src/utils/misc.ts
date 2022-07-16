export function redirect(url: string): void {
    if (typeof window !== 'undefined') {
        window.location.href = url;
    }
}

export function startAndEnd(str: string, gap: number) {
    const lngth = 35;
    const gapMin = 0;
    if (str && str.length > lngth) {
        return `${str.substr(gapMin, gap)}...${str.substr(str.length - gap, str.length)}`;
    }
    return str;
}


