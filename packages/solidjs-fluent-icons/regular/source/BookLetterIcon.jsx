import { splitProps } from "solid-js";
function BookLetterIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 000-1H6a1 1 0 01-1-1h10a1 1 0 001-1V4a2 2 0 00-2-2H6a2 2 0 00-2 2zm10-1a1 1 0 011 1v11H5V4a1 1 0 011-1h8zm-4 2c.2 0 .38.12.46.3l3 7a.5.5 0 01-.92.4l-.73-1.7H8.2l-.73 1.7a.5.5 0 01-.92-.4l3-7A.5.5 0 0110 5zm-1.38 5h2.76L10 6.77 8.62 10z"/>
    </svg>);
}
export default BookLetterIcon;
