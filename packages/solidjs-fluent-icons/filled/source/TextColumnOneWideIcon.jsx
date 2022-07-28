import { splitProps } from "solid-js";
function TextColumnOneWideIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.75 5a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H3.75zm0 3a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H3.75zM3 11.75c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3.75 14a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H3.75z"/>
    </svg>);
}
export default TextColumnOneWideIcon;
