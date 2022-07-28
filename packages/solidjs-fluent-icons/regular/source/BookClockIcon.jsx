import { splitProps } from "solid-js";
function BookClockIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 000-1H6a1 1 0 01-1-1h10a1 1 0 001-1V4a2 2 0 00-2-2H6a2 2 0 00-2 2zm10-1a1 1 0 011 1v11H5V4a1 1 0 011-1h8zm-4 3a3 3 0 100 6 3 3 0 000-6zM6 9a4 4 0 118 0 4 4 0 01-8 0zm4-1.5a.5.5 0 00-1 0v2c0 .28.22.5.5.5H11a.5.5 0 000-1h-1V7.5z"/>
    </svg>);
}
export default BookClockIcon;
