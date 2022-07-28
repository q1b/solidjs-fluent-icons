import { splitProps } from "solid-js";
function ScaleFitIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 6v8c0 1.1.9 2 2 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2zm11.12 6.08a.5.5 0 01.05-.7l1-.88H11.5a.5.5 0 010-1h2.67l-1-.87a.5.5 0 01.66-.76l2 1.75a.5.5 0 010 .76l-2 1.75a.5.5 0 01-.7-.05zM6.88 7.92a.5.5 0 01-.05.7l-1 .88H8.5a.5.5 0 010 1H5.83l1 .87a.5.5 0 01-.66.76l-2-1.75a.5.5 0 010-.76l2-1.75a.5.5 0 01.7.05z"/>
    </svg>);
}
export default ScaleFitIcon;
