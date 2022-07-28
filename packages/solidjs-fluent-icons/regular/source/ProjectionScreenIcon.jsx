import { splitProps } from "solid-js";
function ProjectionScreenIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 3a1 1 0 000 2v6a3 3 0 003 3h3.5v2h-2a.5.5 0 000 1h5a.5.5 0 000-1h-2v-2H14a3 3 0 003-3V5a1 1 0 100-2H3zm1 2h12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5z"/>
    </svg>);
}
export default ProjectionScreenIcon;
