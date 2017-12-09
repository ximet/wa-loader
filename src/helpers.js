const getOptions = (loaderContext) => {
    const { query } = loaderContext;
    if (!query || typeof query !== 'object' || (typeof query === 'string' && query !== '')) {
        // Not object-like queries are not supported.
        return null;
    }

    return query;
};

export default getOptions;
