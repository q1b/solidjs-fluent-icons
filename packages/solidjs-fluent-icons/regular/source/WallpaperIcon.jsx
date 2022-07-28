import { splitProps } from "solid-js"
function WallpaperIcon(props) {
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
			<path d="M3 6a3 3 0 013-3h2.5a.5.5 0 010 1H6a2 2 0 00-2 2v2.5a.5.5 0 01-1 0V6zm8-2.5c0-.28.22-.5.5-.5H14a3 3 0 013 3v2.5a.5.5 0 01-1 0V6a2 2 0 00-2-2h-2.5a.5.5 0 01-.5-.5zM3.5 11c.28 0 .5.22.5.5V14c0 .37.1.72.28 1.02l4.48-4.49c.69-.68 1.8-.68 2.48 0l4.48 4.49A2 2 0 0016 14v-2.5a.5.5 0 011 0V14a3 3 0 01-3 3h-2.5a.5.5 0 010-1H14a2 2 0 001.02-.28l-4.49-4.48a.75.75 0 00-1.06 0l-4.49 4.48A2 2 0 006 16h2.5a.5.5 0 010 1H6a3 3 0 01-3-3v-2.5c0-.28.22-.5.5-.5zm9-4a.5.5 0 100 1 .5.5 0 000-1zm-1.5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
		</svg>
	)
}
export default WallpaperIcon
