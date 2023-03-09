// type props = {
//     children: string;
// }

function Button(props: {
    children: string;
}) {
    return (
        <button>{props.children}</button>
    )
}

export default Button