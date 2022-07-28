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
			<path d="M3 6a3 3 0 013-3h2.25a.75.75 0 010 1.5H6c-.83 0-1.5.67-1.5 1.5v2.25a.75.75 0 01-1.5 0V6zm8-2.25c0-.41.34-.75.75-.75H14a3 3 0 013 3v2.25a.75.75 0 01-1.5 0V6c0-.83-.67-1.5-1.5-1.5h-2.25a.75.75 0 01-.75-.75zM3.75 11c.41 0 .75.34.75.75V14c0 .13.02.26.05.39l3.68-3.68a2.5 2.5 0 013.54 0l3.68 3.68c.03-.13.05-.26.05-.39v-2.25a.75.75 0 011.5 0V14a3 3 0 01-3 3h-2.25a.75.75 0 010-1.5H14c.13 0 .26-.02.39-.05l-3.68-3.68a1 1 0 00-1.42 0l-3.68 3.68c.13.03.26.05.39.05h2.25a.75.75 0 010 1.5H6a3 3 0 01-3-3v-2.25c0-.41.34-.75.75-.75zM14 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
		</svg>
	)
}
export default WallpaperIcon
