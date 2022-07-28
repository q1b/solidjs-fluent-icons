import { splitProps } from "solid-js"
function WindowBulletListIcon(props) {
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
			<path d="M5.58 9.11a.97.97 0 00-.08.39c0 .14.03.27.08.4.04.12.12.22.2.31.1.09.21.16.33.21.12.05.26.08.39.08s.27-.02.4-.08c.11-.05.22-.13.31-.22a1 1 0 000-1.41c-.1-.09-.2-.16-.33-.21a.95.95 0 00-.38-.08.86.86 0 00-.4.08c-.11.05-.22.13-.31.22s-.16.2-.21.31zm0 4a.97.97 0 00-.08.39c0 .14.03.27.08.4.04.12.12.22.2.31.1.09.21.16.33.21.12.05.26.08.39.08s.27-.02.4-.08c.11-.05.22-.13.31-.22a1.01 1.01 0 00.29-.7 1 1 0 00-.3-.71c-.1-.09-.2-.16-.32-.21a.94.94 0 00-.38-.08.84.84 0 00-.4.08 1.01 1.01 0 00-.53.53zM9.55 10a.56.56 0 01-.39-.15.46.46 0 010-.7c.1-.1.25-.15.39-.15h4.4a.56.56 0 01.5.31.46.46 0 01-.11.54c-.1.1-.25.15-.4.15h-4.4zm-.39 3.85c.1.1.25.15.39.15h4.4a.56.56 0 00.5-.3.46.46 0 00-.11-.55.56.56 0 00-.4-.15h-4.4a.56.56 0 00-.5.3.46.46 0 00.12.55zM3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm3-2a2 2 0 00-2 2h12a2 2 0 00-2-2H6zm10 3H4v7c0 1.1.9 2 2 2h8a2 2 0 002-2V7z" />
		</svg>
	)
}
export default WindowBulletListIcon
