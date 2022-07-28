import { splitProps } from "solid-js";
function BookTemplateIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 3.5A2.5 2.5 0 014.5 1h9A2.5 2.5 0 0116 3.5V6h-1V3.5c0-.83-.67-1.5-1.5-1.5h-9C3.67 2 3 2.67 3 3.5v9c0 .83.67 1.5 1.5 1.5H8v1H4.5A2.5 2.5 0 012 12.5v-9zM5.5 6H11a3 3 0 00-2.24 1H5.5a.5.5 0 010-1zm2.67 2H5.5a.5.5 0 000 1H8a3 3 0 01.17-1zM5.5 4a.5.5 0 000 1h7a.5.5 0 000-1h-7zM18 9a2 2 0 00-2-2h-5a2 2 0 00-2 2v8c0 1.1.9 2 2 2h6.5a.5.5 0 000-1H11a1 1 0 01-1-1h7.5a.5.5 0 00.5-.5V9zm-8 7V9a1 1 0 011-1h5a1 1 0 011 1v7h-7z"/>
    </svg>);
}
export default BookTemplateIcon;
