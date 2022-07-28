import { splitProps } from "solid-js";
function DataBarVerticalIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 3a2 2 0 00-2 2v10a2 2 0 104 0V5a2 2 0 00-2-2zm5 3a2 2 0 00-2 2v7a2 2 0 104 0V8a2 2 0 00-2-2zm5 3a2 2 0 00-2 2v4a2 2 0 104 0v-4a2 2 0 00-2-2z"/>
    </svg>);
}
export default DataBarVerticalIcon;
