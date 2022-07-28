import { splitProps } from "solid-js";
function DocumentTableArrowRightIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9 10.26A5.52 5.52 0 0110.4 12H13v-1.5a.5.5 0 00-.5-.5H9v.26zM13 13h-2.2a5.5 5.5 0 01.18 2h1.52a.5.5 0 00.5-.5V13zM5.5 9c.46 0 .9.06 1.32.16.2-.1.44-.16.68-.16h5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-1.7a5.49 5.49 0 01-1.06 2h4.76c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0110 6.5V2H5.5C4.67 2 4 2.67 4 3.5v5.7c.48-.13.98-.2 1.5-.2zM11 6.5V2.25L15.75 7H11.5a.5.5 0 01-.5-.5zm-1 8a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15.35A.5.5 0 008 14.5a.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L6.29 14H3.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z"/>
    </svg>);
}
export default DocumentTableArrowRightIcon;
