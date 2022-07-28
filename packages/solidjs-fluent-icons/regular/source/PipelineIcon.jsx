import { splitProps } from "solid-js";
function PipelineIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 5.5a1.5 1.5 0 113 0V6h10v-.5a1.5 1.5 0 013 0v9a1.5 1.5 0 01-3 0V14H5v.5a1.5 1.5 0 01-3 0v-9zm2 0a.5.5 0 00-1 0v9a.5.5 0 001 0v-9zM15 7H5v6h10V7zm2-1.5a.5.5 0 00-1 0v9a.5.5 0 001 0v-9z"/>
    </svg>);
}
export default PipelineIcon;
