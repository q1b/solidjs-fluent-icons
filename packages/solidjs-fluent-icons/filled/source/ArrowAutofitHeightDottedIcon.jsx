import { splitProps } from "solid-js"
function ArrowAutofitHeightDottedIcon(props) {
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
			<path d="M15.71 5.23l-1.46-1.51-1.46 1.51a.75.75 0 01-1.08-1.04l1.82-1.88a1 1 0 011.44 0l1.82 1.88a.75.75 0 01-1.08 1.04zm0 9.54l-1.46 1.51-1.46-1.51a.75.75 0 00-1.08 1.04l1.82 1.88a1 1 0 001.44 0l1.82-1.88a.75.75 0 00-1.08-1.04zM14.25 12c.42 0 .75.34.75.75v.5a.75.75 0 11-1.5 0v-.5c0-.41.34-.75.75-.75zm.75-1.75a.75.75 0 11-1.5 0v-.5a.75.75 0 011.5 0v.5zM14.25 8c.42 0 .75-.34.75-.75v-.5a.75.75 0 10-1.5 0v.5c0 .41.34.75.75.75zM5 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h4.25a.75.75 0 000-1.5H5a.5.5 0 01-.5-.5V5c0-.28.22-.5.5-.5h4.25a.75.75 0 000-1.5H5z" />
		</svg>
	)
}
export default ArrowAutofitHeightDottedIcon
