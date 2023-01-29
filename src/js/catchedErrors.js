export default function catchedErrors(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
}