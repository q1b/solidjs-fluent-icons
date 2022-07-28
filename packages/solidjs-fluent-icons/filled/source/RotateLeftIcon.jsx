import { splitProps } from "solid-js";
function RotateLeftIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12.39 12a.53.53 0 01-.54-.52c0-.29.24-.52.54-.52h.35c1.77 0 3.2-1.08 3.2-2.42 0-1.3-1.35-2.36-3.04-2.42H7.82L9.04 7.3c.2.2.2.53 0 .73a.54.54 0 01-.7.05l-.06-.05-2.12-2.08a.51.51 0 010-.73l2.12-2.08.06-.05c.21-.15.5-.13.7.05.2.2.2.53 0 .74L7.82 5.08h4.92C15.1 5.08 17 6.63 17 8.54S15.1 12 12.74 12h-.35zm-9-3c-.21 0-.39.17-.39.38v6.87c0 .41.36.75.8.75h12.8a.4.4 0 00.35-.19.37.37 0 00-.15-.51L3.6 9.05A.41.41 0 003.4 9z"/>
    </svg>);
}
export default RotateLeftIcon;
