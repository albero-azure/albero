export const findNext = <T = string>(element: T, collection: T[]): T | undefined => {
    // if (!hasNext(element, collection)) return undefined
    const currentIndex = collection.indexOf(element)
    return collection[currentIndex + 1]
}

export const hasNext = <T = string>(element: T, collection: T[]): boolean =>
    collection.indexOf(element) < (collection.length - 1)


export const findPrev = <T = string>(element: T, collection: T[]): T | undefined => {
    // if (!hasPrev(element, collection)) return undefined
    const currentIndex = collection.indexOf(element)
    return collection[currentIndex - 1]
}

export const hasPrev = <T = string>(element: T, collection: T[]): boolean =>
    collection.indexOf(element) > 0


export const isIntersect = <T>(c1: T[], c2: T[]) => {
    for (const c of c1) if (c2.indexOf(c) >= 0) return true
    return false
}
