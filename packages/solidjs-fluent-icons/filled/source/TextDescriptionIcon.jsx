import { splitProps } from "solid-js";
function TextDescriptionIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.75 4.5a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75zm0 3a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75zM2 11.25c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h9.5a.75.75 0 000-1.5h-9.5z"/>
    </svg>);
}
export default TextDescriptionIcon;
