import { splitProps } from "solid-js"
function Wifi3Icon(props) {
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
			<path d="M12.89 11.85c.35.36.64.8.85 1.26a.5.5 0 11-.92.4 3.03 3.03 0 00-5.56-.01.5.5 0 01-.92-.4 4.03 4.03 0 016.54-1.24zm-1.93 1.94a1.3 1.3 0 11-1.83 1.83 1.3 1.3 0 011.83-1.83z" />
		</svg>
	)
}
export default Wifi3Icon
