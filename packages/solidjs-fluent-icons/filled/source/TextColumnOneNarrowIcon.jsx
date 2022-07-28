import { splitProps } from "solid-js";
function TextColumnOneNarrowIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.75 5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zm0 3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM7 11.75c0-.41.34-.75.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zM7.75 14a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z"/>
    </svg>);
}
export default TextColumnOneNarrowIcon;
