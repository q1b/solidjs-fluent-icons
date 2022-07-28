import { splitProps } from "solid-js";
function TrophyIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.5 4c0-1.1.9-2 2-2h5a2 2 0 012 2h1c.82 0 1.5.67 1.5 1.5V7a3 3 0 01-2.6 2.97 4.5 4.5 0 01-3.9 3.5v1.5h2a2 2 0 012 2v.5a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-.5c0-1.1.9-2 2-2h2v-1.5a4.5 4.5 0 01-3.9-3.5A3 3 0 013 7V5.5C3 4.67 3.67 4 4.5 4h1zm9 4.94A2 2 0 0016 7V5.5a.5.5 0 00-.5-.5h-1v3.94zM5.5 5h-1a.5.5 0 00-.5.5V7a2 2 0 001.5 1.93V5z"/>
    </svg>);
}
export default TrophyIcon;
