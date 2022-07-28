import { splitProps } from "solid-js";
function TextAddSpaceBeforeIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12.03 5.78a.75.75 0 00-1.06-1.06l-.97.97-.97-.97a.75.75 0 00-1.06 1.06l1.5 1.5c.3.3.77.3 1.06 0l1.5-1.5zM3 10.75c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"/>
    </svg>);
}
export default TextAddSpaceBeforeIcon;
