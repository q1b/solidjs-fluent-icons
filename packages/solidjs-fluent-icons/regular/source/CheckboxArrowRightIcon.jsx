import { splitProps } from "solid-js";
function CheckboxArrowRightIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 2a3 3 0 00-3 3v8a3 3 0 003 3h4.2c-.08-.32-.15-.66-.18-1H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2h8a2 2 0 012 2v4.02c.34.03.68.1 1 .19V5a3 3 0 00-3-3H5zm7.85 4.85a.5.5 0 00-.7-.7L7.5 10.79 5.85 9.15a.5.5 0 10-.7.7l2 2c.2.2.5.2.7 0l5-5zM14.5 10a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm2.35 4.85a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 14H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z"/>
    </svg>);
}
export default CheckboxArrowRightIcon;
