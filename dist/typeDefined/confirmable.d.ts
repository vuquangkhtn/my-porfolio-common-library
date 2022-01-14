type confirmable = (Component: React.Component) => ({ 
    resolve,
    reject,
    dispose,
}: { 
    resolve: (value: any) => void,
    reject: (value: any) => void,
    dispose: () => void,
}) => React.Component;

export default confirmable;