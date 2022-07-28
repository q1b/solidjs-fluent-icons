import { splitProps } from "solid-js";
function StreamInputIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.5 9.25a5.75 5.75 0 015.75-5.75h.5a.75.75 0 000-1.5h-.5C9.25 2 6 5.25 6 9.25v1c0 .41-.34.75-.75.75H4.9l1.3 1.3a2.25 2.25 0 001.3-2.05v-1zM6.4 16.5l-1.23 1.23c.14.16.35.27.58.27h.5c4 0 7.25-3.25 7.25-7.25v-1c0-.41.34-.75.75-.75h3a.75.75 0 000-1.5h-3c-1.24 0-2.25 1-2.25 2.25v1c0 3.12-2.5 5.67-5.6 5.75zm.8-3.09c.26.48.34 1.02.23 1.53a4.75 4.75 0 003.07-4.44v-1c0-1.8 1.46-3.25 3.25-3.25h3.5a.75.75 0 000-1.5h-3.5A4.75 4.75 0 009 9.5v1c0 1.28-.74 2.38-1.8 2.91zm-5.48-2.44c.3-.3.77-.3 1.06 0l3 3c.3.3.3.77 0 1.06l-3 3a.75.75 0 01-1.06-1.06l1.72-1.72H.75a.75.75 0 010-1.5h2.69l-1.72-1.72a.75.75 0 010-1.06z"/>
    </svg>);
}
export default StreamInputIcon;
