import { splitProps } from "solid-js";
function BookClockIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 4c0-1.1.9-2 2-2h8a2 2 0 012 2v11a1 1 0 01-1 1H5a1 1 0 001 1h9.5a.5.5 0 010 1H6a2 2 0 01-2-2V4zm6 9a4 4 0 100-8 4 4 0 000 8zm-.5-6c.28 0 .5.22.5.5V9h1a.5.5 0 010 1H9.5a.5.5 0 01-.5-.5v-2c0-.28.22-.5.5-.5z"/>
    </svg>);
}
export default BookClockIcon;
