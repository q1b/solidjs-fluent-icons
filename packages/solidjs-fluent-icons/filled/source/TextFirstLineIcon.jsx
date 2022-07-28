import { splitProps } from "solid-js";
function TextFirstLineIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15.72 2.22a.75.75 0 111.06 1.06l-.97.97.97.97a.75.75 0 01-1.06 1.06l-1.5-1.5a.75.75 0 010-1.06l1.5-1.5zM3.75 3.5h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5zm12.5 10a.75.75 0 010 1.5H3.75a.75.75 0 010-1.5h12.5zM3.75 10h12.5a.75.75 0 000-1.5H3.75a.75.75 0 000 1.5z"/>
    </svg>);
}
export default TextFirstLineIcon;
