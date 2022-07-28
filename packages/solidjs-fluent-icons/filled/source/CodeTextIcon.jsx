import { splitProps } from "solid-js";
function CodeTextIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.75 4.5a.75.75 0 000 1.5h5a.75.75 0 000-1.5h-5zm3 3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM4 11.25c0-.41.34-.75.75-.75h9.5a.75.75 0 010 1.5h-9.5a.75.75 0 01-.75-.75zM2.75 13.5a.75.75 0 000 1.5h8a.75.75 0 000-1.5h-8zm9.75-5.25c0-.41.34-.75.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zM10.75 4.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"/>
    </svg>);
}
export default CodeTextIcon;
