type GreetProp = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProp) => {
    const { messageCount = 0 } = props;
    return (
        <div>
            <h2>GREET {props.name}~~~</h2>
            <h3>{messageCount}</h3>
            <h2>{props.isLoggedIn ? 'true': 'false'}</h2>
        </div>
    )
}