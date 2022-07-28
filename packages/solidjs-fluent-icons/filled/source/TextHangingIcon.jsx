import { splitProps } from "solid-js";
function TextHangingIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16.25 3.5a.75.75 0 010 1.5H3.75a.75.75 0 010-1.5h12.5zm-5 10a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h7.5zM12 9.25a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h7.5c.41 0 .75-.34.75-.75zm3.72 1.47a.75.75 0 111.06 1.06l-.97.97.97.97a.75.75 0 11-1.06 1.06l-1.5-1.5a.75.75 0 010-1.06l1.5-1.5z"/>
    </svg>);
}
export default TextHangingIcon;
