function useFetch() {
    const request = async (url, options = {}) => {
        try {
            const res = await fetch(url, options)
            const data = await res.json()
            return { data, ok: res.ok }
        } catch (error) {
            return { error }
        }
    }

    return { request }
}