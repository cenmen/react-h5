export function module() {
    let count = 0

    function add(num = 1) {
        count = count + num
        console.log('count: ', count)
        return this
    }

    return {
        add
    }
}