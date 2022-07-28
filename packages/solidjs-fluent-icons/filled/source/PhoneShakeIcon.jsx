import { splitProps } from "solid-js"
function PhoneShakeIcon(props) {
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
			<path d="M15.37 2.93a.5.5 0 11.5-.86 4.25 4.25 0 011.63 5.66.5.5 0 01-.88-.47 3.25 3.25 0 00-1.25-4.33zm-1 1.74a.5.5 0 11.5-.87c1.02.59 1.4 1.86.91 2.9a.5.5 0 01-.9-.42c.27-.58.06-1.29-.5-1.61zm-9.74 12.4a.5.5 0 11-.5.86 4.25 4.25 0 01-1.63-5.66.5.5 0 11.88.46 3.25 3.25 0 001.25 4.33zm1-1.74a.5.5 0 11-.5.87 2.25 2.25 0 01-.92-2.9.5.5 0 01.9.42c-.26.58-.05 1.28.52 1.61zm4.54-12.26a1.95 1.95 0 012.4 1.4l2.37 8.97a2.04 2.04 0 01-1.42 2.48l-3.69 1a1.95 1.95 0 01-2.4-1.4L5.08 6.57a2.04 2.04 0 011.42-2.49l3.68-1zm-.49 11.3c.07.27.34.43.6.36l1.79-.48a.51.51 0 00.36-.62.49.49 0 00-.6-.36l-1.78.49a.51.51 0 00-.37.62z" />
		</svg>
	)
}
export default PhoneShakeIcon
