import useCounter from "../hooks/Challenge05 - counterhook/useCounter"
export const Counter = () => {
    const {Increment,Reset,Decrement,counter} = useCounter(0)
    return (
        <>
            <h1>Click on me</h1>
            <p> {counter} </p>
            <button onClick ={ () => Decrement () }> Decrement </button>
            <button onClick ={ () => Reset () }> Restart </button>
            <button onClick ={ () => Increment() }> Increment </button>
            
        </>
    )

}
