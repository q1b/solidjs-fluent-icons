import { splitProps } from "solid-js";
function FlagIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.5 13h11a.5.5 0 00.42-.78L13.1 8l2.82-4.22A.5.5 0 0015.5 3H4a.5.5 0 00-.5.5v14a.5.5 0 001 0V13z"/>
    </svg>);
}
export default FlagIcon;
