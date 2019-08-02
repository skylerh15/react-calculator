import * as React from 'react';
import { AppMachine } from 'app';

export type InjectedMachineProps = {
    machineContext: any;
};

const withMachine = <P extends InjectedMachineProps>(
    Component: React.ComponentType<P>
): React.FC<Pick<P, Exclude<keyof P, keyof InjectedMachineProps>>> => (
    props: Pick<P, Exclude<keyof P, keyof InjectedMachineProps>>
) => (
    <AppMachine.Consumer>
        {context => {
            if (!context) {
                return null;
            }
            return <Component {...props as P} machineContext={context} />;
        }}
    </AppMachine.Consumer>
);

export default withMachine;
