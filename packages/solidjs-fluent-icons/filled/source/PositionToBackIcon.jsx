import { splitProps } from "solid-js";
function PositionToBackIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12 14c0-1.1.9-2 2-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2v-3zm2-1a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1h-3zM5 9h1.3C7.8 9 9 7.8 9 6.3V5h3.5A2.5 2.5 0 0115 7.5V11h-1.3a2.7 2.7 0 00-2.7 2.7V15H7.5A2.5 2.5 0 015 12.5V9zM1 3c0-1.1.9-2 2-2h3a2 2 0 012 2v3a2 2 0 01-2 2H3a2 2 0 01-2-2V3zm2-1a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V3a1 1 0 00-1-1H3z"/>
    </svg>);
}
export default PositionToBackIcon;
