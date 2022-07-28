import { splitProps } from "solid-js"
function BuildingFactoryIcon(props) {
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
			<path d="M2.94 3.4c.05-.79.7-1.4 1.5-1.4h1.12c.8 0 1.45.61 1.5 1.4l.87 13a1.5 1.5 0 01-1.5 1.6H3.57a1.5 1.5 0 01-1.5-1.6l.87-13zM8.44 18c.34-.46.53-1.04.49-1.67L8.4 8.51l3.76-3.38a.5.5 0 01.84.37v3.38l4.16-3.75a.5.5 0 01.84.37v11c0 .83-.67 1.5-1.5 1.5H8.43zM16 17v-4.2a.8.8 0 00-.8-.8h-3.4a.8.8 0 00-.8.8V17h5z" />
		</svg>
	)
}
export default BuildingFactoryIcon
