import { splitProps } from "solid-js"
function FolderPeopleIcon(props) {
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
			<path d="M10.56 4.5h4.94a2.5 2.5 0 012.48 2.17l.01.17L18 7v4.38a2.24 2.24 0 00-2.76.2 2.75 2.75 0 10-4.54 3A2.31 2.31 0 009 17H4.5A2.5 2.5 0 012 14.66V7.5H7.22c.3-.04.6-.16.83-.36l.1-.1 2.41-2.54zM7.16 3c.28 0 .54.07.77.21l.14.09 1.31.99-1.95 2.05-.06.06a.5.5 0 01-.22.1H2v-1A2.5 2.5 0 014.34 3h2.83zm7.72 11.5zm-2.13 0a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM13 19c2.14 0 3-1.1 3-2.19a1.3 1.3 0 00-1.29-1.31H11.3A1.3 1.3 0 0010 16.81c0 1.1.86 2.19 3 2.19zm3.5-.5h-.02c.35-.51.52-1.1.52-1.69 0-.48-.15-.93-.4-1.31h1.33c.6 0 1.07.5 1.07 1.13 0 .93-.71 1.87-2.5 1.87zm.25-4a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" />
		</svg>
	)
}
export default FolderPeopleIcon
