import { splitProps } from "solid-js"
function TextBulletListSquareSearchIcon(props) {
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
			<path d="M5 3a2 2 0 00-2 2v4.76A4.5 4.5 0 019.97 13h3.53a.5.5 0 010 1H9.97c-.05.5-.2.98-.4 1.44L11.11 17H15a2 2 0 002-2V5a2 2 0 00-2-2H5zm2.5 4.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2-.25h4a.5.5 0 010 1h-4a.5.5 0 010-1zM9 10.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm-6.62 1.4a3.5 3.5 0 005.22 4.4l2.54 2.56a.5.5 0 00.71-.71L8.3 15.6a3.5 3.5 0 10-5.92-3.7zm5.2.21a2.5 2.5 0 11-4.16 2.78 2.5 2.5 0 014.16-2.78z" />
		</svg>
	)
}
export default TextBulletListSquareSearchIcon
