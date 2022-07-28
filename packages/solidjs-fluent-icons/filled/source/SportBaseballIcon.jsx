import { splitProps } from "solid-js"
function SportBaseballIcon(props) {
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
			<path d="M18 10c0 1.55-.44 3-1.2 4.22-.95-.7-2-1.24-3.14-1.63a.5.5 0 10-.32.95c1.04.35 2 .86 2.88 1.5a7.98 7.98 0 01-12.44 0c.87-.64 1.84-1.15 2.88-1.5a.5.5 0 00-.32-.95c-1.13.39-2.2.94-3.14 1.63a7.96 7.96 0 010-8.43c.94.7 2 1.25 3.14 1.63a.5.5 0 10.32-.95 10.47 10.47 0 01-2.88-1.5 7.98 7.98 0 0112.44 0c-.87.64-1.84 1.15-2.88 1.5a.5.5 0 10.32.95c1.14-.38 2.2-.94 3.14-1.63A7.96 7.96 0 0118 10zm-8 3c.49 0 .96.03 1.43.1a.5.5 0 10.14-1 11.6 11.6 0 00-3.14 0 .5.5 0 00.14 1c.47-.07.94-.1 1.43-.1zM8.57 6.92a.5.5 0 00-.14.99 11.6 11.6 0 003.14 0 .5.5 0 10-.14-1 10.6 10.6 0 01-2.86 0z" />
		</svg>
	)
}
export default SportBaseballIcon
