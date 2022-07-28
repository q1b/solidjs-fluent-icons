import { splitProps } from "solid-js";
function BookTemplateIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.5 1A2.5 2.5 0 002 3.5v9A2.5 2.5 0 004.5 15H8V9H5.5a.5.5 0 010-1h2.67a3 3 0 01.6-1H5.5a.5.5 0 010-1H16V3.5A2.5 2.5 0 0013.5 1h-9zM5 4.5c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM18 9a2 2 0 00-2-2h-5a2 2 0 00-2 2v8c0 1.1.9 2 2 2h6.5a.5.5 0 000-1H11a1 1 0 01-1-1h7.5a.5.5 0 00.5-.5V9zm-8 7V9a1 1 0 011-1h5a1 1 0 011 1v7h-7z"/>
    </svg>);
}
export default BookTemplateIcon;
