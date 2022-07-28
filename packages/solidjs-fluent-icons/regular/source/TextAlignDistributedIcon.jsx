import { splitProps } from "solid-js";
function TextAlignDistributedIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.35 5.65L3.71 5H17.5a.5.5 0 000-1H3.7l.65-.65a.5.5 0 10-.7-.7l-1.5 1.5a.5.5 0 000 .7l1.5 1.5a.5.5 0 10.7-.7zM2 9.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zm.5 4.5h13.8l-.65-.65a.5.5 0 01.7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 01-.7-.7l.64-.65H2.5a.5.5 0 010-1z"/>
    </svg>);
}
export default TextAlignDistributedIcon;
