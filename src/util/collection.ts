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
