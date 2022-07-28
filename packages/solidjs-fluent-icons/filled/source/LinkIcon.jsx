import { splitProps } from "solid-js";
function LinkIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14 6a4 4 0 01.2 8H12a.75.75 0 01-.1-1.5H14a2.5 2.5 0 00.16-5H12a.75.75 0 01-.1-1.5H14zM8 6a.75.75 0 01.1 1.5H6a2.5 2.5 0 00-.16 5H8a.75.75 0 01.1 1.5H6a4 4 0 01-.2-8H8zM6.25 9.25h7.5a.75.75 0 01.1 1.5h-7.6a.75.75 0 01-.1-1.5h7.6-7.5z"/>
    </svg>);
}
export default LinkIcon;
