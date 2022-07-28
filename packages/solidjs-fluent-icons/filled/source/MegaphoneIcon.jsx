import { splitProps } from "solid-js"
function MegaphoneIcon(props) {
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
			<path d="M16.11 3.35A1.5 1.5 0 0118 4.8v10.31c0 1.03-1 1.75-1.97 1.43l-4.76-1.59A3.25 3.25 0 015 13.75v-.89l-1.97-.66A1.5 1.5 0 012 10.78V8.27c0-.68.46-1.28 1.11-1.45l13-3.47zM6 13.2v.56a2.25 2.25 0 004.32.88L6 13.2z" />
		</svg>
	)
}
export default MegaphoneIcon
