import { splitProps } from "solid-js";
function TextBulletListSquareToolboxIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 5c0-1.1.9-2 2-2h10a2 2 0 012 2v4.5c-.42-.31-.94-.5-1.5-.5h-2c-.82 0-1.54.4-2 1h-2a.5.5 0 000 1h1.55v.04A2.5 2.5 0 009 13.5V17H5a2 2 0 01-2-2V5zm3.75 3a.75.75 0 100-1.5.75.75 0 000 1.5zM6 10.25a.75.75 0 101.5 0 .75.75 0 00-1.5 0zM6.75 14a.75.75 0 100-1.5.75.75 0 000 1.5zm6.75-7h-4a.5.5 0 000 1h4a.5.5 0 000-1zM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 00-1 0v.5h-3v-.5a.5.5 0 00-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5zm1-.5v.5h3v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5V16h2v.5a.5.5 0 001 0V16h3v.5a.5.5 0 001 0V16z"/>
    </svg>);
}
export default TextBulletListSquareToolboxIcon;
