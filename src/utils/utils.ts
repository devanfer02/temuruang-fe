export function getFirstNWord(n: number, str: string): string {
    const words = str.split(' ')
    const firstNword = words.slice(0, n)
    return firstNword.join(' ');
}

export function formatDate(dateStr: string): string {
    const date = new Date(dateStr);

    const formattedDate = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return formattedDate;
}