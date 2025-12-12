export const getInitials = (name: string): string => {
    if (!name) return "";

    const parts = name.trim().split(/\s+/);

    if (parts.length === 1) {
        return parts[0].charAt(0).toUpperCase();
    }

    const first = parts[0].charAt(0);
    const second = parts[1].charAt(0);

    return `${first}${second}`.toUpperCase();
};
