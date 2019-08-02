export default {
    id: 'app',
    initial: 'main',
    context: {
        userVariables: [],
        pastResults: []
    },
    states: {
        main: {
            on: {
                NEXT: 'second'
            }
        },
        second: {
            on: {
                NEXT: 'main'
            }
        }
    }
};
