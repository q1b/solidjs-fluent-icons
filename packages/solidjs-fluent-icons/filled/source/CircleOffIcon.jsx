import { splitProps } from "solid-js";
function CircleOffIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15.3 16l1.85 1.85a.5.5 0 00.7-.7l-15-15a.5.5 0 10-.7.7L4 4.71A8 8 0 0015.3 16zm2.7-6c0 1.67-.51 3.21-1.38 4.5L5.5 3.38A8 8 0 0118 10z"/>
    </svg>);
}
export default CircleOffIcon;
