import { splitProps, ComponentProps, JSX } from "solid-js"

function RadarIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M14.5 3.38l-.72.72a7 7 0 101.17 10.85.5.5 0 01.7.7A8 8 0 1114.5 3.39zm-2.94 2.94l.75-.75a5 5 0 101.23 7.97.5.5 0 10-.71-.71 4 4 0 11-1.27-6.51zm4.3-2.17c.19.2.19.5 0 .7l-4.9 4.9a1 1 0 11-.7-.72l4.89-4.88c.2-.2.5-.2.7 0zM17 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM16.5 7a.5.5 0 100-1 .5.5 0 000 1zm1.5 4.25a.5.5 0 11-1 0 .5.5 0 011 0zm-.5-2a.5.5 0 100-1 .5.5 0 000 1zm-2.5 2a.5.5 0 11-1 0 .5.5 0 011 0zm-.5-2a.5.5 0 100-1 .5.5 0 000 1z" />
		</svg>
	)
}
export default RadarIcon
