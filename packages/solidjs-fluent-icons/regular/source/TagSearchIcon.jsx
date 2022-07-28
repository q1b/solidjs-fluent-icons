import { splitProps } from "solid-js";
function TagSearchIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15 6a1 1 0 11-2 0 1 1 0 012 0zM9.7 2.58A2 2 0 0111.13 2l4.89.03a2 2 0 011.99 2v4.95a2 2 0 01-.58 1.42l-.36.36c-.2-.27-.44-.51-.7-.72l.35-.35a1 1 0 00.3-.7L17 4.02a1 1 0 00-1-1L11.12 3a1 1 0 00-.71.3L3.73 9.95a1 1 0 000 1.41l4.95 4.95a1 1 0 001.35.05c.22.26.46.5.73.7a2 2 0 01-2.8-.04l-4.94-4.95a2 2 0 010-2.83L9.7 2.58zm6.6 13.02a3.5 3.5 0 10-.7.7l2.55 2.55a.5.5 0 10.7-.7L16.3 15.6zm-.3-2.1a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
    </svg>);
}
export default TagSearchIcon;
