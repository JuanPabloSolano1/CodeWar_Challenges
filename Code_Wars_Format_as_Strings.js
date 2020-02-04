function list(names) {
    let first_names = []
    let last_names = ''
    if (names.length == 0) {
        return ""
    } else if (names.length == 1) {
        return names[0].name
    } else if (names.length == 2) {
        return `${names[names.length -2].name} & ${names[names.length -1].name}`
    } else {
        for (var i = 0; i < names.length - 2; i++) {
            first_names.push(`${names[i].name},`)
        }
        return (first_names.join(" ") + ` ${names[names.length -2].name} & ${names[names.length -1].name}`)
    }
}
