import { splitProps } from "solid-js";
function ImageMultipleOffIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.85 2.15a.5.5 0 10-.7.7l1.4 1.41A2.99 2.99 0 003 6v6c0 .65.2 1.25.55 1.74L7.6 9.7a2 2 0 01.9-.52l6.1 6.11c-.58.44-1.3.7-2.09.7H5.76A3 3 0 008 17h4.5c1.06 0 2.04-.37 2.8-.98l1.85 1.83a.5.5 0 00.7-.7l-15-15zM15.8 13.68l.76.76c.28-.59.44-1.25.44-1.94V8a3 3 0 00-1-2.24v6.74a3.56 3.56 0 01-.2 1.18zM5.22 3.1l9.68 9.68A3 3 0 0015 12V6a3 3 0 00-3-3H6a3 3 0 00-.78.1zm7.28 3.4a1 1 0 11-2 0 1 1 0 012 0zm1.24 7.95L9.7 10.4a1 1 0 00-1.42 0l-4.03 4.04c.5.34 1.1.55 1.74.55h6c.65 0 1.25-.2 1.74-.55z"/>
    </svg>);
}
export default ImageMultipleOffIcon;
