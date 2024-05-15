import { useState, useCallback } from 'react'

export function useArray(initalValue) {
    const [array, setArray] = useState(initalValue)

    const push = useCallback(value => {
        setArray(currentArray => {
            return [...currentArray, value]
        })
    }, [])

    const replace = useCallback((index, value) => {
        setArray(currentArray => {
            return [
                ...currentArray.slice(0, index), value,
                ...currentArray.slice(index + 1)
            ]
        })
    }, [])

    const filter = useCallback(callback => {
        setArray(currentArray => {
            return currentArray.filter(callback)
        })
    }, [])

    const remove = useCallback(index => {
        setArray(currentArray => {
            return [
                ...currentArray.slice(0, index),
                ...currentArray.slice(index + 1)
            ]
        })
    }, [])

    const clear = useCallback(() => {
        setArray([])
    }, [])

    const reset = useCallback(() => {
        setArray(initalValue)
    }, [array])

    return { array, set: setArray, push, replace, filter, remove, clear, reset }
}