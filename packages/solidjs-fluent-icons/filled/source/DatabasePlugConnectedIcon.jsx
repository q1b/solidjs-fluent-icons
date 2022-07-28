import { splitProps } from "solid-js"
function DatabasePlugConnectedIcon(props) {
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
			<path d="M10 8c3.31 0 6-1.34 6-3s-2.69-3-6-3-6 1.34-6 3 2.69 3 6 3zm4.69.02c.47-.24.93-.54 1.31-.9v2.99a2.97 2.97 0 00-1.87.86l-.6.6a1.98 1.98 0 00-.58 1.52 1.95 1.95 0 00-1.52.58l-.6.6a2.99 2.99 0 00-.77 2.9l-.76.75-.05.06C6.3 17.79 4 16.53 4 15V7.12c.38.36.84.66 1.31.9C6.56 8.64 8.22 9 10 9c1.78 0 3.44-.36 4.69-.98zm4.5 2.83a.5.5 0 10-.7-.7l-1.19 1.18a.64.64 0 00-.03.05 2 2 0 00-2.44.3l-.6.6a.98.98 0 000 1.4l1.45 1.43a.98.98 0 001.38 0l.6-.6a2 2 0 00.3-2.44.36.36 0 00.06-.03l1.18-1.19zm-5.66 3.53a.98.98 0 00-1.39 0l-.6.6a2 2 0 00-.3 2.43.42.42 0 00-.05.04L10 18.63a.5.5 0 00.7.7l1.19-1.18a.5.5 0 00.03-.05 2 2 0 002.44-.3l.6-.6a.98.98 0 000-1.39l-1.44-1.44z" />
		</svg>
	)
}
export default DatabasePlugConnectedIcon
