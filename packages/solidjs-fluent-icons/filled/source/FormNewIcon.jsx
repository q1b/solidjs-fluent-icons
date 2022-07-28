import { splitProps } from "solid-js"
function FormNewIcon(props) {
	const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"])
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			shape-rendering="geometricPrecision"
			fill="currentColor"
			aria-hidden="true"
			preserveAspectRatio="xMidYMid meet"
			style={
				typeof props?.style === "string"
					? `display:${props?.hidden ? "none" : "block"}` + ";" + props.style
					: { display: props?.hidden ? "none" : "block", ...props?.style }
			}
			ref={props.ref}
			{...others}
		>
			<path d="M7 9.5a.5.5 0 11-1 0 .5.5 0 011 0zM6.5 14a.5.5 0 100-1 .5.5 0 000 1zM3 6a3 3 0 013-3h8a3 3 0 013 3v3.6c-.75-.38-1.6-.6-2.5-.6h-5a.5.5 0 000 1h1.84a5.5 5.5 0 00-1.74 7H6a3 3 0 01-3-3V6zm2.5-1a.5.5 0 000 1h9a.5.5 0 000-1h-9zm1 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM8 13.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm11 1a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" />
		</svg>
	)
}
export default FormNewIcon
