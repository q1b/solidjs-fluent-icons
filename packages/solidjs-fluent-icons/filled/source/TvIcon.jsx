import { splitProps } from "solid-js";
function TvIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 6c0-1.1.9-2 2-2h12a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm3.5 10a.5.5 0 000 1h9a.5.5 0 000-1h-9z"/>
    </svg>);
}
export default TvIcon;
