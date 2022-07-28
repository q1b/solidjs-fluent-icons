import { splitProps } from "solid-js"
function TextboxMoreIcon(props) {
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
			<path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h1.25A2.25 2.25 0 0111 15.97a2.25 2.25 0 014 0 2.25 2.25 0 011.99-1.22l.01-.25v-9zM6 6.75c0-.41.32-.75.7-.75h6.6c.38 0 .7.34.7.75s-.32.75-.7.75H6.7c-.38 0-.7-.34-.7-.75zm0 3c0-.41.32-.75.7-.75h3.6c.38 0 .7.34.7.75s-.32.75-.7.75H6.7c-.38 0-.7-.34-.7-.75zM6.7 12h6.6c.38 0 .7.34.7.75s-.32.75-.7.75H6.7c-.38 0-.7-.34-.7-.75s.32-.75.7-.75zm3.55 5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM13 18.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm4 0a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" />
		</svg>
	)
}
export default TextboxMoreIcon
