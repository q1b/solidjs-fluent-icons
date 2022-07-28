import { splitProps } from "solid-js";
function CatchUpIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.45 7.27a.5.5 0 01.91.04l2.35 5.76a1.5 1.5 0 002.73.11l1.23-2.4a.5.5 0 01.44-.28h.98a1.5 1.5 0 100-1h-.98a1.5 1.5 0 00-1.33.82l-1.23 2.4a.5.5 0 01-.91-.03L9.29 6.93a1.5 1.5 0 00-2.73-.11l-1.23 2.4a.5.5 0 01-.44.28H3.9a1.5 1.5 0 100 1h.98a1.5 1.5 0 001.33-.82l1.23-2.4z"/>
    </svg>);
}
export default CatchUpIcon;
