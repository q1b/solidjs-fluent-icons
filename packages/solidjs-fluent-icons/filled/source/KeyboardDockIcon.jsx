import { splitProps } from "solid-js"
function KeyboardDockIcon(props) {
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
			<path d="M2 3.5C2 2.67 2.67 2 3.5 2h13c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-6v3.3l1.15-1.15a.5.5 0 01.7.7l-2 2a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7l1.15 1.14V13h-6A1.5 1.5 0 012 11.5v-8zM5.5 6a.75.75 0 100-1.5.75.75 0 000 1.5zm6 0a.75.75 0 100-1.5.75.75 0 000 1.5zm-6 4a.5.5 0 000 1h9a.5.5 0 000-1h-9zm8.25-4.75a.75.75 0 101.5 0 .75.75 0 00-1.5 0zm-7.5 2.5a.75.75 0 101.5 0 .75.75 0 00-1.5 0zM10 8.5A.75.75 0 1010 7a.75.75 0 000 1.5zm2.25-.75a.75.75 0 101.5 0 .75.75 0 00-1.5 0zM8.5 6a.75.75 0 100-1.5.75.75 0 000 1.5z" />
		</svg>
	)
}
export default KeyboardDockIcon
