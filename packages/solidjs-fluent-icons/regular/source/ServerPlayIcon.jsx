import { splitProps } from "solid-js"
function ServerPlayIcon(props) {
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
			<path d="M14 9.02V4.5c0-.83-.67-1.5-1.5-1.5h-5C6.67 3 6 3.67 6 4.5v11c0 .83.67 1.5 1.5 1.5h2.1c.18.36.4.7.66 1H7.5A2.5 2.5 0 015 15.5v-11A2.5 2.5 0 017.5 2h5A2.5 2.5 0 0115 4.5v4.52a5.57 5.57 0 00-1 0zM7.5 5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM7 12.5c0-.28.22-.5.5-.5h2.1c-.16.32-.3.65-.4 1H7.5a.5.5 0 01-.5-.5zm2 2c0-.17 0-.34.02-.5H7.5a.5.5 0 000 1h1.52a5.57 5.57 0 01-.02-.5zm10 0a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.29-.44l-2.97-1.65a.5.5 0 00-.74.44v3.3c0 .38.41.62.74.44l2.97-1.65a.5.5 0 000-.88z" />
		</svg>
	)
}
export default ServerPlayIcon
