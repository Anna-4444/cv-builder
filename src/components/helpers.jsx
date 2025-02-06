export function Button({ className, handleClick, text}) {
    return (
        <button className={className} onClick={handleClick}>{text}</button>
    )
}