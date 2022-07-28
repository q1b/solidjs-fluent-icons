import { splitProps } from "solid-js"
function TextBulletListSquareClockIcon(props) {
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
			<path d="M3 5c0-1.1.9-2 2-2h10a2 2 0 012 2v4.6a5.48 5.48 0 00-5.66.4H9.5a.5.5 0 000 1h.76a5.48 5.48 0 00-.66 6H5a2 2 0 01-2-2V5zm3.75 3a.75.75 0 100-1.5.75.75 0 000 1.5zM6 10.25a.75.75 0 101.5 0 .75.75 0 00-1.5 0zM6.75 14a.75.75 0 100-1.5.75.75 0 000 1.5zm6.75-7h-4a.5.5 0 000 1h4a.5.5 0 000-1zm1 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-.5-6.5a.5.5 0 011 0V14h1a.5.5 0 010 1h-1.5a.5.5 0 01-.5-.5v-2z" />
		</svg>
	)
}
export default TextBulletListSquareClockIcon
