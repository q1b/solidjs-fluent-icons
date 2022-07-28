import { splitProps } from "solid-js";
function ClockDismissIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11 1a8 8 0 11-.59 15.98 5.5 5.5 0 00-7.39-7.39L3 9a8 8 0 018-8zm-.5 3a.5.5 0 00-.5.5v5.09a.5.5 0 00.5.41h3.09a.5.5 0 00-.09-1H11V4.41a.5.5 0 00-.5-.41zM10 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7L5.5 13.79l-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7L6.21 14.5l1.14-1.15z"/>
    </svg>);
}
export default ClockDismissIcon;
