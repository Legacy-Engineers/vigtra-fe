

export function getGqlCursorInfo(cursor?: string): number {
    return cursor ? parseInt(atob(cursor).split(':')[1]) : 0;
}