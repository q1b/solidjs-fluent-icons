import { splitProps } from "solid-js"
function ArrowJoinIcon(props) {
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
			<path d="M4.5 2c.28 0 .5.22.5.5C5 6.12 7.88 9 11.5 9h.8l-1.15-1.15a.5.5 0 01.7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7-.7L12.29 10h-.79A6.46 6.46 0 005 16.5a.5.5 0 01-1 0 7.45 7.45 0 014.78-7A7.45 7.45 0 014 2.5c0-.28.22-.5.5-.5zm5.53 9.2A5.43 5.43 0 007 13.3v.7c0 1.1.9 2 2 2h6a2 2 0 002-2V5a2 2 0 00-2-2H9a2 2 0 00-2 2v.7a5.43 5.43 0 003.03 2.1 1.5 1.5 0 012.53-1.36l2 2a1.5 1.5 0 010 2.12l-2 2a1.5 1.5 0 01-2.53-1.37z" />
		</svg>
	)
}
export default ArrowJoinIcon
