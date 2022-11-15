
export const isNumeric = (num) => {
    return !isNaN(num)
}

export const getValues = (data, values= []) => {
    if(typeof data !== 'object'){
      return [...values, data]
    }
    return Object.values(data).flatMap(v => getValues(v, values))
}

export const getOnlyPathsNavigate = (arr) => {
    return getValues(arr).filter(_ => typeof _ === 'string' &&   _.startsWith("/"));
}

export const getCurrentNavigatePath = (navigation) => {
    const paths = getOnlyPathsNavigate(navigation);

    
    const windowPath = window.location.pathname;
    if(windowPath) {
        return paths.find(_ => windowPath.startsWith(_));
    }
}