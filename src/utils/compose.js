const compose = (...funcs) => (comp) => {
    return funcs.reduceRight((wrapper, func) => func(wrapper), comp);
}

export default compose;