export default function (state = "pl", action) {
    switch (action.type) {
        case 'LANGUAGE_CHANGED' :
            return action.payload;
    }

    return state;
}