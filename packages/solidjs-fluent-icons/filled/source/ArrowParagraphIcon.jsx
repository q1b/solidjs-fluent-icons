import { splitProps } from "solid-js";
function ArrowParagraphIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17.25 2c.41 0 .75.34.75.75v2.5A2.75 2.75 0 0115.25 8h-3.8l1.36 1.5a.75.75 0 01-1.12 1L9.2 7.75a.75.75 0 010-1L11.7 4a.75.75 0 011.12 1l-1.36 1.5h3.8c.69 0 1.25-.56 1.25-1.25v-2.5c0-.41.34-.75.75-.75zM8.3 9.5a.75.75 0 10-1.1 1L8.55 12h-5.8a.75.75 0 000 1.5h5.8L7.2 15a.75.75 0 001.1 1l2.5-2.75a.75.75 0 000-1L8.3 9.5z"/>
    </svg>);
}
export default ArrowParagraphIcon;
