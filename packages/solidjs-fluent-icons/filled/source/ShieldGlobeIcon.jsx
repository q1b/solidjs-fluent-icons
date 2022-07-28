import { splitProps } from "solid-js"
function ShieldGlobeIcon(props) {
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
			<path d="M10.28 2.08a.5.5 0 00-.56 0 15.05 15.05 0 01-6.3 2.43A.5.5 0 003 5v4.5c0 3.9 2.3 6.73 6.82 8.47a.5.5 0 00.36 0C14.69 16.23 17 13.39 17 9.5V5a.5.5 0 00-.43-.5 15.05 15.05 0 01-6.3-2.42zm2.68 8.42a3 3 0 01-1.43 2.08c.24-.57.4-1.3.45-2.08h.98zm0-1a3 3 0 00-1.43-2.08c.24.57.4 1.3.45 2.08h.98zm-1.98 0a5.13 5.13 0 00-.46-1.88 1.72 1.72 0 00-.39-.54.43.43 0 00-.12-.08.03.03 0 00-.02 0h-.01a.43.43 0 00-.11.08c-.11.09-.25.26-.39.54-.23.46-.4 1.11-.46 1.88h1.96zm-1.96 1c.05.77.23 1.42.46 1.88.14.28.28.45.39.54a.42.42 0 00.12.08.03.03 0 00.02 0h.01c.02-.01.06-.03.11-.08.11-.09.25-.26.39-.54.23-.46.4-1.11.46-1.88H9.02zm-1 0c.04.79.2 1.5.45 2.08a3 3 0 01-1.43-2.08h.98zm0-1c.04-.79.2-1.5.45-2.08A3 3 0 007.04 9.5h.98zM14 10a4 4 0 11-8 0 4 4 0 018 0z" />
		</svg>
	)
}
export default ShieldGlobeIcon
