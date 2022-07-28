import { splitProps } from "solid-js"
function ArrowAutofitWidthDottedIcon(props) {
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
			<path d="M15.2 16.14l1.7-1.64-1.7-1.64a.5.5 0 01.69-.72l1.88 1.82c.3.3.3.79 0 1.08l-1.88 1.82a.5.5 0 11-.7-.72zM17 5a2 2 0 00-2-2H5a2 2 0 00-2 2v4.5a.5.5 0 001 0V5a1 1 0 011-1h10a1 1 0 011 1v4.5a.5.5 0 101 0V5zm-2 9.5a.5.5 0 01-.5.5H13a.5.5 0 110-1h1.5c.28 0 .5.23.5.5zM7 15a.5.5 0 100-1H5.5a.5.5 0 000 1H7zm4-.5a.5.5 0 01-.5.5h-1a.5.5 0 110-1h1c.28 0 .5.23.5.5zm-6.19 1.64l-1.7-1.64 1.7-1.64a.5.5 0 00-.7-.72l-1.88 1.82c-.3.3-.3.79 0 1.08l1.89 1.82a.5.5 0 10.69-.72z" />
		</svg>
	)
}
export default ArrowAutofitWidthDottedIcon
