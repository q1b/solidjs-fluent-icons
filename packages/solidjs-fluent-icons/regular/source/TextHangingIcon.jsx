import { splitProps } from "solid-js";
function TextHangingIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16.5 4a.5.5 0 010 1h-13a.5.5 0 010-1h13zm-4 10a.5.5 0 010 1h-9a.5.5 0 010-1h9zm.5-4.5a.5.5 0 00-.5-.5h-9a.5.5 0 000 1h9a.5.5 0 00.5-.5zm2.15 2.15l1.5-1.5a.5.5 0 01.7.7L16.21 12l1.14 1.15a.5.5 0 01-.7.7l-1.5-1.5a.5.5 0 010-.7z"/>
    </svg>);
}
export default TextHangingIcon;
