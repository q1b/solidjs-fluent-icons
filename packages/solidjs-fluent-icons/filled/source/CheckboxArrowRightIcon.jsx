import { splitProps } from "solid-js";
function CheckboxArrowRightIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 2a3 3 0 00-3 3v8a3 3 0 003 3h4.2A5.5 5.5 0 0116 9.2V5a3 3 0 00-3-3H5zm7.85 4.85l-5 5a.5.5 0 01-.7 0l-2-2a.5.5 0 11.7-.7l1.65 1.64 4.65-4.64a.5.5 0 01.7.7zM14.5 10a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm2.35 4.85a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 14H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z"/>
    </svg>);
}
export default CheckboxArrowRightIcon;
