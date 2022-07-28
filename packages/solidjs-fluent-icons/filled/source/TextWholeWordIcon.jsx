import { splitProps } from "solid-js"
function TextWholeWordIcon(props) {
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
			<path d="M19 15.75v.5A1.75 1.75 0 0117.25 18H2.75A1.75 1.75 0 011 16.25v-.5a.75.75 0 111.5 0v.5a.25.25 0 00.25.25h14.5a.25.25 0 00.25-.25v-.5a.75.75 0 111.5 0zM3.83 10.38a4.17 4.17 0 012.53-.61c.37.02.74.07 1.1.16a.97.97 0 00-.55-.76c-.4-.18-.83-.26-1.26-.23-.37 0-.73.08-1.07.23a.75.75 0 11-.67-1.34c.53-.25 1.1-.38 1.69-.4.69-.03 1.37.1 1.99.4A2.69 2.69 0 019 10.46v4.04a.75.75 0 11-1.5.06 3.73 3.73 0 01-2.95.56 2.61 2.61 0 01-.72-4.74zm1.11 3.3a2.92 2.92 0 002.56-1V11.5a4.5 4.5 0 00-1.22-.23 2.68 2.68 0 00-1.62.36 1.11 1.11 0 00.28 2.05zm6.06.82V4a.75.75 0 111.5 0v4.66A2.7 2.7 0 0114.25 8a3.28 3.28 0 013 3.5 3.28 3.28 0 01-3 3.5c-.64 0-1.26-.24-1.75-.66v.16a.75.75 0 11-1.5 0zm1.75-3a1.8 1.8 0 001.5 2 1.8 1.8 0 001.5-2 1.8 1.8 0 00-1.5-2 1.8 1.8 0 00-1.5 2z" />
		</svg>
	)
}
export default TextWholeWordIcon
