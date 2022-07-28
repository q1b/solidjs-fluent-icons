import { splitProps } from "solid-js"
function TimerOffIcon(props) {
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
			<path d="M4.96 5.67L2.15 2.85a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7l-2.32-2.31A6.98 6.98 0 012.5 11c0-2.13.96-4.05 2.46-5.33zM10 10.71l-1-1v1.79a.5.5 0 001 0v-.8zm0-4.21v1.38l5.92 5.92A7 7 0 006.7 4.58L9 6.88V6.5a.5.5 0 011 0zm-3-4c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm7.45 1.43c.2-.2.51-.2.7 0l1.42 1.41a.5.5 0 11-.7.71l-1.42-1.41a.5.5 0 010-.71z" />
		</svg>
	)
}
export default TimerOffIcon
