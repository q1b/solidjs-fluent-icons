import { splitProps } from "solid-js";
function Wifi1Icon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16.83 7.38c.41.41.8.88 1.14 1.37a.5.5 0 01-.83.57 8.61 8.61 0 00-14.2 0 .5.5 0 01-.82-.58 9.61 9.61 0 0114.71-1.36zM14.6 9.36c.47.47.88 1.04 1.19 1.65a.5.5 0 01-.89.46 5.45 5.45 0 00-9.73-.01.5.5 0 11-.89-.46A6.45 6.45 0 0114.6 9.35zm-1.71 2.5c.35.35.64.78.85 1.25a.5.5 0 01-.92.4 3.03 3.03 0 00-5.56-.01.5.5 0 11-.92-.4 4.03 4.03 0 016.54-1.24zm-1.93 1.93a1.3 1.3 0 11-1.83 1.83 1.3 1.3 0 011.83-1.83z"/>
    </svg>);
}
export default Wifi1Icon;
