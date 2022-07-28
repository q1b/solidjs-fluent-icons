import { splitProps } from "solid-js"
function FormIcon(props) {
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
			<path d="M6.5 10a.5.5 0 100-1 .5.5 0 000 1zm.5 3.5a.5.5 0 11-1 0 .5.5 0 011 0zM3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm2.5-1a.5.5 0 000 1h9a.5.5 0 000-1h-9zm1 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM8 13.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm1-4c0 .28.22.5.5.5h5a.5.5 0 000-1h-5a.5.5 0 00-.5.5zm.5 3.5a.5.5 0 000 1h5a.5.5 0 000-1h-5z" />
		</svg>
	)
}
export default FormIcon
