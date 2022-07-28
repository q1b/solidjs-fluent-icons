import { splitProps } from "solid-js";
function DriveTrainIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15 2a2 2 0 00-2 2v1h-1.59A1.5 1.5 0 008.6 5H7V4a2 2 0 10-4 0v3a2 2 0 104 0V6h1.59c.15.43.48.76.91.91v6.18a1.5 1.5 0 00-.91.91H7v-1a2 2 0 10-4 0v3a2 2 0 104 0v-1h1.59a1.5 1.5 0 002.82 0H13v1a2 2 0 104 0v-3a2 2 0 10-4 0v1h-1.59a1.5 1.5 0 00-.91-.91V6.9c.43-.15.76-.48.91-.91H13v1a2 2 0 104 0V4a2 2 0 00-2-2z"/>
    </svg>);
}
export default DriveTrainIcon;
