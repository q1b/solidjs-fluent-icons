import { splitProps } from "solid-js"
function ReadingListIcon(props) {
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
			<path d="M3.5 5.5a1 1 0 011.84-.56.75.75 0 001.24-.83A2.5 2.5 0 104.6 8h10.67a.75.75 0 000-1.5H4.5a1 1 0 01-1-1zM9.75 4a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5zm-4 5a.75.75 0 000 1.5h11.5a.75.75 0 100-1.5H5.75zM2 12.25c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zM5.75 14a.75.75 0 000 1.5h11.5a.75.75 0 100-1.5H5.75z" />
		</svg>
	)
}
export default ReadingListIcon
