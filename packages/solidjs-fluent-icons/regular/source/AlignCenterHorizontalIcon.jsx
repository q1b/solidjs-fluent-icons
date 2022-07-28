import { splitProps } from "solid-js";
function AlignCenterHorizontalIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M18 9.5a.5.5 0 01-.5.5H16v2a2 2 0 01-2 2h-1a2 2 0 01-2-2v-2H9v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4H2.5a.5.5 0 010-1H4V5c0-1.1.9-2 2-2h1a2 2 0 012 2v4h2V7c0-1.1.9-2 2-2h1a2 2 0 012 2v2h1.5c.28 0 .5.22.5.5zM5 14a1 1 0 001 1h1a1 1 0 001-1V5a1 1 0 00-1-1H6a1 1 0 00-1 1v9zm7-2a1 1 0 001 1h1a1 1 0 001-1V7a1 1 0 00-1-1h-1a1 1 0 00-1 1v5z"/>
    </svg>);
}
export default AlignCenterHorizontalIcon;
