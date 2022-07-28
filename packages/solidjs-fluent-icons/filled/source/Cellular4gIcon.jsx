import { splitProps } from "solid-js"
function Cellular4gIcon(props) {
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
			<path d="M9.5 3h-.25C8.56 3 8 3.56 8 4.25v1.5a1.25 1.25 0 002.5 0h-1a.5.5 0 110-1H11c.28 0 .5.22.5.5v.5a2.25 2.25 0 11-4.5 0v-1.5C7 3.01 8 2 9.25 2h.25c.03 0 1.12 0 1.65 1.02a.5.5 0 11-.89.46.86.86 0 00-.48-.42C9.63 3.01 9.51 3 9.5 3zM4.75 13c.38 0 .69.28.74.64l.01.11v2.5a.75.75 0 01-1.5.11v-2.61c0-.41.34-.75.75-.75zm3-2c.38 0 .69.28.74.64l.01.11v4.5a.75.75 0 01-1.5.11v-4.61c0-.41.34-.75.75-.75zm3-2c.38 0 .69.28.74.64l.01.11v6.5a.75.75 0 01-1.5.11V9.75c0-.41.34-.75.75-.75zm3-2c.38 0 .69.28.74.64l.01.11v8.5a.75.75 0 01-1.5.11V7.75c0-.41.34-.75.75-.75zm3-2c.37 0 .68.27.74.63l.01.1-.01 10.52a.74.74 0 01-1.48.12l-.01-.1.01-10.52c0-.41.33-.75.74-.75zM4.95 2.7a.7.7 0 00-1.26-.4L1.13 5.9A.7.7 0 001.7 7h2.26v.5a.5.5 0 101 0V7h.54a.5.5 0 000-1h-.54V2.7zm-1 .94V6H2.29l1.68-2.36z" />
		</svg>
	)
}
export default Cellular4gIcon
