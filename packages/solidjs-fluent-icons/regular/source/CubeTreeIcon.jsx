import { splitProps } from "solid-js";
function CubeTreeIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.66 4.53a.5.5 0 00-.32.95l1.16.38V7a.5.5 0 001 0V5.86l1.16-.38a.5.5 0 10-.32-.95L10 4.97l-1.34-.44zm1.77-2.46a1.5 1.5 0 00-.86 0l-2.86.85a.99.99 0 00-.71.95v4.26c0 .44.3.83.72.96l2.79.83a.5.5 0 00-.01.08v1H8a2 2 0 00-2 2v.05a2.5 2.5 0 101 0V13a1 1 0 011-1h4a1 1 0 011 1v.05a2.5 2.5 0 101 0V13a2 2 0 00-2-2h-1.5v-1a.5.5 0 000-.08l2.78-.83a1 1 0 00.72-.96V3.87a1 1 0 00-.72-.95l-2.85-.85zm-.57.95a.5.5 0 01.28 0l2.86.85v4.26l-2.86.85a.5.5 0 01-.28 0L7 8.13V3.87l2.86-.85zM5 15.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm8.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
    </svg>);
}
export default CubeTreeIcon;
