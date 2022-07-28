import { splitProps } from "solid-js";
function DataBarVerticalIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 3a2 2 0 00-2 2v10a2 2 0 104 0V5a2 2 0 00-2-2zM4 5a1 1 0 012 0v10a1 1 0 11-2 0V5zm4 3a2 2 0 114 0v7a2 2 0 11-4 0V8zm2-1a1 1 0 00-1 1v7a1 1 0 102 0V8a1 1 0 00-1-1zm3 4a2 2 0 114 0v4a2 2 0 11-4 0v-4zm2-1a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1z"/>
    </svg>);
}
export default DataBarVerticalIcon;
