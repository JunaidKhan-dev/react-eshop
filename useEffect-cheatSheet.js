/* useEffect Cheat Sheet

A quick recap of what we have learned about useEffect:

ComponentDidMount

    //Class
    componentDidMount() {
        console.log('I just mounted!');
    }

    //Hooks
    useEffect(() => {
        console.log('I just mounted!');
    }, [])

ComponentWillUnmount

    //Class
    componentWillUnmount() {
        console.log('I am unmounting');
    }

    //Hooks
    useEffect(() => {
        return () => console.log('I am unmounting');
    }, [])

ComponentWillReceiveProps

    //Class
    componentWillReceiveProps(nextProps) {
        if (nextProps.count !== this.props.count) {
            console.log('count changed', nextProps.count);
        }
    }

    //Hooks
    useEffect(() => {
        console.log('count changed', props.count);
    }, [props.count])  */
